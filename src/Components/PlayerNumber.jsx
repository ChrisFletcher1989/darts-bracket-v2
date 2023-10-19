import React, { useState } from 'react';
import '../App.css';

function PlayerNumber() {
  const [number, setNumber] = useState(); 
  const playerNames = [];

  const handleNumberChange = (event) => {
    setNumber(parseInt(event.target.value, 10));
  };

  for (let i = 1; i <= number; i++) {
    playerNames.push(
      <input
        type="text"
        placeholder={`Player ${i}`}
        className="newPlayers"
        key={i}
      />
    );
  }

    return (
        <div className="players">
          <span className="info">
            Please choose the number of player names then add their names below
          </span>
          <fieldset className="noMargin">
            <div className="dropdown">
              <button className="dropbtn">Number of competitors</button>
              <div className="dropdown-content">
                <select
                  id="competitors"
                  name="competitors"
                  className="dropbtn"
                  value={number}
                  onChange={handleNumberChange}
                >
                  <option value="4">4</option>
                  <option value="8">8</option>
                  <option value="16">16</option>
                  <option value="32">32</option>
                </select>
              </div>
            </div>
          </fieldset>
          <div className="playerNames">{playerNames}</div>
        </div>
      );
    }
    
    export default PlayerNumber;