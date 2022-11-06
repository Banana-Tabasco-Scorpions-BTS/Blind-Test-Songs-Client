import React, { useRef, useEffect, useState } from "react";

import { CountDownTimer } from "./CountDownTimer";
import './RoundStart.css';

export function RoundStart(props){
  const {setRound, round, setCurrentView, setRoundSuccess} = props;
  const [redirect, setRedirect] = useState(false)
  const [countHasChanged, setCountHasChanged] = useState(false);

  useEffect(() => {
    setRoundSuccess(false)
  }, [])

  useEffect(() => {
    if(countHasChanged === false) {
      setCountHasChanged(true)
      setRound(round + 1)
    }
  }, [countHasChanged])

  useEffect(() => {
    if (redirect === true) {
      setCurrentView("round_ongoing")
    }
    
  }, [redirect])

  return (
    <div>
      <h1 id="round-start__timer">Round {round}</h1>
      {/* <p>Starting in</p> */}

      <div hidden >
          <CountDownTimer seconds={2} setRedirect={setRedirect}/>
        </div>
  
      

    </div>
  )
}

