import React, { useRef, useState, useEffect } from 'react';
import { RoundOngoing } from '../components/RoundOngoing';
import { RoundStart } from '../components/RoundStart';
import { songsdata } from '../songsdata';
import { useLocation } from "react-router-dom"
import { RoundEnd } from '../components/RoundEnd';
import { CorrectGuess } from '../components/CorrectGuess';



export function Play(props) {
  const [currentView, setCurrentView] = useState("round_start");
  // const [user, setUser] = useState("");
  const [guess, setGuess] = useState("");
  const [round, setRound] = useState(1);
  const [isPLaying, setIsPlaying] = useState(false);
  const [trackURL,setTrackURL] = useState("");//swap default for location.data.trackURL
  const [artist,setArtist] = useState("");
  const [album,setAlbum] = useState("");
  const [roundSuccess,setRoundSuccess] = useState(null)
  
  const [takingGuess,setTakingGuess] = useState(null);
  
 
 
  const location = useLocation();
  console.log(location,)

  // to swap between  



 


  return (
    <section className="container">
   
        {(() => {
          if (currentView === "round_start") {
            return (
              <div className='round_start'>
                <RoundStart
                  gameID={location.state.gameID}
                  user={location.state.user}
                  setCurrentView={setCurrentView}
                  setTakingGuess={setTakingGuess}
                  isPLaying={isPLaying}
                  setIsPlaying={setIsPlaying}
                />
              </div>
            )
          }
          if (currentView === "round_ongoing"){

            return (
              <div className='round_ongoing'>
                <RoundOngoing
                  guess={guess}
                  songsdata={songsdata}
                  setGuess={setGuess}
                  isPlaying={isPLaying}
                  setIsPlaying={setIsPlaying}
                  currentView={currentView}
                  setCurrentView={setCurrentView}
                  gameID={location.state.gameID}
                  user={location.state.user}
                  url={location.state.url}
                  takingGuess={takingGuess}
                  setTakingGuess={setTakingGuess}
                  setTrackURL={setTrackURL}
                  setArtist={setArtist}
                  setAlbum={setAlbum}
                  />
              </div>
            )
          }
          if (currentView === "round_end"){
            return(
              <div className="round_end">
              <RoundEnd
              artist={artist}
              album={album}
              trackURL={trackURL}
              roundSuccess={roundSuccess}
  
              />
            </div>  
            )
          }
          if (currentView === "correct_guess"){
            return(
              <div className='correct_guess'>

                <CorrectGuess
                

                
                />
              
              </div>
            )
          }
            
        })()}
    </section>
  )
};
