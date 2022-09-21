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

  //For clicking
  useEffect(() => {
    console.log(clicked.clickedItems)
    if((new Set(clicked.clickedItems)).size !== clicked.clickedItems.length){
      setCurrentScore(0);
    } else {
      setCurrentScore(currentScore + 1);
    }
    
  }, [clicked])

  //For current score. Only runs if currentScore changes
  useEffect(() => {
    console.log('current has been updated')
    console.log(currentScore)
  }, [currentScore])

  //For max score. Only runs if maxScore changes
  useEffect(() => {
    console.log('max has been updated')
  }, [maxScore])

  return (
    <div>
      <div className="header">
        <h2 className="header-title">Dark Souls III Memory Card Game</h2>
        <Score />
      </div>
      <div className="main-container">
        <Card name='Soul of Cinder' image={SoulOfCinder} handleClick={() => setClicked({clickedItems: [...clicked.clickedItems, 'SOC']})} />
        <Card name='Abyss Watchers' image={AbyssWatchers} handleClick={() => setClicked({clickedItems: [...clicked.clickedItems, 'AW']})} />
        <Card name='Aldrich, Devourer of Gods' image={Aldrich} handleClick={() => setClicked({clickedItems: [...clicked.clickedItems, 'AL']})}/>
        <Card name='Dancer of the Boreal Valley' image={Dancer} handleClick={() => setClicked({clickedItems: [...clicked.clickedItems, 'DA']})}/>
        <Card name='Dragonslayer Armour' image={Dragonslayer} handleClick={() => setClicked({clickedItems: [...clicked.clickedItems, 'DR']})}/>
        <Card name='Iudex Gundyr' image={Iudex} handleClick={() => setClicked({clickedItems: [...clicked.clickedItems, 'IU']})}/>
        <Card name='Lothric, Younger Prince' image={Lorian} handleClick={() => setClicked({clickedItems: [...clicked.clickedItems, 'LO']})}/>
        <Card name='Nameless King' image={Nameless} handleClick={() => setClicked({clickedItems: [...clicked.clickedItems, 'NA']})}/>
        <Card name='Pontiff Sulyvahn' image={Pontiff} handleClick={() => setClicked({clickedItems: [...clicked.clickedItems, 'PO']})}/>
        <Card name='Yhorm the Giant' image={Yhorm} handleClick={() => setClicked({clickedItems: [...clicked.clickedItems, 'YH']})}/>
      </div>
    
    </div>
  );
}

export default App;
