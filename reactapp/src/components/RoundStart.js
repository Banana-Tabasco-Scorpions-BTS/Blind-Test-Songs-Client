import React, { useState } from "react";

import { CountDownTimer } from "./CountDownTimer";


export function RoundStart(props){
  const {} = props;

  
  return (
    <div>
      <p> RoundStart Component starts here</p>

      <div>
          <CountDownTimer seconds={5}/>
        </div>
  
      

    </div>
  )
}

