import React,{ useRef, useState, useEffect } from 'react';
import {CountDownTimer} from "../components/CountDownTimer"
import { RoundStarting } from '../components/RoundStart';
import { RoundOngoing } from '../components/RoundOngoing';
import { RoundStart } from '../components/RoundStart';
import { Player } from '../components/Player'


export function GamePage() {
  // const [currentView, setCurrentView] = useState("RoundStart");
  const [user,setUser] = useState("");
 




  

  return (
    <div className='gamepage'>
      <p>this is the Game Page</p>
      <div className='main_container'>
        <div className='round_start'>
          <RoundStart user={user} setUser={setUser} 
          />
        </div>
        <div className='countdown_timer'>
          <CountDownTimer seconds={30}/>
        </div>
        <div className='player'>
          <Player/>
        </div>
      
      </div>
    </div>
    ) 
};
