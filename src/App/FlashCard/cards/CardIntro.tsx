import React, { createRef, forwardRef, useImperativeHandle, useRef, useState } from "react"
import { Swipeable, direction } from "../Swipeable";
import { ReactComponent as ThumbsDownIcon } from 'images/icons/thumb-down-24px.svg';
import { ReactComponent as ThumbsUpIcon } from 'images/icons/thumb-up-24px.svg';
import {Howl} from 'howler';
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

  useImperativeHandle(ref, () => ({
    swipe: (dir: direction) => {
      setFlyout(dir);
    }
  }));

  const handleAfterSwipe = () => {
    onCardLeftScreen?.();
  }

  const handleSwipe = () => {
    onSwiped?.();
    whooshSound.play();
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
            <h2>Intro</h2>
            <div className="intro-description"></div>
            <div className="intro-help-correct">
              <div className="text">
                Wist je het niet?
              </div>
            </div>
            <div className="intro-help-wrong">
              <div className="text">
                Wist je het niet?
              </div>
            </div>
          </div>
        </Swipeable>
    </div>
  )
})

export default CardIntro