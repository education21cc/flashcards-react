import { Card } from "data/Card"
import { Direction } from "data/Direction"
import React, { createRef, useEffect } from "react"
import TinderCard from "react-tinder-card"
import './styles/flashCard.scss'

type Props = {
  card: Card
  swipeAction?: Direction
  onSwiped: (card: Card, dir: Direction) => void
  onCardLeftScreen: (card: Card) => void
} 
declare interface API {
  /**
   * Programmatically trigger a swipe of the card in one of the valid directions `'left'`, `'right'`, `'up'` and `'down'`. This function, `swipe`, can be called on a reference of the TinderCard instance. Check the [example](https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js) code for more details on how to use this.
   *
   * @param dir The direction in which the card should be swiped. One of: `'left'`, `'right'`, `'up'` and `'down'`.
   */
  swipe (dir?: Direction): Promise<void>
}


const FlashCard = (props: Props) => {
  const { onSwiped, card, swipeAction, onCardLeftScreen } = props;
  const ref = createRef<API>();

  useEffect(() => {
    if (swipeAction && ref.current) {
      console.log("I will swipe ", card)
      ref.current.swipe(swipeAction)
    }
  }, [card, ref, swipeAction]);

  return (
    <TinderCard 
      ref={ref} 
      className='flash-card' preventSwipe={["up", "down"]} 
      onSwipe={(dir) => onSwiped(card, dir)}
      onCardLeftScreen={() => onCardLeftScreen(card)}
    >
      <div 
        style={{ backgroundImage: 'url(' + card.image + ')' }}
        className='image'
      >
        {/* <h3>{card.image}</h3> */}
      </div>
    </TinderCard>
  )
}

export default FlashCard