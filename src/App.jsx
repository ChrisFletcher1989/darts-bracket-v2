import './App.css'
import Intro from './Components/Intro.jsx'
import PlayerInputs from './Components/PlayerInputs'
import PlayerNumber from './Components/PlayerNumber'
import Bracket from './Components/Bracket.jsx'

function App() {
  return ( 
    <div className='body'>
    <Intro />
    <br />
    <PlayerNumber/>
    {/* <PlayerInputs /> */}
    {/* <Bracket /> */}
  </div>
  ) 
}

export default App
