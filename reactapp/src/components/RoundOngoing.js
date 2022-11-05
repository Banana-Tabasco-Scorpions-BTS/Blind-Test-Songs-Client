import React from "react";
import { Player } from "./Player";
import { CountDownTimer } from "./CountDownTimer";
import { TakeGuess } from "./TakeGuess";



export function RoundOngoing(props){
  const {songsdata,guess,setGuess} = props;

  
  return (
    <div>
      <p> RoundOngoing component starts here</p>
        <div>
          <CountDownTimer seconds={30}/>
        </div>
        <div>
          <TakeGuess
          guess={guess}
          setGuess={setGuess}
          songsdata={songsdata}

          />
        </div>

        <div className="player">
          <Player
           songsdata={songsdata} />
        </div>
      <p> RoundOngoing component ends here</p>

    </div>
  )
}



