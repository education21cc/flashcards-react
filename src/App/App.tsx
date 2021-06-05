import React, { useCallback, useEffect, useRef, useState } from 'react';
import useForceUpdate from 'use-force-update';
import { GameData } from 'playerBridge/GameData';
import { Content } from 'data/Content';
import { Direction } from 'data/Direction';
import FlashCard from 'App/FlashCard';
import { Card } from 'data/Card';
import ProgressBar from 'App/ProgressBar';
import './styles/app.scss';
import ButtonBar from './ButtonBar';
import { FlashCardRef } from './FlashCard/FlashCard';
import { direction } from './FlashCard/Swipeable';


const App = () => {

  const [data, setData] = useState<GameData<Content>>();
  const [cards, setCards] = useState<Content>();
  const [progress, setProgress] = useState(0);
  const [animating, setAnimating] = useState(false);
  const forceUpdate = useForceUpdate();
  // const { content } = data ?? {};
  const latestCard = useRef<FlashCardRef>(null)

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

  // const childRefs = useMemo(() => Array(content?.length).fill(0).map(i => React.createRef<API>()), [content])

  const handleSwiped = (card: Card, dir: Direction) => {
    // console.log('removing: ' + card.image, dir)
    // const progress = useMemo(() => {
      //   return 1 - cards.length/ data.content.length
      // }, [cards, data]);
      // setLastDirection(direction)
      // alreadyRemoved.push(nameToDelete)
      // setCurrentCardIndex(currentCardIndex-1);
      
      // setCards(cards?.filter(c => c !== card))
      // setSwipeAction(undefined);
      // setAnimating(true);
      setAnimating(true);

      if (!data || !cards) return
      setProgress(1 - (cards.length -1) / data.content.length)
  }
// console.log(cards)
// console.log(latestCard?.current?.flipped)

  const handleFlipped = (card: Card, flipped: boolean) => {
    // console.log("i have flipped", card, flipped)
    setTimeout(forceUpdate, 20); // not happy about this, but we have to repaint 
                                 // to show/hide the buttons
  }

  const handleCardLeftScreen = (card: Card) => {
    setCards(cards?.filter(c => c !== card))
    setAnimating(false);
    // charactersState = charactersState.filter(character => character.name !== name)
    // setCharacters(charactersState)
  }
// console.log(content)
  const swipe = (dir: direction) => {
    // console.log(dir, cards?.[currentCardIndex])
    // if (!content?.[currentCardIndex]) return
    if (!cards) return
    // if (animating) return;
    
    setAnimating(true);
    latestCard.current?.swipe(dir);

    // setSwipeAction({ card, dir})
    // handleSwiped(card, dir);
    // const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    // if (cardsLeft.length) {
    //   const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
    //   const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
    //   alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
    //   childRefs[index].current?.swipe(dir) // Swipe the card!
    // }
  }

  const handleFlip = () => {
    // console.log(latestCard.current)
    // if (animating) return;

    latestCard.current?.flip();
  }
  

  return (
    <div className="app">
      <ProgressBar progress={progress} />
      <div className='card-container'>
        {cards?.map((card, index) => {
          let ref = null;
          // If the current top card is animating, dont make that that latest card
          if (!animating || index < cards.length -1) {
            ref = latestCard
          }
          return (
          <FlashCard 
            key={card.image} 
            card={card}
            onSwiped={handleSwiped}
            onCardLeftScreen={handleCardLeftScreen}
            onFlipped={handleFlipped}
            ref={ref}
          />
        )
      })}
      </div>
      <ButtonBar
        enableLeftAndRight={latestCard?.current?.flipped}
        onLeftClick={() => swipe(direction.LEFT)}
        onFlip={handleFlip}
        onRightClick={() => swipe(direction.RIGHT)}
      />
    </div>  
  );
}

export default App;

