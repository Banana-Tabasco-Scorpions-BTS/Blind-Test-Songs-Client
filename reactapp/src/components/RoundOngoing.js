import React, { useRef, useState, useEffect } from 'react';
import { Player } from "./Player";
import { CountDownTimer } from "./CountDownTimer";
import { TakeGuess } from "./TakeGuess";
import './RoundOngoing.css';
import axios from "axios";

export function RoundOngoing(props) {
  const { gameID, trackURL, guess, setGuess, setCurrentView, setSongInfo, setScore, setRoundSuccess } = props;
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    setRoundSuccess(false)
  }, [])

  async function sendTimeout() {
    await axios
      .post('https://blind-test-songs-server-predeploy.onrender.com/timeout', { "gameID": gameID })
      .then(res => {
        setSongInfo(res.data.result)
        setScore(res.data.currentScore)
      })
    setCurrentView("round_end")
  }

  useEffect(() => {
    if (redirect === true) {
      sendTimeout()
    }
  }, [redirect])

  return (
    <div>

      <div className="guess-timer">
        <CountDownTimer seconds={25} setRedirect={setRedirect} />
      </div>
      <div>
        <TakeGuess
          setRedirect={setRedirect}
          gameID={gameID}
          guess={guess}
          setGuess={setGuess}
          setSongInfo={setSongInfo}
          setScore={setScore}
          setCurrentView={setCurrentView}
          setRoundSuccess={setRoundSuccess}
        />
      </div>

      <div className="player">
        <Player
          trackURL={trackURL}
        />
      </div>

    </div>
  )
}



