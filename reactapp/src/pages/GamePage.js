import React,{ useRef, useState, useEffect } from 'react';
import { RoundOngoing } from '../components/RoundOngoing';
import { RoundStart } from '../components/RoundStart';
import { songsdata } from '../songsdata';


export function GamePage() {
  const [currentView, setCurrentView] = useState("");
  const [user,setUser] = useState("");
  const [guess,setGuess] = useState("");


// to swap between  


  return (
    <div className='gamepage'>
      <p>this is the Game Page</p>
      <div className='main_container'>

        <div className='round_start'>
          <RoundStart 
          user={user} 
          setUser={setUser} 
          />
        </div>

        <div className='round_ongoing'>
          <RoundOngoing 
          guess={guess}
          songsdata={songsdata}
          setGuess={setGuess} 
          />
        </div>
      
      </div>
    </div>
    ) 
};
