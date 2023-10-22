import React, { useRef, useEffect } from 'react'
import '../App.css'
import '../App'

function Bracket ({randomNames, randomClicked}){
    useEffect(() =>{
console.log("EFFECT", randomNames)
    }, [randomClicked])
    //VANILLA JS TO MAKE FIRST BRACKET(BEFORE ADDING NAMES)
    // if(a>=1){
    //     for (let i = 1; i <= a; i++) {
    // let bracket = document.createElement("div");
    // bracket.setAttribute("class", "box"); 
    // let paragraph = document.createElement("p");
    // paragraph.setAttribute("class", "playerLabel1")
    // paragraph.textContent = "Awaiting player info";
    // bracket.appendChild(paragraph);    
    // first.appendChild(bracket)
    //     }
    // }
    return (
        <div className="players">
        <div className="wrapper">
       <div id="first" className="zone gray first"></div>
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