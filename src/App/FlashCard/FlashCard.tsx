import { Card } from "data/Card"
import { Direction } from "data/Direction"
import React, { createRef, forwardRef, useEffect, useImperativeHandle, useState } from "react"
import TinderCard from "react-tinder-card"
import ReactCardFlip from 'react-card-flip';
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
    // Calculate the distance the card is dragged. If dragged too far, dont flip
    const transformString = ((wrapperRef.current?.firstChild as HTMLElement).style?.transform)
    const [offsetX, offsetY] = transformString.match(/translate\(([^\)]*)/)?.[1].replaceAll('px', '').split(',').map(p => parseInt(p, 10)) ?? [0, 0]
    const distance = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
    
    if (distance < 2){
      setFlipped(!flipped)
      onFlipped(card, flipped)
    }
  }

  useImperativeHandle(ref, () => ({
    flipped,
    flip: handleFlip,
    swipe: (dir) => cardRef.current?.swipe(dir)
  }));
  return (
    <div ref={wrapperRef}>
      <TinderCard 
        ref={cardRef} 
        className='flash-card-wrapper' preventSwipe={["up", "down"]} 
        onSwipe={(dir) => onSwiped(card, dir)}
        onCardLeftScreen={() => onCardLeftScreen(card)}
      >
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
          <div className="card">
            <div 
              style={{ backgroundImage: 'url(' + card.image + ')' }}
              className='image'
              onClick={handleFlip}
            />
          </div>
          <div className="card">
            This is the back of the card.
            <button onClick={handleFlip}>Click to flip</button>
          </div>
          </ReactCardFlip>
      </TinderCard>
    </div>
  )
})

export default FlashCard