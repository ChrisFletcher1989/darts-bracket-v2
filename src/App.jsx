import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Players from './Components/Players.jsx'

function App() {
  const [playerNumbers, setPlayerNumbers]=useState('')
  const [playerNames, setPlayerNames]=useState([]);

  return ( 
      <div>
        <Players/>
        </div>
  )
}

export default App
