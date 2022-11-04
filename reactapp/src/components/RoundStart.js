import React, { useState } from "react";



export function RoundStart(props){
  const {user,setUser} = props


  const handleInput = (e) => {
    e.preventDefault();
    const savedUser = {user}
    console.log (savedUser)
    // fetch(endpoint,{
    //   method: 'POST',
    //   headers: {"Content-Type": "application/json"},
    //   body:JSON.stringify(savedUser)
    // })
  }



  
  return (
    <div>
      <p> RoundStart Component starts here</p>
      <p>USER IS {user}</p>
      <form onSubmit={handleInput}>
        <label>User Name</label>
        <input 
        type="text" 
        required
        value={user}
        onChange={(e)=>setUser(e.target.value)}
        />
        <button>Save</button>
      </form>
        <p> RoundStart Component ends here</p>

      

    </div>
  )
}

