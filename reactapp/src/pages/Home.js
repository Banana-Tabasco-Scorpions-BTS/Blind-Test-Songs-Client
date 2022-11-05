import { Link } from "react-router-dom"
import React,{ useState } from "react";
import axios from "axios"




export function Home(){
  const [game,setGame] = useState("")
  // const [post, setPost] = React.useState(null);


  // React.useEffect(() => {
  //   axios.get('/newgame').then((response) => {
  //     setPost(response.data);
  //   });
  // }, );

 function handleClick() {
   console.log ("😒")
   axios.post('https://blind-test-songs-server-predeploy.onrender.com/newgame',{})
   .then((res) => console.log (res))
   .catch((err) => console.log (err))
  }
  async function handleClick2() {
    console.log ("😒")
    await fetch('https://blind-test-songs-server-predeploy.onrender.com/newgame')
    .then((res) => console.log (res))
   .catch((err) => console.log (err))
    }

  

 
  
  // axios.get('https://api.github.com/orgs/axios')
  // .then(response => {
  //   console.log(response.data);
  // }, error => {
  //   console.log(error);
  // });
  
//  if (!post) return null;
//  console.log (post)

  return (
    <div>
     
    <p>Welcome to Blind Test Songs</p>
      <Link to= "/Game Page">
        <button onClick={handleClick} >start your game! </button>
      </Link>
    </div>
  )
}