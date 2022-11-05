import React from 'react';
import {BsFillPlayCircleFill, BsFillPauseCircleFill} from 'react-icons/bs'



const Player = ({ isplaying, setisplaying })=>{


  const PlayPause = ()=>
  {
    setisplaying(!isplaying);

  }
  
    
  return (
    <div className='player_container'>
      <div className="controls">
        {isplaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}
      </div>
    </div>
  
  )
};


export default Player


