import React, { useState, useEffect } from "react";
import { CountDownTimer } from "./CountDownTimer";
import axios from "axios";
import { songsdata } from "../songsdata";

export function RoundEnd(props){
  const {user,setUser, roundSuccess, gameID} = props

  // roundSuccess is either true or false


  
  async function axiosRequest() {
    await axios
      .post("https://blind-test-songs-server-predeploy.onrender.com/nextround", { "gameID": 20 })
      .then((response) => {
        // it returns: your gameID and the URL for the next track
      
        console.log(response);
      })
      

      .catch((err) => console.log(err));
  }
  
  useEffect(() => {
    axiosRequest();
  })

  

 

  // on line 34, a nested component is a nested function.
  //define a state in parent componenet use const [isCorrect, setisCorrect] = useState(false)
  // logic : when we make request to the server, that'll go to an endpoint , we get 
  // there is only one return statement and there you can use ternary operator
  //find out at what or where  point would I make isCorrect to true
  //handlwwinloss not needed, just use setIsCorrect = true where needed
  //and then, in return statement, 
  

  
  return (
    <div>
      {(()=> {
        if (roundSuccess === true) {
          return <h1>Congrats, you've correctly found:
            score:score
             🙌👏!</h1>
      
          
        }
        else {
          return(<>
          
           <h1>Better luck next time!</h1>
           <h2>The answer was :
            songname:songname,
            artist:artist,
            album:album
           </h2>
           <h3>Your score is score:score</h3>
           </>
           )
         
        }
        })()
        }

        {// display song name, album name and artist name
        }

      {/* <p> RoundEnd Component starts here</p>
        <div>
         <p> CountDownTimer starts here </p>
           <CountDownTimer seconds={5}/>
         <p> CountDownTimer starts here </p>
         <handleWinLoss isCorrect={true}/>
        </div>
        <p> RoundStart Component ends here</p> */}

      

    </div>
  )
}


