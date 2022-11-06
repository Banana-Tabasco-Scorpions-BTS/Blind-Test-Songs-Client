import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios"

import './Home.css';

export function Home() {
  const [user, setUser] = useState("");
  const [gameID, setGameID] = useState();
  const [trackURL, setTrackURL] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    if (gameID !== undefined) {
      navigate('/play',{
        state: {
          gameID: gameID,
          trackURL: trackURL,
          user: user,
        }})
    }
  }, [gameID])

  async function handleClick() {
    const startGameData = await axios.post('https://blind-test-songs-server-predeploy.onrender.com/newgame', { "username": user })
      .then((newGameRes) => newGameRes.data)
      .catch((err) => console.log(err))
    setGameID(startGameData.gameID)
    setTrackURL(startGameData.songURL)
  }

  return (
    <section className="container">

      <h1>BLIND TEST SONGS</h1>
      <p className="intro-text">You have 30 seconds to guess the name of song, sounds simple right?</p>
      <p className="intro-text">To start, just write your name and hit the big ol' button.</p>
      {/* <Link 
        to="/play"
        state={{gameID: gameID}}
      ></Link> */}
      <input className="input"
        autoFocus
        type="text"
        required
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button className="start-button" onClick={handleClick}>Let's go!</button>
    </section>
  )
}