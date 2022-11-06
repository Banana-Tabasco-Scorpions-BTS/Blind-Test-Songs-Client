import React, { useEffect, useState } from 'react'
import axios from 'axios';



export function MiniCountDownTimer(props){
    const {
        seconds = 60,
        roundSuccess,
        setRoundSuccess,
        gameID,
        setIsPlaying,
        setRedirect,
        setTakingGuess,
        play,
        setPlay,
        setOutOfTime


    } = props

    const [time, setTime] = React.useState({ seconds});
   
   

const tick = () => {
    if ( time.seconds === 0){
        
        setRedirect(true)
        reset();
        
            
    } 
    else {
        setTime({seconds: time.seconds - 1});
    }
};


    const reset = () => setTime({ seconds: time.seconds});

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });



    async function outOfTime() {
        console.log ("😒" ,gameID)
        setRoundSuccess(await axios.post('https://blind-test-songs-server-predeploy.onrender.com/timeout', { "gameID":gameID })
          .then((outOfTimeRes) => {
            console.log (outOfTimeRes.data)
            const result = outOfTimeRes.data.result
            const {song,artist,album} = outOfTimeRes.data.result;
            setRoundSuccess(result)
            setIsPlaying(false)
            console.log (result,song,artist,album)
            
            return result
          })
          .catch((err) => console.log(err))
        )
      }

      

    
    return (
        <div>
            <p>{`${time.seconds.toString()}`}</p> 
            <button className='out_of_time_button' onClick={outOfTime}>where are you?</button>
        </div>
    );
}