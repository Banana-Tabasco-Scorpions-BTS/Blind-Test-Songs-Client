import React from "react";


export function TakeGuess(props){
  const {guess, setGuess, } = props;

  const handleInput = (e) => {
    e.preventDefault();
    const savedguess = {guess}
    console.log (savedguess)
    // fetch(endpoint,{
    //   method: 'POST',
    //   headers: {"Content-Type": "application/json"},
    //   body:JSON.stringify(savedUser)
    // })
  }



  
  return (
    <div>
      <p> TakeGuess component starts here</p>
      <form onSubmit={handleInput}>
        <label>Take a Guess</label>
        <input 
        type="text" 
        required
        value={guess}
        onChange={(e)=>setGuess(e.target.value)}
        />
        <button>Save</button>
      </form>
      <p> TakeGuess component starts here</p>
    </div>
  )
}
