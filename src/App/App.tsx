import React, { useCallback, useEffect, useRef, useState } from 'react';
import useForceUpdate from 'use-force-update';
import { GameData } from 'playerBridge/GameData';
import { Content } from 'data/Content';
import { CardNormal, CardIntro } from 'App/FlashCard';
import { Card } from 'data/Card';
import ProgressBar from 'App/ProgressBar';
import { ButtonBarIntro, ButtonBarNormal} from './ButtonBar';
import { direction } from './FlashCard/Swipeable';
import { NormalCardRef } from './FlashCard/cards/CardNormal';
import { IntroCardRef } from './FlashCard/cards/CardIntro';
import './styles/app.scss';
import { useTranslationStore } from 'stores/translations';

enum GameState {
  loading = 0,
  intro = 1 << 1,
  normal = 1 << 2,
  complete = 1 << 3
}
  
const App = () => {
  const [state, setState] = useState(GameState.loading);
  const [data, setData] = useState<GameData<Content>>();
  const [cards, setCards] = useState<Content>();
  const [progress, setProgress] = useState(0);
  const [animating, setAnimating] = useState(false);
  const forceUpdate = useForceUpdate();
  const latestCard = useRef<NormalCardRef>(null);
  const introCard = useRef<IntroCardRef>(null);
  const translations = useTranslationStore();

  const handleGameDataReceived = useCallback((data: GameData<Content>) => {
    setData(data);
    setCards(data.content)
    setState(GameState.intro)

    if (data.translations){
      const t = data.translations.reduce<{[key: string]: string}>((acc, translation) => {
        acc[translation.key] = translation.value;
        return acc;
      }, {});
      console.log(t)
      useTranslationStore.setState({ texts: t });
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


  const handleSwiped = (card: Card, dir: direction) => {
      setAnimating(true);

    if (!data || !cards) return
    if (dir === direction.RIGHT){
      setProgress(1 - (cards.length -1) / data.content.length)
    }
  }

  const handleIntroSwiped = () => {
    console.log('swiped intro')
  }

  const handleIntroCardLeftScreen = () => {
    setState(GameState.normal)
  }

  const handleFlipped = (card: Card, flipped: boolean) => {
    setTimeout(forceUpdate, 20); // not happy about this, but we have to repaint 
                                 // to show/hide the buttons
  }

  const handleCardLeftScreen = (card: Card) => {
    setCards(cards?.filter(c => c !== card))
    setAnimating(false);
  }

  const swipe = (dir: direction) => {
    if (!cards || !data) return    
    setAnimating(true);
    latestCard.current?.swipe(dir);
    if (dir === direction.RIGHT){
      setProgress(1 - (cards.length -1) / data.content.length)
    }
  }

  const handleStart = () => {
    introCard.current?.swipe(direction.RIGHT);
  }

  const handleFlip = () => {
    latestCard.current?.flip();
  }  

  return (
    <div className="app">
      {state === GameState.loading && (
        <span></span>
      )}
      {state !== GameState.loading && (
        <>
          <ProgressBar progress={progress} />
          <div className='card-container'>
            {cards?.map((card, index) => {
              let ref = null;
              // If the current top card is animating, dont make that that latest card
              if (!animating || index < cards.length -1) {
                ref = latestCard
              }
              return (
              <CardNormal 
                key={card.image} 
                card={card}
                onSwiped={handleSwiped}
                onCardLeftScreen={handleCardLeftScreen}
                onFlipped={handleFlipped}
                ref={ref}
              />
            )
          })}
         {state === GameState.intro && (
          <CardIntro 
            ref={introCard}
            onSwiped={handleIntroSwiped}
            onCardLeftScreen={handleIntroCardLeftScreen}
          />
         )}
        </div>
        {state === GameState.intro && (
          <ButtonBarIntro
            onPlay={handleStart}
          />
         )}
        {state === GameState.normal && (
          <ButtonBarNormal
            enableLeftAndRight={latestCard?.current?.flipped}
            onLeftClick={() => swipe(direction.LEFT)}
            onFlip={handleFlip}
            onRightClick={() => swipe(direction.RIGHT)}
          />
         )}
        </>
        )
      }
    </div>  
  );
}

export default App;