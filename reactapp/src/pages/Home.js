import { Link } from "react-router-dom"


export function Home(){



  return (
    <div>
    <p>Welcome to Blind Test Songs</p>
    
      <Link to= "/Game Page">
        <button  type='button' >start your game! </button>
      </Link>
    </div>
  )
}