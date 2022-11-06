import React from "react";



export function Player(props){
  const {songsdata,url} = props;

 
  
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
