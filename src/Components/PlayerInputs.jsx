
import React, { useRef, useEffect, useState} from 'react'
import PlayerNumber from './PlayerNumber'
import '../App.css'
import '../App'
import Bracket from './Bracket'
let randomNames=[];
let seededNames=[]
function PlayerInputs ({ number }){
    let playerNames=[]
    let names=[]
    let a= ""
    let i=0
    let [randomClicked, setRandomClicked]= useState(false)
    const [competitor, setCompetitor]=useState()

    //WHEN USER TYPES//
    const handleCompetitor=(event)=>{
        a=(event.target.value)
    }
    //ADD TO ARRAY WHEN USER FINISHES TYPING
     const handleKeyPress=(event)=>{
      if (event.key==='Enter' || event.key==='Tab'){
        handleCompetitorClick()
      }
    }
    const handleCompetitorClick=()=>{
      if (a.toLowerCase().includes("seed")){
        seededNames.push(a)
      }
        else if(a!="" && a!=names[names.length-1]){names.push(a)}
    }
    let seeds = (seededNames, names) => {
      let totalNames=names.length+seededNames.length
      let positions=[0, totalNames-1]
      if (seededNames.length==2){
      for (let i=0; i<totalNames; i++){
        randomNames.push("REPLACE")
      }
      randomNames[0]=seededNames[0];
      randomNames[randomNames.length-1]=seededNames[1];
      }
      if (seededNames.length>2){

        let interval = 100 / (seededNames.length - 1);         
         let end =100
         for (let i = 0; i < seededNames.length / 2-1; i++) {
          positions.push(Math.floor((totalNames/100) * interval));
          positions.push(Math.floor((totalNames/100) * (end - interval)-1));
          interval += 100 / (seededNames.length - 1); 

        }
for (let i=0; i<totalNames; i++){
  randomNames.push("REPLACE")
}

  for (let j=0; j<seededNames.length; j++){
    randomNames[positions[j]]=seededNames[j];
    
  }
      }
      console.log("random names=", randomNames, "seeded names=", seededNames, "positions length=", positions.length, "positions=", positions)

    };
//WHEN "randomize" IS PRESSED//
  const [randomizedNames, setRandomizedNames] = useState([]);
    const [randomize, setRandomize]=useState([])
    const handleRandomize = () => {
     
      if(a!="" && a!=names[names.length-1]){names.push(a)}
      if (seededNames.length!=0){
        seeds(seededNames, names)
      }
    while(names.length>0){
        let i = Math.floor(Math.random() * names.length)
        for (let j=0; j<randomNames.length; j++){
          if (randomNames[j]==="REPLACE"){
            randomNames[j]=names[i]
            names.splice(i, 1);
            i=0
          }
        }
            randomNames.push(names[i])
            names.splice(i, 1)
            i=0;
            }
            if(randomNames[randomNames.length-1]===undefined){
              randomNames.pop()
            }
            setRandomClicked(true)
            
    }
  
      for (let i = 1; i <= number; i++) {
        playerNames.push(
          <input
            type="text"
            placeholder={`Player ${i}`}
            className="newPlayers p-2 mx-2.5 my-2.5"
            key={i}
            onChange={handleCompetitor}
            onClick={handleCompetitorClick}
            onKeyDown={handleKeyPress}
          />
        );
      }

    return (
      <div>
          <fieldset className= "playerNames" id="playerNames">{playerNames}
            <br/>
          </fieldset>
          <button id="randomise px-2" className="randomise" onClick={handleRandomize}>Randomise</button>
          <button id="generatePDF" className="randomise" onClick={ function printFunction(){
    window.print()
  }}>Print PDF</button>
          <div className="players">
        </div>
        <Bracket randomNames={randomNames} randomClicked={randomClicked} /> </div>
    )

    

}
export default PlayerInputs