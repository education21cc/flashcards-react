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

export type NormalCardRef = {
  swipe: (dir: direction) => void
}

const CardIntro = forwardRef<NormalCardRef, Props>((props, ref) => {
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

  const dragging = useRef(false)
  const handleDragging = (offset: number) => {
    dragging.current = true;
  }

  const handleDragEnd = () => {
    // set dragging to false AFTER handleFlip fires
    setTimeout(() => { dragging.current = false; }, 200);
  }
  
  return (
    <div ref={wrapperRef} className='flash-card-wrapper'>
      <Swipeable 
        onSwipe={(dir) => onSwiped()} 
        fadeThreshold={60}
        onDragging={handleDragging}
        onDragEnd={handleDragEnd}
        onAfterSwipe={handleAfterSwipe} 
        forceFlyout={flyout}
      >
          <div className="card card-intro">
            <h2>Intro</h2>
            <div 
              className='image'
            />
          </div>
        </Swipeable>
    </div>
  )
})

export default CardIntro