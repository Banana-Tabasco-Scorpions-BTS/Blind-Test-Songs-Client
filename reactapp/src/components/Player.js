import React from "react";



export function Player(props){
  const {songsdata} = props;

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
