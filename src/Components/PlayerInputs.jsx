import React, { useRef, useEffect } from 'react'
import '../App.css'
import '../App'

function playerInputs (){
    return (
        <div className="players">
        
          <fieldset className= "playerNames" id="playerNames">
            <br/>
          </fieldset>
          <button ID="randomise" className="randomise">Randomise</button>
          <button ID="generatePDF" className="randomise">Print PDF</button>
          <button ID="view" className="randomise"><a href="horizontal.html">Change to horizontal view</a></button><br/>
    
          </div>
    )
}