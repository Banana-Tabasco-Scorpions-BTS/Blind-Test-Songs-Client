import React, { useEffect, useState } from "react";
import { Player } from "./Player";
import { CountDownTimer } from "./CountDownTimer";
import { TakeGuess } from "./TakeGuess";
import { useNavigate } from "react-router-dom";
import { RoundStart } from "./RoundStart";
import { CorrectGuess } from "./CorrectGuess";






export function RoundOngoing(props){
  const [roundSuccess,setRoundSuccess] = useState(null) // makeguess:true||false
  
  
  const {
    songsdata,
    guess,
    setGuess,
    isPlaying,
    setIsPlaying,
    setCurrentView,
    gameID,
    user,
    outOfTime,
    setOutOfTime,
    song
  } = props;


    console.log (gameID,isPlaying,guess,user,outOfTime)
    useEffect(()=>{
     if (song){
       console.log (song)
      } 
    })
    
    
    
    return (
      <div>


      {(() => {
      if (roundSuccess === true){
        return (
          <div className="CorrectGuess">
            <CorrectGuess
            songsdata={songsdata}
            />
          </div>
        )
      }
      })()}
      <p> RoundOngoing component starts here</p>
        <div className="guess_timer">
          <CountDownTimer 
          seconds={30}
          roundSuccess={roundSuccess}
          setRoundSuccess={setRoundSuccess}
          gameID={gameID}
          setIsPlaying={setIsPlaying}
      


          />
        </div>
        <div >
          <TakeGuess
          guess={guess}
          setGuess={setGuess}
          songsdata={songsdata}
          setCurrentView={setCurrentView}
          user={user}
          gameID={gameID}
          setRoundSuccess={setRoundSuccess}

          />
        </div>
        {(() => {
        if (isPlaying === true){
          return (
            <div className="player">
              <Player
              songsdata={songsdata}
              />
            </div>
          )
        }
        })()}

      <p> RoundOngoing component ends here</p>

    </div>
  )
}



