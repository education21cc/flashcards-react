import { useCallback, useEffect, useRef, useState } from 'react';
import useForceUpdate from 'use-force-update';
import confetti from 'canvas-confetti';
import { GameData } from 'playerBridge/GameData';
import { Content } from 'data/Content';
import { CardNormal, CardIntro } from 'App/FlashCard';
import { Card } from 'data/Card';
import ProgressBar from 'App/ProgressBar';
import { ButtonBarIntro, ButtonBarNormal} from './ButtonBar';
import { direction } from './FlashCard/Swipeable';
import { NormalCardRef } from './FlashCard/cards/CardNormal';
import { IntroCardRef } from './FlashCard/cards/CardIntro';
import { useTranslationStore } from 'stores/translations';
import CardOutro from './FlashCard/cards/CardOutro';
import { Howl } from 'howler';
import PlayerBridge from 'playerBridge';
import Instructions from './Instructions/Instructions';
import './styles/app.scss';

enum GameState {
  loading = 0,
  instructions = 1 << 2,
  intro = 1 << 3,
  normal = 1 << 4,
  complete = 1 << 5
}

const tadaSound = new Howl({
  src: ['sound/tada.ogg']
});

const App = () => {
  const [state, setState] = useState(GameState.loading);
  const [data, setData] = useState<GameData<Content>>();
  const [cards, setCards] = useState<Card[]>();
  const [progress, setProgress] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [animating, setAnimating] = useState(false);
  const forceUpdate = useForceUpdate();
  const latestCard = useRef<NormalCardRef>(null);
  const introCard = useRef<IntroCardRef>(null);

  const start = useCallback(() => {
    if (data?.content.skipIntroCard) {
      setState(GameState.normal)
    } else {
      setState(GameState.intro)
    }
  }, [data?.content.skipIntroCard])

  const handleGameDataReceived = useCallback((data: GameData<Content>) => {
    if (!data.content.cards) {
      // old style config - backwards compat
      data.content.cards = data.content as unknown as Card[]
    }
    // if `skipIntroCard` is not present, treat as false
    data.content.skipIntroCard = !!data.content?.skipIntroCard

    setData(data);
    const cards = data?.content.cards;
    setCards(cards.sort(() => Math.random() - 0.5));

    if (data.content?.instructions?.length) {
      setState(GameState.instructions)
    } else {
      start()
    }

    if (data.translations) {
      // store translations in zustand
      const t = data.translations.reduce<{[key: string]: string}>((acc, translation) => {
        acc[translation.key] = translation.value;
        return acc;
      }, {});
      useTranslationStore.setState({ texts: t });
    }

  }, [start]);

  useEffect(() => {
    // See if we are fed gamedata by 21ccplayer app, if not, go fetch it ourselves
    if (!process.env.REACT_APP_PLAYER_MODE) {
      // @ts-ignore
      console.log("no bridge found, fetching fallback")
//
      fetch(`${process.env.PUBLIC_URL}/config/flashcards-adr-with-translations-nl.json`)
      // fetch(`${process.env.PUBLIC_URL}/config/flashcards-handlingpackaging-with-translations-hi.json`)
      // fetch(`${process.env.PUBLIC_URL}/config/flashcards-voiceover-test.json`)
      // fetch(`${process.env.PUBLIC_URL}/config/flashcards-swiggy-1-hi.json`)
      // fetch(`${process.env.PUBLIC_URL}/config/flashcards-swiggy-2-hi.json`)
      // fetch(`${process.env.PUBLIC_URL}/config/flashcards-handlingpackaging-with-translations-en.json`)
      // fetch(`${process.env.PUBLIC_URL}/config/flashcards-handlingpackaging-with-translations-nl.json`)
      // fetch(`${process.env.PUBLIC_URL}/config/flashcards-handlingpackaging-with-translations-ms.json`)
      // fetch(`${process.env.PUBLIC_URL}/config/flashcards_vcaborden-with-translation-nl.json`)
      .then((response) => {
        response.json().then((data) => {
          if (Array.isArray(data.content)) {
            console.log('Received data in the old format. Please update XML to put content array under `cards` prop')
            handleGameDataReceived({
              ...data,
              content: {
                cards: data.content
              }
            });

            return
          }
          handleGameDataReceived(data);
        })
      })
    };

  }, [handleGameDataReceived]);



  const handleSwiped = (card: Card, dir: direction) => {
    setAnimating(true);

    if (!data || !cards) return
    if (dir === direction.RIGHT) {
      setProgress(1 - (cards.length -1) / data.content.cards.length)
    } else {
      setMistakes(mistakes + 1);
    }
  }

  const handleIntroSwiped = () => {
  }

  const handleIntroCardLeftScreen = () => {
    setState(GameState.normal)
  }

  const handleFlipped = (card: Card, flipped: boolean) => {
    setTimeout(forceUpdate, 20); // not happy about this, but we have to repaint
                                 // to show/hide the buttons
  }

  const handleCardLeftScreen = (card: Card, dir: direction) => {
    setAnimating(false);
    if (!cards) return;

    if (dir === direction.RIGHT){
      setCards(cards?.filter(c => c !== card))
    } else {

      const [first, ...rest] = cards;
      const whichCard = rest[rest.length - 1]

      // Log event!
      window.storeGameEvent({
        code: "mistake",
        level: 1,
        additionalInfo: whichCard.text?.substring(0, whichCard.text?.lastIndexOf('-front'))
      })
      setCards([...rest,first])
    }
  }

  const swipe = (dir: direction) => {
    if (!cards || !data || animating) return
    setAnimating(true);
    latestCard.current?.swipe(dir);

    if (dir === direction.RIGHT){
      setProgress(1 - (cards.length -1) / data.content.cards.length)
    } else {
      setMistakes(mistakes + 1);
    }
  }

  const handleStart = () => {
    introCard.current?.swipe(direction.RIGHT);
  }

  const handleFlip = () => {
    if (animating) return;
    latestCard.current?.flip();
  }

  useEffect(() => {
    if (cards?.length === 0 && state === GameState.normal){
      setState(GameState.complete);
    }
  }, [cards?.length, state]);

  useEffect(() => {
    // Show the confetti without any regretti!
    if (state === GameState.complete ){
      tadaSound.play();
      window.setGameData({
        levelsCompleted: [{
          level: 1,
          score: 3
        }]
      })
      confetti();
      setTimeout(confetti, 750);
      setTimeout(confetti, 1500);
    }
  }, [state]);

  const handleReset = () => {
    start();
    setProgress(0);
    setMistakes(0);
    setCards(data?.content?.cards.sort(() => Math.random() - 0.5));
  }

  return (
    <div className="app">
      <PlayerBridge
        gameDataReceived={handleGameDataReceived}
      />
      {state === GameState.loading && (
        <span>Loading...</span>
      )}
      {state === GameState.instructions && data && (
        <Instructions instructions={data.content.instructions} onComplete={handleReset} />
      )}
      {state !== (GameState.loading | GameState.instructions) && (
        <>
          <ProgressBar progress={progress} />
          <div className='card-container'>
            <CardOutro mistakes={mistakes} />
            {cards?.map((card, index) => {
              let ref = null;
              // If the current top card is animating, dont make that that latest card
              if (!animating || index < cards.length -1) {
                ref = latestCard
              }
              return (
                <CardNormal
                  key={card.id}
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
          {state === GameState.complete && (
            <ButtonBarIntro
              /** might as well use the intro component here ¯\_(ツ)_/¯ */
              onPlay={handleReset}
            />
           )}
        </>
        )
      }
    </div>
  );
}

export default App;

