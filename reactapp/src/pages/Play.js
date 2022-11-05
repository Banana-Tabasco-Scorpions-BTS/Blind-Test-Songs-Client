import React, { useRef, useState, useEffect } from 'react';
import { RoundOngoing } from '../components/RoundOngoing';
import { RoundStart } from '../components/RoundStart';
import { songsdata } from '../songsdata';
import { useLocation } from "react-router-dom"



export function Play(props) {
  const [currentView, setCurrentView] = useState("round_ongoing");
  const [user, setUser] = useState("");
  const [guess, setGuess] = useState("");
  const [round, setRound] = useState(1);
  const [isPLaying, setIsPlaying] = useState(false)
  const [outOfTime,setOutOfTime] = useState(false)
  const {gameID} = props;
  

  const location = useLocation();
  console.log(location,gameID)

  // to swap between  


  return (
    <section className="container">
   
        {(() => {
          if (currentView === "round_start") {
            return (
              <div className='round_start'>
                <RoundStart
                  gameID={gameID}
                  user={user}
                  setUser={setUser}
                />
              </div>
            )
          }
          if (currentView === "round_ongoing")
            return (
              <div className='round_ongoing'>
                <RoundOngoing
                  guess={guess}
                  songsdata={songsdata}
                  setGuess={setGuess}
                  isPlaying={isPLaying}
                  setIsPlaying={setIsPlaying}
                  setCurrentView={setCurrentView}
                  gameID={location.state.gameID}
                  user={user}
                  outOfTime={outOfTime}
                  setOutOfTime={setOutOfTime}
                />
              </div>
            )

        })()}
    </section>
  )
};
