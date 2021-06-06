import { Card } from "data/Card"
import React, { createRef, forwardRef, useImperativeHandle, useRef, useState } from "react"
import ReactCardFlip from 'react-card-flip';
import { Swipeable, direction } from "../Swipeable";
import { ReactComponent as ThumbsDownIcon } from 'images/icons/thumb-down-24px.svg';
import { ReactComponent as ThumbsUpIcon } from 'images/icons/thumb-up-24px.svg';
import {Howl} from 'howler';
import './../styles/flashCard.scss'

type Props = {
  card: Card
  onFlipped: (card: Card, flipped: boolean) => void,
  onSwiped: (card: Card, dir: direction) => void
  onCardLeftScreen: (card: Card) => void
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

  const wrapperRef = createRef<HTMLDivElement>();  
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
      setFlyout(dir);
    }
  }));

  const handleSwipe = (dir: direction) => {
    whooshSound.play();
    onSwiped?.(card, dir);
  }

  const handleAfterSwipe = () => {
    onCardLeftScreen?.(card);
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
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
          <div className="card" onClick={handleFlip}>
            <div 
              style={{ backgroundImage: 'url(' + card.image + ')' }}
              className='image'
            />
          </div>
          <div className="card">
            This is the back of the card.
            <button onClick={handleFlip}>Click to flip</button>
          </div>
          </ReactCardFlip>    
        </Swipeable>
    </div>
  )
})

export default CardNormal