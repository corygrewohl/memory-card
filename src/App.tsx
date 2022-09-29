import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './Sass/App.scss';
import Card from './components/Card';
import Score from './components/Score';

import AbyssWatchers from './assets/abyss_watchers.png'
import Aldrich from './assets/aldrich.png'
import Dancer from './assets/dancer.png'
import Dragonslayer from './assets/dragonslayer_armor.png'
import Iudex from './assets/iudex_gundyr.png'
import Lorian from './assets/lorian_lothric.png'
import Nameless from './assets/nameless_king.png'
import Pontiff from './assets/pontiff.png'
import SoulOfCinder from './assets/soul_of_cinder.jpg'
import Yhorm from './assets/yhorm.png'

function App() {
  const [clicked, setClicked] = useState<{clickedItems: string[]}>({clickedItems: []})
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [maxScore, setMaxScore] = useState<number>(0);

  const bosses = [
    {
      name: 'Soul of Cinder',
      image: SoulOfCinder,
      handleClick: () => setClicked({clickedItems: [...clicked.clickedItems, 'SOC']}),
    },
    {
      name: 'Abyss Watchers',
      image: AbyssWatchers,
      handleClick: () => setClicked({clickedItems: [...clicked.clickedItems, 'AW']}),
    },
    {
      name: 'Aldrich, Devourer of Gods',
      image: Aldrich,
      handleClick: () => setClicked({clickedItems: [...clicked.clickedItems, 'AL']}),
    },
    {
      name: 'Dancer of the Boreal Valley',
      image: Dancer,
      handleClick: () => setClicked({clickedItems: [...clicked.clickedItems, 'DA']}),
    },
    {
      name: 'Dragonslayer Armour',
      image: Dragonslayer,
      handleClick: () => setClicked({clickedItems: [...clicked.clickedItems, 'DR']}),
    },
    {
      name: 'Iudex Gundyr',
      image: Iudex,
      handleClick: () => setClicked({clickedItems: [...clicked.clickedItems, 'IU']}),
    },
    {
      name: 'Lothric, Younger Prince',
      image: Lorian,
      handleClick: () => setClicked({clickedItems: [...clicked.clickedItems, 'LO']}),
    },
    {
      name: 'Nameless King',
      image: Nameless,
      handleClick: () => setClicked({clickedItems: [...clicked.clickedItems, 'NA']}),
    },
    {
      name: 'Pontiff Sulyvahn',
      image: Pontiff,
      handleClick: () => setClicked({clickedItems: [...clicked.clickedItems, 'PO']}),
    },
    {
      name: 'Yhorm the Giant',
      image: Yhorm,
      handleClick: () => setClicked({clickedItems: [...clicked.clickedItems, 'YH']}),
    },
  ]

  function shuffle(array: any[]){
    let currentIndex = array.length;
    let randomIndex;
    
    while(currentIndex != 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
      
    }
    return array;
  }

  //For clicking
  useEffect(() => {
    console.log(clicked.clickedItems)
    if((new Set(clicked.clickedItems)).size !== clicked.clickedItems.length){
      setCurrentScore(0);
      setClicked({clickedItems: []})
    } else {
       // FIXME: This runs on initial render so it always makes current score 1.
      setCurrentScore(currentScore + 1);
    }
    
  }, [clicked])

  //For current score. Only runs if currentScore changes
  useEffect(() => {
    if(currentScore > maxScore){
      setMaxScore(currentScore - 1)
    }
  }, [currentScore])

  return (
    <div>
      <div className="header">
        <h2 className="header-title">Dark Souls III Memory Card Game</h2>
        {/* FIXME: I'm literally just subtracting 1 from the currentScore because useEffect is not working. See note on first useEffect */}	
        <h2>Max Score: {maxScore} Current Score: {currentScore - 1}</h2>	
        {/* <Score /> */}
      </div>
      <div className="main-container">

        {shuffle(bosses).map((boss) => {
          return (
            <Card name={boss.name} image={boss.image} handleClick={boss.handleClick} />
            
          )
        })}
      </div>
    
    </div>
  );
}

export default App;
