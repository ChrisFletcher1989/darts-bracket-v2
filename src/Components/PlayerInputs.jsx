
import React, { useRef, useEffect, useState} from 'react'
import PlayerNumber from './PlayerNumber'
import '../App.css'
import '../App'
import Bracket from './Bracket'
let randomNames=[];
function PlayerInputs ({ number }){
    let playerNames=[]
    let names=[]
    let a= ""
    let [randomClicked, setRandomClicked]= useState(false)
    const [competitor, setCompetitor]=useState()
    const handleCompetitor=(event)=>{
        a=(event.target.value)
    }
    const handleCompetitorClick=()=>{
        if(a!=""){names.push(a)}
    }

  const [randomizedNames, setRandomizedNames] = useState([]);
    const [randomize, setRandomize]=useState([])
    const handleRandomize = () => {
        names.push(a)
    console.log("NAMES ARE", names, randomClicked)
    while(names.length>0){
        let i = Math.floor(Math.random() * names.length)
            randomNames.push(names[i])
            names.splice(i, 1)
            i=0;
            }
            setRandomClicked(true)

    }
  
      for (let i = 1; i <= number; i++) {
        playerNames.push(
          <input
            type="text"
            placeholder={`Player ${i}`}
            className="newPlayers"
            key={i}
            onChange={handleCompetitor}
            onClick={handleCompetitorClick}
          />
        );
      }

    return (
        <div className="players">
          <fieldset className= "playerNames" id="playerNames">{playerNames}
            <br/>
          </fieldset>
          <button ID="randomise" className="randomise" onClick={handleRandomize}>Randomise</button>
          <button ID="generatePDF" className="randomise">Print PDF</button>
          <button ID="view" className="randomise"><a href="horizontal.html">Change to horizontal view</a></button><br/>
          <div className="players">
        </div>
        <Bracket randomNames={randomNames} randomClicked={randomClicked} />
          </div>
    )

    

}
export default PlayerInputs










