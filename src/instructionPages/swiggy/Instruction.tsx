import CardFace from "App/FlashCard/cards/CardNormal/CardFace"
import { CardType } from "data/Card"
import { createPopper, Placement } from '@popperjs/core';
import { useEffect, useMemo, useRef, useState } from "react";
import { ButtonBarIntro, ButtonBarNormal } from "App/ButtonBar";
import ReactCardFlip from "react-card-flip";
import { useTranslationStore } from "stores/translations";
import ReactMarkdown from "react-markdown";
import { ReactComponent as NextIcon } from './../../images/icons/forward-24px.svg';
import { Howl } from "howler";
import './styles/instruction.scss';

const music = new Howl({
  src: ['sound/music-elevator.ogg']
});

const plopSound = new Howl({
  src: ['sound/plop.ogg']
});

const card = {
  type: CardType.Normal,
  id: 'demo'
}

type Props = {
  onNextPage: () => void
  onPreviousPage: () => void
}

// Instructions componment for the swiggy project
const Instruction = (props: Props) => {
  const { onNextPage } = props;
  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const translations = useTranslationStore();

  const instructions = useMemo(() => ([{
    duration: 10000,
    elementSelector: '.flash-card-wrapper p',
    text: translations.getTextRaw("instructions-text1"),
  }, {
    duration: 10000,
    elementSelector: '.button-bar button',
    text: translations.getTextRaw("instructions-text2")
  }, {
    duration: 10000,
    elementSelector: '.flash-card-wrapper p button',
    text: translations.getTextRaw("instructions-text3"),
    placement: 'bottom' as Placement
  }, {
    duration: 10000,
    elementSelector: '.button-bar .button-right',
    text: translations.getTextRaw("instructions-text4")
  }, {
    duration: 10000,
    elementSelector: '.button-bar .button-left',
    text: translations.getTextRaw("instructions-text5")
  }]), [translations])

  useEffect(() => {
    let timeout:  NodeJS.Timeout
    const instruction = instructions[step]
    if (!instruction && tooltipRef.current) {
      tooltipRef.current.style.display = 'none'
      return
    }
    const source = containerRef.current?.querySelector(instruction.elementSelector)
    if (!source || !tooltipRef.current) return
    const content = tooltipRef.current.querySelector('.content')
    if (!content) return
    content.innerHTML = instruction.text
    createPopper(source, tooltipRef.current, {
      placement: instruction.placement ?? 'top',
      modifiers: [{
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      }],
    });

    timeout = setTimeout(() => {
      if (step < instructions.length) {
        setStep(step + 1)
      }
    }, instruction.duration)
    return () => {
      clearTimeout(timeout)
    }
  }, [instructions, step])

  // useEffect(() => {
  //   music.play();
  //   music.loop(true);
  // }, [])

  const cardOnBack = step > 1

  const handleClick = () => {
    if (step < instructions.length) {
      setStep(step + 1)
    }
  }

  useEffect(() => {
    plopSound.play();
  }, [step])

  const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
    setStep(instructions.length);
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div ref={containerRef} onClick={handleClick}>
      { step < 5 && (
        <>
          <div className="card-container">
            <div className="flash-card-wrapper">
              <ReactCardFlip
                isFlipped={!cardOnBack}
                flipDirection="horizontal"
                flipSpeedFrontToBack={undefined}
                flipSpeedBackToFront={undefined}
              >
                <CardFace side="front" card={card} />
                <CardFace side="back" card={card} />
              </ReactCardFlip>
            </div>
          </div>
          <ButtonBarNormal
            onLeftClick={() => undefined}
            onRightClick={() => undefined}
            onFlip={() => undefined}
            enableLeftAndRight={cardOnBack}
          />
        </>
      )}
      { step === 5 && (
        <>
          <div className="card-container">
            <div className="flash-card-wrapper">
              <CardFace side="front" card={{ type: CardType.Normal }}>
                <ReactMarkdown>
                  {translations.getTextRaw("instructions-text6")}
                </ReactMarkdown>
              </CardFace>
            </div>
          </div>
          <ButtonBarIntro
            onPlay={onNextPage}
          />
        </>
      )}
      { step !== 5 && (
        <button onClick={handleSkip} className="button-text button-next" >
          <span>sfs
            {translations.getText("instructions-skip")}
          </span>
          <NextIcon />
        </button>
      )}
      <div className="tooltip" ref={tooltipRef} role="tooltip">
        <div className="content"></div>
        <div className="arrow" data-popper-arrow></div>
      </div>
    </div>
  )
}

export default Instruction
