import React, { useEffect, useState, useRef } from "react";
import "./TakeGuess.css";
import axios from "axios";

export function TakeGuess(props) {
  const {
    guess,
    setGuess,
    gameID,
    setSongInfo,
    setScore,
    score,
    setCurrentView,
    roundSuccess,
    setRoundSuccess,
  } = props;

  const [guessResult, setGuessResult] = useState();
  const inputBox = useRef();

  async function sendGuess() {
    await axios
      .post("https://blind-test-working.onrender.com/guess", {
        gameID: gameID,
        guess: guess,
      }) //url is adapted to render
      .then((res) => {
        setGuessResult(res.data.guessMatch);
        if (res.data.guessMatch === true) {
          setSongInfo(res.data.result);
          setScore(res.data.currentScore);
          setGuess("");
          setRoundSuccess(res.data.roundSuccess);
          setCurrentView("round_end");
        } else {
          if (inputBox.current) {
            inputBox.current.classList.add("input-red");
            setTimeout(() => {
              inputBox.current.classList.remove("input-red");
            }, 500);
          }
        }
      });
    setGuess("");
  }

  const handleEnter = (event) => {
    if (event.key === "Enter" && !roundSuccess) {
      sendGuess();
    }
  };

  return (
    <div id="container-input" onKeyDown={handleEnter}>
      <input
        ref={inputBox}
        autoFocus
        className="guess-input"
        autoComplete="off"
        onKeyDown={handleEnter}
        type="text"
        required
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={sendGuess} id="guess-button">
        GO
      </button>
    </div>
  );
}
