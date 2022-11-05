import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './pages/Home';
import { GamePage } from './pages/GamePage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='Game Page' element={<GamePage />}/>
    </Routes>
    
  );
}

export default App;
