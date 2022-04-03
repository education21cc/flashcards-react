import { createRef, forwardRef, useImperativeHandle, useState } from "react"
import { Swipeable, direction } from "../Swipeable";
import {Howl} from 'howler';
import { useTranslationStore } from "stores/translations";
import './../styles/flashCard.scss'

type Props = {
  onSwiped: () => void
  onCardLeftScreen: () => void
}

const whooshSound = new Howl({
  src: ['sound/whoosh.ogg']
});

export type IntroCardRef = {
  swipe: (dir: direction) => void
}

const CardIntro = forwardRef<IntroCardRef, Props>((props, ref) => {
  const { onSwiped, onCardLeftScreen } = props;

  const wrapperRef = createRef<HTMLDivElement>();
  const [flyout, setFlyout] = useState<direction>()
  const translations = useTranslationStore();

  useImperativeHandle(ref, () => ({
    swipe: (dir: direction) => {
      whooshSound.play();
      setFlyout(dir);
    }
  }));

  const handleAfterSwipe = () => {
    onCardLeftScreen?.();
  }

  const handleSwipe = () => {
    whooshSound.play();
    onSwiped?.();
  }

  return (
    <div ref={wrapperRef} className='flash-card-wrapper'>
      <Swipeable
        onSwipe={handleSwipe}
        fadeThreshold={60}
        onAfterSwipe={handleAfterSwipe}
        forceFlyout={flyout}
      >
          <div className="card card-intro">
            <h2>{translations.getText("intro-header")}</h2>
            <div className="intro-description">
              {translations.getText("intro-description")}
            </div>
            <div className="intro-help-correct">
              <div className="text">
                {translations.getText("intro-description-correct")}
              </div>
            </div>
            <div className="intro-help-wrong">
              <div className="text">
                {translations.getText("intro-description-wrong")}
              </div>
            </div>
          </div>
        </Swipeable>
    </div>
  )
})

export default CardIntro
