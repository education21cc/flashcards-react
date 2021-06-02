import { Card } from "data/Card"
import { Direction } from "data/Direction"
import React, { createRef } from "react"
import TinderCard from "react-tinder-card"

type Props = {
  card: Card
  onSwiped: (card: Card, dir: Direction) => void
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
  const { onSwiped, card } = props;
  const ref = createRef<API>()
  return (
    <TinderCard 
      ref={ref} 
      className='swipe' preventSwipe={["up", "down"]} 
      onSwipe={(dir) => onSwiped(card, dir)}
      // onCardLeftScreen={() => outOfFrame(character.image)}
    >
      <div 
        style={{ backgroundImage: 'url(' + card.image + ')' }}
        className='card'
      >
        <h3>{card.image}</h3>
      </div>
    </TinderCard>
  )
}

export default FlashCard