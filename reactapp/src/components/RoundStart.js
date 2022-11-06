import React, { useRef, useEffect, useState } from "react";

import { CountDownTimer } from "./CountDownTimer";


export function RoundStart(props){
  const {setRound, round, setCurrentView} = props;
  const [redirect, setRedirect] = useState(false)
  const [countHasChanged, setCountHasChanged] = useState(false);

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
      <h1>Round {round}</h1>
      <p>Starting in</p>

      <div>
          <CountDownTimer seconds={2} setRedirect={setRedirect}/>
        </div>
  
      

    </div>
  )
}

