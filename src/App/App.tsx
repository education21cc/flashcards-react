import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { GameData } from 'playerBridge/GameData';
import { Content } from 'data/Content';
import { Direction } from 'data/Direction';
import FlashCard from 'App/FlashCard';
import { Card } from 'data/Card';
import ProgressBar from 'App/ProgressBar';
import './styles/app.scss';
import ButtonBar from './ButtonBar';


declare interface API {
  /**
   * Programmatically trigger a swipe of the card in one of the valid directions `'left'`, `'right'`, `'up'` and `'down'`. This function, `swipe`, can be called on a reference of the TinderCard instance. Check the [example](https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js) code for more details on how to use this.
   *
   * @param dir The direction in which the card should be swiped. One of: `'left'`, `'right'`, `'up'` and `'down'`.
   */
  swipe (dir?: Direction): Promise<void>
}


const alreadyRemoved: string[] = []
const App = () => {

  const [data, setData] = useState<GameData<Content>>();
  const [cards, setCards] = useState<Content>();

  // const { content } = data ?? {};
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(-1)
  const [swipeAction, setSwipeAction] = useState<{card: Card, dir: Direction }>()

  const handleGameDataReceived = useCallback((data: GameData<Content>) => {
    setData(data);
    setCards(data.content)

    if (data.translations){
      const t = data.translations.reduce<{[key: string]: string}>((acc, translation) => {
        acc[translation.key] = translation.value;
        return acc;
      }, {});
      // setTranslations(t);
    }

    // console.log(data.translations.map(t => `${t.key}`).join('\n'))
    // console.log(data.translations.map(t => t.value).join('\n'))
  }, []);

  useEffect(() => {
    // @ts-ignore

    // See if we are fed gamedata by 21ccplayer app, if not, go fetch it ourselves
    if (!process.env.REACT_APP_PLAYER_MODE) {
      // @ts-ignore
      console.log("no bridge found, fetching fallback")
      // @ts-ignore
      

      fetch(`${process.env.PUBLIC_URL}/config/flashcards-adr-with-translations-nl.json`)
      // fetch(`${process.env.PUBLIC_URL}/config/scenarios-2.json`)
      // fetch(`${process.env.PUBLIC_URL}/config/scenarios-3.json`)
      .then((response) => {
        response.json().then((data) => {

          handleGameDataReceived(data);
        })
      })
    };
  }, [handleGameDataReceived]);


  // const [characters, setCharacters] = useState(content)
  const [lastDirection, setLastDirection] = useState<string>()

  // const childRefs = useMemo(() => Array(content?.length).fill(0).map(i => React.createRef<API>()), [content])

  const handleSwiped = (card: Card, dir: Direction) => {
    console.log('removing: ' + card.image, dir)
    // setLastDirection(direction)
    // alreadyRemoved.push(nameToDelete)
    // setCurrentCardIndex(currentCardIndex-1);
    
    // setCards(cards?.filter(c => c !== card))
    setSwipeAction(undefined);
  }
console.log(cards)
  const handleCardLeftScreen = (card: Card) => {
    setCards(cards?.filter(c => c !== card))
    // console.log(card, ' left the screen!')
    // charactersState = charactersState.filter(character => character.name !== name)
    // setCharacters(charactersState)
  }
// console.log(content)
  const swipe = (dir: Direction) => {
    // console.log(dir, cards?.[currentCardIndex])
    // if (!content?.[currentCardIndex]) return
    if (!cards) return
    const card = cards[cards.length - 1];
    
    setSwipeAction({ card, dir})
    // handleSwiped(card, dir);
    // const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    // if (cardsLeft.length) {
    //   const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
    //   const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
    //   alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
    //   childRefs[index].current?.swipe(dir) // Swipe the card!
    // }
  }

  const progress = useMemo(() => {
    if (!data || !cards) return 0
    return 1 - cards.length/ data.content.length
  }, [cards, data])
  
  console.log(progress)

  return (
    <div className="app">
      <ProgressBar progress={progress} />
      <div className='card-container'>
        {cards?.map((card, index) => {
          return (
          <FlashCard 
            key={card.image} 
            card={card}
            swipeAction={card === swipeAction?.card ? swipeAction.dir : undefined}
            onSwiped={handleSwiped}
            onCardLeftScreen={handleCardLeftScreen}
          />
        )
      })}
      </div>
      <ButtonBar 
        onLeftClick={() => swipe('left')}
        onRightClick={() => swipe('right')}
      />
    </div>  
  );
}

export default App;
