import React, { useEffect, useState } from "react";

import { CountDownTimer } from "./CountDownTimer";


export function RoundStart(props){
  const {round,setCurrentView} = props;
  
  const[redirect,setRedirect] = useState(false)

  useEffect(()=>{
    if(redirect === true){
      setCurrentView("round_ongoing")
    }
  },[redirect])
  
  return (
    <div>
      <p> RoundStart Component starts here</p>

      <div>
          <CountDownTimer 
          seconds={5}
          setRedirect={setRedirect}
          />
        </div>
  
      

    </div>
  )
}

