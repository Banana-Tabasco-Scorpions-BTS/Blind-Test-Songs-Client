import React from "react";
import { songsdata } from '../songsdata';



export function Player(){

  const url =songsdata[1].url;
  
  return (
    <div>
      <p> Player component starts here</p>
      <audio controls autoPlay>
        <source src={url} type="audio/mp3" ></source>
      </audio>
      <p> Player component ends here</p>
    </div>
  )
}
