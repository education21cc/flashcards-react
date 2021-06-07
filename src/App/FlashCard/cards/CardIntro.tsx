import React, { createRef, forwardRef, useImperativeHandle, useRef, useState } from "react"
import { Swipeable, direction } from "../Swipeable";
import { ReactComponent as ThumbsDownIcon } from 'images/icons/thumb-down-24px.svg';
import { ReactComponent as ThumbsUpIcon } from 'images/icons/thumb-up-24px.svg';
import {Howl} from 'howler';
import './../styles/flashCard.scss'
import { useTranslationStore } from "stores/translations";

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