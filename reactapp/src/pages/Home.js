import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Home.css";

/* AUTH AUTH AUTH AUTH CAUTION AUTH AUTH AUTH AUTH*/

const CLIENT_ID = "5937b61f9fc14d478ee7b1f4328f7fe3"
const REDIRECT_URI = " https://blind-test-client-dev-react.onrender.com/ "
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

/* AUTH AUTH AUTH AUTH CAUTION AUTH AUTH AUTH AUTH*/

export function Home() {
  const [user, setUser] = useState("");
  const [gameID, setGameID] = useState();
  const [trackURL, setTrackURL] = useState();

  const [token, setToken] = useState("")
  const [playlistData, setPlaylistData] = useState()

  const navigate = useNavigate();
  useEffect(() => {
    if (gameID !== undefined) {
      navigate("/play", {
        state: {
          gameID: gameID,
          trackURL: trackURL,
          user: user,
        },
      });
    }
  }, [gameID]);

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
  
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      
      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token)
  }, [])

  const getPlaylist = async (e) => {
    // e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/playlists/4tFcZlF9kfiGx4CSX2CRXa/tracks", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    let sortedData;
    for(let i = 0; i < data.items.length; i++) {
      let individualTrack = data.items[i].track;
      let songName = individualTrack.name;
      let artistName = individualTrack.artists[0].name;
      let albumName = individualTrack.album.name;
      let url = individualTrack['preview_url'];
      
      sortedData.insert([
        {song: songName, artist: artistName, album: albumName, url: url},
      ]);
    }
    setPlaylistData(sortedData);
  }
  
  getPlaylist();

  async function getNewGame() {
    const startGameData = await axios
      .post("https://blind-test-dev.onrender.com/newgame", { username: user, newPlaylist: playlistData, token: token }) //makes a post request newgame.controller
      .then((newGameRes) => newGameRes.data)//receives response
      .catch((err) => console.log(err));
    setGameID(startGameData.gameID);
    setTrackURL(startGameData.songURL); //Change this to our new track on client side.
  }

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      getNewGame();
    }
  };

  return (
    <section className="container" onKeyDown={handleEnter}>
      <h1>BLIND TEST SONGS</h1>
      <p className="intro-text">
        You have 25 seconds to guess the name of song, sounds simple right?
      </p>
      <p className="intro-text">
        To start, just write your name and hit the big ol' button.
      </p>
      {/* <Link 
        to="/play"
        state={{gameID: gameID}}
      ></Link> */}
      
      {/* Spotify Login Element */}
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>

      <input
        className="input"
        onKeyDown={handleEnter}
        autoFocus
        type="text"
        required
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button className="start-button" onClick={getNewGame}>
        Let's go!
      </button>
    </section>
  );
}
