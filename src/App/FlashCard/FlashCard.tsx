import { Card } from "data/Card"
import { Direction } from "data/Direction"
import React, { createRef, forwardRef, useImperativeHandle, useRef, useState } from "react"
import ReactCardFlip from 'react-card-flip';
import CardButtons from "./CardButtons";
import { Swipeable, direction } from "./Swipeable";
import { ReactComponent as ThumbsDownIcon } from 'images/icons/thumb-down-24px.svg';
import { ReactComponent as ThumbsUpIcon } from 'images/icons/thumb-up-24px.svg';
import './styles/flashCard.scss'

type Props = {
  card: Card
  onFlipped: (card: Card, flipped: boolean) => void,
  onSwiped: (card: Card, dir: Direction) => void
  onCardLeftScreen: (card: Card) => void
} 

export type FlashCardRef = {
  flipped: boolean;
  flip: () => void
  swipe: (dir: Direction) => void
}

const FlashCard = forwardRef<FlashCardRef, Props>((props, ref) => {
  const { onSwiped, card, onCardLeftScreen, onFlipped } = props;
  const cardRef = createRef<{
    swipe (dir?: Direction): Promise<void>
  }>();
  const wrapperRef = createRef<HTMLDivElement>();
  
  
  // useEffect(() => {
  //   if (swipeAction && cardRef.current) {
  //     console.log("I will swipe ", card)
  //     cardRef.current.swipe(swipeAction)
  //   }
  // }, [card, cardRef, swipeAction]);
  
  const [flipped, setFlipped] = useState(false)
  
  const handleFlip = () => {
    console.log("flip", dragging.current)
    if (!dragging.current) {
      setFlipped(!flipped)
      onFlipped(card, flipped)
    }
  }

  useImperativeHandle(ref, () => ({
    flipped,
    flip: handleFlip,
    swipe: (dir) => cardRef.current?.swipe(dir)
  }));

  const handleAfterSwipe = () => {
    console.log('after swipe')
    onCardLeftScreen?.(card);
  }

  // interface RenderButtonsPayload {
  //   right: () => void;
  //   left: () => void;
  // }
  // const renderButtons = ({
  //   right,
  //   left,
  // }: RenderButtonsPayload) => (
  //   <CardButtons
  //     right={right}
  //     left={left}
  //   />
  // );

  const dragging = useRef(false)
  const handleDragging = (offset: number) => {
    dragging.current = true;
  }

  const handleDragEnd = () => {
    // set dragging to false AFTER handleFlip fires
    setTimeout(() => { dragging.current = false; }, 200);
  }

  console.log('flipped?', flipped)
  
  return (
    <div ref={wrapperRef} className='flash-card-wrapper'>
      <Swipeable 
        onSwipe={(dir) => onSwiped(card, dir)} 
        fadeThreshold={60}
        onDragging={handleDragging}
        onDragEnd={handleDragEnd}
        onAfterSwipe={handleAfterSwipe} 
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

export default FlashCard