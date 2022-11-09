// import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Home';
import { Play } from './pages/Play';
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

/* AUTH AUTH AUTH AUTH CAUTION AUTH AUTH AUTH AUTH*/

const CLIENT_ID = "5937b61f9fc14d478ee7b1f4328f7fe3"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

/* AUTH AUTH AUTH AUTH CAUTION AUTH AUTH AUTH AUTH*/

function App() {
const [token, setToken] = useState("")
const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])
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

  return (

    <div className="background">

        <div className="App">
            <header className="App-header">
              <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            </header>
        </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='play' element={<Play />} />
      </Routes>
    </div>
  );
}

export default App;