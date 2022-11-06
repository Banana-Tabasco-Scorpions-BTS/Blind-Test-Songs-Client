import React, { useRef, useState, useEffect } from 'react';
import { RoundOngoing } from '../components/RoundOngoing';
import { RoundStart } from '../components/RoundStart';
import { songsdata } from '../songsdata';
import { useLocation } from "react-router-dom"
import { RoundEnd } from '../components/RoundEnd';



export function Play(props) {
  const [currentView, setCurrentView] = useState("round_end");
  const [user, setUser] = useState("");
  const [guess, setGuess] = useState("");
  const [round, setRound] = useState(1);
  const {gameID} = props;
  const [roundSuccess, setRoundSuccess] = useState(true);

  const location = useLocation();
  console.log(location)

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
                  setRoundSuccess={setRoundSuccess}
                />
              </div>
            )
            if (currentView === "round_end")
            return (
              <div className='round_end'>
                <RoundEnd
                  guess={guess}
                  songsdata={songsdata}
                  setGuess={setGuess}
                  roundSuccess={roundSuccess}
                 
                />
              </div>
            )

        })()}
    </section>
  )
};
