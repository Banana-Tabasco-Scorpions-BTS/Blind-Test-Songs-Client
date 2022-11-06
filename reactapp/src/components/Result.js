import React from "react";
import axios from 'axios';

export function Result(props) {
    const {
        score,
        previousScore,
        user,
        setGameID,
        setTrackURL,
        setCurrentView,
        setRound
    } = props;

    async function getNewGame() {
        const startGameData = await axios
            .post('https://blind-test-songs-server-predeploy.onrender.com/newgame', { "username": user })
            .then((newGameRes) => newGameRes.data)
            .catch((err) => console.log(err))
        setGameID(startGameData.gameID)
        setTrackURL(startGameData.songURL)
        setRound(0)
        setCurrentView('round_start')
    }

    return (
        <div>
            <h1>Your final score is: {score}</h1>
            <p>Last time you played, you scored: {previousScore}</p>
            <button id="play-again__button" onClick={getNewGame}>One. More. Time!</button>
        </div>
    )
}