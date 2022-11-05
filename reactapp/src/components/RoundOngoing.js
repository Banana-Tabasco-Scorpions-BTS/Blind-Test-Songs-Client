import React, { useRef, useState, useEffect } from 'react';
import { Player } from "./Player";
import { CountDownTimer } from "./CountDownTimer";
import { TakeGuess } from "./TakeGuess";




export function RoundOngoing(props) {
  const { songsdata, guess, setGuess, setCurrentView } = props;
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (redirect === true) {
      setCurrentView("round_end")
    }

  }, [redirect])

  return (
    <div>

      <div>
        <CountDownTimer seconds={30} setRedirect={setRedirect} />
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

    </div>
  )
}



