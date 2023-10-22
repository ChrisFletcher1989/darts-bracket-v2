import React, { useRef, useEffect } from 'react'
import '../App.css'
import '../App'

function Bracket ({randomNames, randomClicked}){
    useEffect(() =>{
console.log("EFFECT", randomNames)
    }, [randomClicked])
    return (
        <div className="players">
        <div className="wrapper">
       <div id="first" className="zone gray first">{randomNames}</div>
       <div id="second" className="zone gray round"></div>
       <div id="third" className="zone gray round"></div>
       <div id="fourth" className="zone gray round"></div>
       <div id="fifth" className="zone gray round"></div>
       <div id="sixth" className="zone gray round"></div>
    </div>
  </div>
    )
}
export default Bracket