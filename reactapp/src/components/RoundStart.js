import React, { useEffect, useState } from "react";

import { MiniCountDownTimer } from "./MiniCountDownTimer";


export function RoundStart(props){
  const {round,setCurrentView,setTakingGuess,isPlaying,setIsPlaying} = props;
  
  const[redirect,setRedirect] = useState(false)
  // const[play,setIsPlaying] = useEffect(false)

  useEffect(()=>{
    if(redirect === true){
      setCurrentView("round_ongoing")
    }
  },[redirect])

// console.log(isPlaying,"🍎") 
  
  return (
    <div>
      <p> RoundStart Component starts here</p>

      <div>
          <MiniCountDownTimer 
          seconds={5}
          setRedirect={setRedirect}
          setTakingGuess={setTakingGuess}
          setIsPlaying={setIsPlaying}
          />
        </div>
  
      

    </div>
  )
}

