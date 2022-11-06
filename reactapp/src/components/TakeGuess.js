import React, { useEffect, useState } from "react";
import './TakeGuess.css';
import axios from "axios";


export function TakeGuess(props) {
  const { guess, setGuess, gameID, setSongInfo, setScore, setCurrentView, setRoundSuccess } = props;

  const [guessResult, setGuessResult] = useState();

  async function sendGuess() {
    await axios
      .post('https://blind-test-songs-server-predeploy.onrender.com/guess', { "gameID": gameID, "guess": guess })
      .then(res => {
        console.log(res)
        setGuessResult(res.data.guessMatch)
        if (res.data.guessMatch === true) {
          setSongInfo(res.data.result)
          setScore(res.data.currentScore)
          setCurrentView('round_end')
          setRoundSuccess(res.data.roundSuccess)
        }
      })
  }

  // if guessResult is false, activate a css class

//   {
//     "gameID": "9",
//     "guessMatch": true,
//     "roundSuccess": true,
//     "result": {
//         "song": "Every Little Thing She Does Is Magic",
//         "artist": "The Police",
//         "album": "Ghost In The Machine (Remastered 2003)"
//     },
//     "currentScore": 1
// }

  // useEffect(() => {
  //   console.log(guessResult)
  // }, [guessResult])


  return (
    //   <label>Take a Guess</label>
      <div id="container-input">
        <input id="guess-input" autoComplete="off"
          type="text"
          required
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={sendGuess} id="guess-button">Go!</button>
      </div>
  )
}
