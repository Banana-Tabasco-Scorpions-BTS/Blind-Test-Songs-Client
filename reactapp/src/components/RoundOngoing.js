import React from "react";
import { Player } from "./Player";
import { CountDownTimer } from "./CountDownTimer";



export function RoundOngoing(props){
  const {songsdata} = props;

  
  return (
    <div>
      <p> RoundOngoing component starts here</p>
        <div>
          <CountDownTimer seconds={30}/>
        </div>
        <div className="player">
          <Player songsdata={songsdata} />
        </div>
      <p> RoundOngoing component ends here</p>

    </div>
  )
}



