import React, { useRef, useState, useEffect } from "react";
import { Player } from "./Player";
import { CountDownTimer } from "./CountDownTimer";
import { TakeGuess } from "./TakeGuess";
import "./RoundOngoing.css";
import axios from "axios";

export function RoundOngoing(props) {
  const {
    gameID,
    trackURL,
    guess,
    score,
    setGuess,
    setCurrentView,
    setSongInfo,
    setScore,
    roundSuccess,
    setRoundSuccess,
  } = props;
  const [redirect, setRedirect] = useState(false);

  async function sendTimeout() {
    await axios

      .post("https://blind-test-dev.onrender.com/timeout", { gameID: gameID })
      .then((res) => {
        setSongInfo(res.data.result);
        setScore(res.data.currentScore);
      });
    setCurrentView("round_end");

  }

  useEffect(() => {
    if (redirect === true) {
      sendTimeout();
    }
  }, [redirect]);

  return (
    <div id="round-ongoing__all">
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
          roundSuccess={roundSuccess}
          score={score}
        />
      </div>

      <div className="player">
        <Player trackURL={trackURL} />
      </div>
    </div>
  );
}
