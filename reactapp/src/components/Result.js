import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Result.css";

export function Result(props) {
  const {
    score,
    previousScore,
    user,
    setGameID,
    setTrackURL,
    setCurrentView,
    setRound,
    setScore,
  } = props;

  async function getNewGame() {
    const startGameData = await axios
      .post("https://blind-test-working.onrender.com/newgame", {
        username: user,
      })
      .then((newGameRes) => newGameRes.data)
      .catch((err) => console.log(err));
    setGameID(startGameData.gameID);
    setTrackURL(startGameData.songURL);
    setScore(0);
    setRound(0);
    setCurrentView("round_start");
  }

  const navigate = useNavigate();

  function goHome() {
    setGameID();
    setTrackURL();
    setScore(0);
    setRound(0);
    navigate("/");
  }

  return (
    <div>
      <h1>Your final score is: {score}</h1>
      <p>Last time you played, you scored: {previousScore}</p>
      <div id="buttons-container">
        <button className="play-again__button" onClick={getNewGame}>
          One. More. Time!
        </button>
        <button className="play-again__button" onClick={goHome}>
          Go Home
        </button>
      </div>
    </div>
  );
}
