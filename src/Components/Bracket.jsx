import React, { useEffect, useState } from 'react';
import '../App.css';

function Bracket({ randomNames, randomClicked }) {
  const [playerElements, setPlayerElements] = useState([]);
  const [second, setSecond] = useState([]); 
  const [third, setThird] = useState([]); 
  const [fourth, setFourth] = useState([]); 
  const [fifth, setFifth] = useState([]); 
  const [sixth, setSixth] = useState([]); 

  useEffect(() => {
    console.log("EFFECT", randomNames);
    let updatedPlayerElements = [];
    let updatedSecond = [];
    let updatedThird=[]
    let updatedFourth=[]
    let updatedFifth=[]
    let updatedSixth=[]
    let length = randomNames.length;

    if (length > 0) {
      for (let i = 0; i < length; i++) {
        updatedPlayerElements.push(
          <div key={i} className='box'>
            <p className='playerLabel1'>{randomNames[i]}</p>
          </div>
        );
      }
    }

    length = length / 2;
    if (length >= 1) {
      for (let i = 1; i <= length; i++) {
        updatedSecond.push(
          <div key={i} className='box'>
            <p className='playerLabel'>{`Winner of round 1 G${i}`}</p>
          </div>
        );
      }
    }
    length = length / 2;
    if (length >= 1) {
      for (let i = 1; i <= length; i++) {
        updatedThird.push(
          <div key={i} className='box'>
            <p className='playerLabel'>{`Winner of round 2 G${i}`}</p>
          </div>
        );
      }
    }
    length = length / 2;
    if (length >= 1) {
      for (let i = 1; i <= length; i++) {
        updatedFourth.push(
          <div key={i} className='box'>
            <p className='playerLabel'>{`Winner of round 3 G${i}`}</p>
          </div>
        );
      }
    }
    length = length / 2;
    if (length >= 1) {
      for (let i = 1; i <= length; i++) {
        updatedFifth.push(
          <div key={i} className='box'>
            <p className='playerLabel'>{`Winner of round 4 G${i}`}</p>
          </div>
        );
      }
    }
    length = length / 2;
    if (length >= 1) {
      for (let i = 1; i <= length; i++) {
        updatedSixth.push(
          <div key={i} className='box'>
            <p className='playerLabel'>{`Winner of round 5 G${i}`}</p>
          </div>
        );
      }
    }
    setPlayerElements(updatedPlayerElements);
    setSecond(updatedSecond);
    setThird(updatedThird);
    setFourth(updatedFourth);
    setFifth(updatedFifth);
    setSixth(updatedSixth);
  }, [randomClicked]);

  return (
    <div className="players">
      <div className="wrapper">
        <div id="first" className="zone gray first">
          {playerElements}
        </div>
        <div id="second" className="zone gray round">
          {second}
        </div>
        <div id="third" className="zone gray round">{third}</div>
        <div id="fourth" className="zone gray round">{fourth}</div>
        <div id="fifth" className="zone gray round">{fifth}</div>
        <div id="sixth" className="zone gray round">{sixth}</div>
      </div>
    </div>
  );
}

export default Bracket;
