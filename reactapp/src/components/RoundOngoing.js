import React, { useEffect, useState } from "react";
import { Player } from "./Player";
import { CountDownTimer } from "./CountDownTimer";
import { TakeGuess } from "./TakeGuess";



export function RoundOngoing(props){
  const [roundSuccess,setRoundSuccess] = useState(null) // makeguess:true||false
  const [outOfTime,setOutOfTime] = useState(false);
  const {
    songsdata,
    guess,
    setGuess,
    isPlaying,
    setIsPlaying,
    currentView,
    setCurrentView,
    gameID,
    user,
    url,
    takingGuess,
    setTakingGuess,
    setArtist,
    setAlbum,
    setTrackURL

  } = props;

  
  useEffect(()=>{
    if(outOfTime === true){
      setCurrentView("round_end")
    }
  },[outOfTime]);



  useEffect(()=>{
    if(roundSuccess === false){
      setCurrentView("round_end")
    }
  },[roundSuccess]);



  
    console.log ("🍓",user,url,isPlaying) /* gameID,isPlaying,guess,user,outOfTime*/
   
  
    
return (
        <div>
      
          <p> RoundOngoing component starts here</p>
    
            <div >
  
                <CountDownTimer 
                seconds={30}
                roundSuccess={roundSuccess}
                setRoundSuccess={setRoundSuccess}
                gameID={gameID}
                setIsPlaying={setIsPlaying}
                setOutOfTime={setOutOfTime}
                setArtist={setArtist}
                setAlbum={setAlbum}
                setTrackURL={setTrackURL}
                />
  
                <TakeGuess
                guess={guess}
                setGuess={setGuess}
                songsdata={songsdata}
                setCurrentView={setCurrentView}
                user={user}
                gameID={gameID}
                setRoundSuccess={setRoundSuccess}
                />
  
  
                <Player
              url={url}
              />
  
            </div>
  
      
  
    <p> RoundOngoing component ends here</p>
  
  </div>
  );
  }
  
  
  


  
  
  
  
  // return (
  //   <div>
    
  //     <p> RoundOngoing component starts here</p>
    
  //       {(()=>{
  
  //         if (currentView === "round_end"){
  //           return (
  
  //             <div className="round_end">
  //             <RoundEnd
              
  //             />
  //           </div>
  //           )
  //         }
  //         else
  //         return(
  
            
  //           <div >
  
  //               <CountDownTimer 
  //               seconds={30}
  //               roundSuccess={roundSuccess}
  //               setRoundSuccess={setRoundSuccess}
  //               gameID={gameID}
  //               setIsPlaying={setIsPlaying}
  //               setOutOfTime={setOutOfTime}
  //               />
  
  //               <TakeGuess
  //               guess={guess}
  //               setGuess={setGuess}
  //               songsdata={songsdata}
  //               setCurrentView={setCurrentView}
  //               user={user}
  //               gameID={gameID}
  //               setRoundSuccess={setRoundSuccess}
  //               />
  
  
  //               <Player
  //             url={url}
  //             />
  
              
  //               </div>
            
  //         )           
         
  //       })()}
   
  //   <p> RoundOngoing component ends here</p>
  
  // </div>
  // )
  // }