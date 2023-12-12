import React, { useState } from "react";
import "../App.css";
import PlayerInputs from "./PlayerInputs";

function PlayerNumber() {
  const [number, setNumber] = useState(4);
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };
  const [nameChange, setNameChange] = useState();
  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    playerArray.push(inputValue);
  };
  return (
    <div className="players">
      <div className="info text-sm">
        <span className="text-lg text-green-500">
          How to use:
          <br />
        </span>
        <span className="text-base	">
          To create a tournament bracket, please choose the number of player
          names then add their names below.
        </span>
        <br />
        <span className="text-lg text-green-500">
          Need seeded players?
          <br />
        </span>
        To add seeded players, type SEED before their name.
        <br />
        What is seeded? Seeded players not face each other until as late in the
        tournament as possible (and never in round 1).
        <br />
        Enter the strongest seed first.
      </div>
      <fieldset className="uppercase">
        <div className="dropdown">
          <button className="dropbtn upperca">Number of competitors</button>
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

      <PlayerInputs number={number} />
    </div>
  );
}

export default PlayerNumber;
