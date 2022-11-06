import React, { useRef, useState, useEffect } from 'react';
import './RoundEnd.css';
import { CountDownTimer } from "./CountDownTimer";
import axios from "axios";

export function RoundEnd(props) {
    const { gameID, setCurrentView, songInfo, score, setTrackURL, setPreviousScore, roundSuccess } = props;
    const [songName, setSongName] = useState(songInfo.song)
    const [songArtist, setSongArtist] = useState(songInfo.artist)
    const [songAlbum, setSongAlbum] = useState(songInfo.album)

    const [redirect, setRedirect] = useState(false);
    const [nextRoundCalled, setNextRoundCalled] = useState(false);
    const [nextRoundInfo, setNextRoundInfo] = useState();

    async function getNextRound() {
        const songInfo = await axios
            .post('https://blind-test-songs-server-predeploy.onrender.com/nextround', { "gameID": gameID })
            .then(res => res)
        
        setNextRoundInfo(songInfo)
        if (songInfo.data.songURL) setTrackURL(songInfo.data.songURL)
    }
    
    async function getResult() {
        const result = await axios
            .post('https://blind-test-songs-server-predeploy.onrender.com/result', { "gameID": gameID })
            .then(res => res)
        setPreviousScore(result.data.previousScore);    
        setCurrentView('result')
    }

    useEffect(() => {
        if (!nextRoundCalled) {
            setNextRoundCalled(true);
            getNextRound()
        }
    }, [nextRoundCalled])

    useEffect(() => {
        if (redirect === true) {
            console.log(nextRoundInfo)
            if (nextRoundInfo.data.gameEnd) {
                getResult();
            } else {
                setCurrentView("round_start")
            }
        }
    }, [redirect])

    useEffect(()=> {
        console.log(roundSuccess)
    },[])

    return (
        <div>
            {(() => {
                if (roundSuccess) return <p>Well Done!</p>
                if (!roundSuccess) return <p>Yikes, try again.</p>
            })() }

            <h2 id='score'> Current score: {score}</h2>
            <p id='song__name'>{songName}</p>
            <p id='song__artist'>{songArtist} ({songAlbum})</p>
            {/* <p id='song__album'></p> */}
            <CountDownTimer seconds={3} setRedirect={setRedirect} />


        </div>
    )


}
