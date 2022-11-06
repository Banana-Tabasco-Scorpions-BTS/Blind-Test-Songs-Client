import React from "react";
import axios from "axios";


export function TakeGuess(props){
  const {guess, setGuess,user,gameID,setRoundSuccess,setCurrentView } = props;

  async function makeGuess() {
    console.log ("😎", user, gameID, guess)
    setGuess(await axios.post('https://blind-test-songs-server-predeploy.onrender.com/guess', { "gameID":gameID, "guess":guess  })
      .then((newGuessRes) => {
        console.log (newGuessRes.data)
        const guessMatch = newGuessRes.data.guessMatch;
        setRoundSuccess(guessMatch)
        console.log ("🍒",guess, guessMatch)
        
        return newGuessRes
      })
      .catch((err) => console.log(err))
    )
  }




  
  return (
    <div>
      <p> TakeGuess component starts here</p>
      
       
        <input className="take_guess"  //swap the classname using if badguess true || false 
        type="text" 
        required
        value={guess}
        onChange={(e)=>setGuess(e.target.value)}
        />
        <button className="start-button" onClick={makeGuess}  >Try your luck</button>
      
      <p> TakeGuess component starts here</p>
    </div>
  )
}
