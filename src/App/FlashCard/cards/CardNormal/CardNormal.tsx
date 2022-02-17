import { Card } from "data/Card"
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react"
import ReactCardFlip from 'react-card-flip';
import { Swipeable, direction } from "../../Swipeable";
import { ReactComponent as ThumbsDownIcon } from 'images/icons/thumb-down-24px.svg';
import { ReactComponent as ThumbsUpIcon } from 'images/icons/thumb-up-24px.svg';
import {Howl} from 'howler';
import { useTranslationStore } from "stores/translations";
import CardFace from "./CardFace";
import './../../styles/flashCard.scss'

type Props = {
  card: Card
  onFlipped: (card: Card, flipped: boolean) => void,
  onSwiped: (card: Card, dir: direction) => void
  onCardLeftScreen: (card: Card, dir: direction) => void
}

export type NormalCardRef = {
  flipped: boolean;
  flip: () => void
  swipe: (dir: direction) => void
}

const flipSound = new Howl({
  src: ['sound/card-flip.ogg']
});


const whooshSound = new Howl({
  src: ['sound/whoosh.ogg']
});


const CardNormal = forwardRef<NormalCardRef, Props>((props, ref) => {
  const { onSwiped, card, onCardLeftScreen, onFlipped } = props;

  const flying = useRef(false);
  const dragging = useRef(false)
  const [flipped, setFlipped] = useState(false)
  const [flyout, setFlyout] = useState<direction>()

  const handleFlip = () => {
    if (!dragging.current) {
      flipSound.play();

      setFlipped(!flipped)
      onFlipped(card, flipped)
    }
  }

  useImperativeHandle(ref, () => ({
    flipped,
    flip: handleFlip,
    swipe: (dir: direction) => {
      whooshSound.play();
      setFlyout(dir);
    }
  }));

  const handleSwipe = (dir: direction) => {
    whooshSound.play();
    flying.current = true;
    onSwiped?.(card, dir);
  }

  const handleAfterSwipe = (dir: direction) => {
    setFlyout(undefined);
    setFlipped(false);
    flying.current = true;
    onCardLeftScreen?.(card, dir);
  }

  const handleDragging = (offset: number) => {
    dragging.current = true;
  }

  const handleDragEnd = () => {
    // set dragging to false AFTER handleFlip fires
    setTimeout(() => { dragging.current = false; }, 20);
  }

  return (
    <div className='flash-card-wrapper'>
      <Swipeable
        onSwipe={handleSwipe}
        fadeThreshold={60}
        onDragging={handleDragging}
        onDragEnd={handleDragEnd}
        onAfterSwipe={handleAfterSwipe}
        forceFlyout={flyout}
        leftIcon={<ThumbsDownIcon />}
        rightIcon={<ThumbsUpIcon />}
        disabled={!flipped}
      >
        <ReactCardFlip
          isFlipped={flipped}
          flipDirection="horizontal"
          flipSpeedFrontToBack={flying.current ? 0 : undefined}
          flipSpeedBackToFront={flying.current ? 0 : undefined}
        >
         <CardFace onClick={handleFlip} side="front" card={card} />
         <CardFace onClick={handleFlip} side="back" card={card} />
        </ReactCardFlip>
      </Swipeable>
    </div>
  )
})

export default CardNormal
