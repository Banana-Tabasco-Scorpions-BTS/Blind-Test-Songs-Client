import React from "react";
import { useState, useEffect } from "react";

export function RoundEnd (props){

  const {roundSuccess,album,artist,trackURL} = props
  

  useEffect(()=>{
    if(roundSuccess === false){
      console.log (album,artist,trackURL)

      
    }
  },[roundSuccess])






  return(
    <div>
      <p>this is round_end</p>

    </div>
  )


}