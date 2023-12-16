import React, { useEffect, useState } from "react";
import Saving from "./Saving.jsx";
import "../App.css";
import Swal from "sweetalert2";

const BoxType = "BOX";
function Bracket({ randomNames, randomClicked }) {
  const [playerElements, setPlayerElements] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);
  const [fifth, setFifth] = useState([]);
  const [sixth, setSixth] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  let [firstPlayers] = useState([]);
  let [firstScores] = useState([]);
  let [secondPlayers] = useState([]);
  let [secondScores] = useState([]);
  let [thirdPlayers] = useState([]);
  let [thirdScores] = useState([]);
  let [fourthPlayers] = useState([]);
  let [fourthScores] = useState([]);
  let [fifthPlayers] = useState([]);
  let [fifthScores] = useState([]);
  let [sixthPlayers] = useState([]);
  let [sixthScores] = useState([]);

  useEffect(() => {
    let updatedPlayerElements = [];
    let clickedArray = [];
    let updatedSecond = [];
    let updatedThird = [];
    let updatedFourth = [];
    let updatedFifth = [];
    let updatedSixth = [];
    let info = [];
    let length = randomNames.length;

    //MOVE PLAYERS TO NEXT ROUND//

    let move = (event, id, i) => {
      event.target.textContent = clickedArray[0];
      clickedArray.pop();
      i = Math.floor(i / 2);
      if (id === "secondPlayers") {
        secondPlayers[i] = event.target.textContent;
      } else if ((id = "thirdPlayers")) {
        thirdPlayers[i] = event.target.textContent;
      } else if ((id = "fourthPlayers")) {
        fourthPlayers[i] = event.target.textContent;
      } else if ((id = "fifthPlayers")) {
        fifthPlayers[i] = event.target.textContent;
      } else if ((id = "sixthPlayers")) {
        sixthPlayers[i] = event.target.textContent;
      }
    };
    let dontMove = (event) => {
      clickedArray.pop();
    };

    const handleBoxClick = (event, id, i) => {
      if (clickedArray.length === 0) {
        clickedArray.push(event.target.textContent);
      } else {
        Swal.fire({
          title: `Move ${clickedArray[0]}`,
          showDenyButton: true,
          confirmButtonText: "Move",
          denyButtonText: `Don't Move`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Moved!", "", "success");
            move(event, id, i);
          } else if (result.isDenied) {
            Swal.fire("Not Moved", "", "info");
            dontMove();
          }
        });
      }
    };
    //CREATE PLAYERS IF LOADED//
    if (firstPlayers !== null && firstScores !== null) {
      for (let i = 0; i < firstPlayers.length; i++) {
        updatedPlayerElements.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder={firstScores[i]}
              onChange={(event) => {
                firstScores[i] = event.target.value;
              }}
            />
            <p
              className="playerLabel1"
              onClick={(event) => handleBoxClick(event, "firstPlayers", i)}
            >
              {firstPlayers[i]}
            </p>
          </div>
        );
      }
      for (let i = 0; i <= secondPlayers.length - 1; i++) {
        updatedSecond.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder={secondScores[i]}
              onChange={(event) => {
                secondScores[i] = event.target.value;
              }}
            />
            <p
              className="playerLabel"
              onClick={(event) => handleBoxClick(event, "secondPlayers", i)}
            >
              {secondPlayers[i]}
            </p>
          </div>
        );
      }
      for (let i = 0; i <= thirdPlayers.length - 1; i++) {
        updatedThird.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder={thirdScores[i]}
              onChange={(event) => {
                thirdScores[i] = event.target.value;
              }}
            />
            <p
              className="playerLabel"
              onClick={(event) => handleBoxClick(event, "thirdPlayers", i)}
            >
              {thirdPlayers[i]}
            </p>
          </div>
        );
      }
      for (let i = 0; i <= fourthPlayers.length - 1; i++) {
        updatedFourth.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder={fourthScores[i]}
              onChange={(event) => {
                fourthScores[i] = event.target.value;
              }}
            />
            <p
              className="playerLabel"
              onClick={(event) => handleBoxClick(event, "fourthPlayers", i)}
            >
              {fourthPlayers[i]}
            </p>
          </div>
        );
      }
      for (let i = 0; i <= fifthPlayers.length - 1; i++) {
        updatedFifth.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder={fifthScores[i]}
              onChange={(event) => {
                fifthScores[i] = event.target.value;
              }}
            />
            <p
              className="playerLabel"
              onClick={(event) => handleBoxClick(event, "fifthPlayers", i)}
            >
              {fifthPlayers[i]}
            </p>
          </div>
        );
      }
      for (let i = 0; i <= sixthPlayers.length - 1; i++) {
        updatedSixth.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder={sixthScores[i]}
              onChange={(event) => {
                sixthScores[i] = event.target.value;
              }}
            />
            <p
              className="playerLabel"
              onClick={(event) => handleBoxClick(event, "sixthPlayers", i)}
            >
              {sixthPlayers[i]}
            </p>
          </div>
        );
      }
    }
    //CREATE PLAYERS ON RANDOMIZE
    if (length > 0) {
      for (let i = 0; i < length; i++) {
        firstPlayers.push(randomNames[i]);
        firstScores.push(0);
        updatedPlayerElements.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder="0"
              onChange={(event) => {
                firstScores[i] = event.target.value;
              }}
            />
            <p
              className="playerLabel1"
              onClick={(event) => handleBoxClick(event, "firstPlayers", i)}
            >
              {randomNames[i]}
            </p>
          </div>
        );
      }
    }
    length = length / 2;
    if (length >= 1) {
      for (let i = 1; i <= length; i++) {
        secondPlayers.push(`Winner of round 1 G${i}`);
        secondScores.push(0);
        updatedSecond.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder="0"
              onChange={(event) => {
                secondScores[i - 1] = event.target.value;
              }}
            />
            <p
              className="playerLabel"
              onClick={(event) => handleBoxClick(event, "secondPlayers", i)}
            >{`Winner of round 1 G${i}`}</p>
          </div>
        );
      }
    }
    length = length / 2;
    if (length >= 1) {
      for (let i = 1; i <= length; i++) {
        thirdPlayers.push(`Winner of round 2 G${i}`);
        thirdScores.push(0);
        updatedThird.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder="0"
              onChange={(event) => {
                thirdScores[i - 1] = event.target.value;
              }}
            />

            <p
              className="playerLabel"
              id="thirdElements"
              onClick={(event) => handleBoxClick(event, "thirdPlayers")}
            >{`Winner of round 2 G${i}`}</p>
          </div>
        );
      }
    }
    length = length / 2;
    if (length >= 1) {
      for (let i = 1; i <= length; i++) {
        fourthPlayers.push(`Winner of round 3 G${i}`);
        fourthScores.push(0);
        updatedFourth.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder="0"
              onChange={(event) => {
                fourthScores[i - 1] = event.target.value;
              }}
            />

            <p
              className="playerLabel"
              onClick={(event) => handleBoxClick(event, "fourthPlayers")}
            >{`Winner of round 3 G${i}`}</p>
          </div>
        );
      }
    }
    length = length / 2;
    if (length >= 1) {
      for (let i = 1; i <= length; i++) {
        fifthPlayers.push(`Winner of round 4 G${i}`);
        fifthScores.push(0);
        updatedFifth.push(
          <div key={i} className="box">
            <input
              className="score"
              id="quantity"
              name="quantity"
              placeholder="0"
              onChange={(event) => {
                fifthScores[i - 1] = event.target.value;
              }}
            />

            <p
              className="playerLabel"
              onClick={(event) => handleBoxClick(event, "fifthPlayers")}
            >{`Winner of round 4 G${i}`}</p>
          </div>
        );
      }
    }
    length = length / 2;
    if (length >= 1) {
      for (let i = 1; i <= length; i++) {
        sixthPlayers.push(`Winner of round 5 G${i}`);
        sixthScores.push(0);
        updatedSixth.push(
          <div key={i} className="box">
            <p
              className="playerLabel"
              onClick={(event) => handleBoxClick(event, "sixthPlayers")}
            >{`Winner of round 5 G${i}`}</p>
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
    if (randomClicked) {
      setShowInfo(true);
    }
  }, [randomNames, randomClicked]);

  //THE HTML//
  return (
    <div>
      {showInfo && (
        <div>
          <p className="text-lg text-green-500">
            To move/advance a player, click them, then click to the position you
            want to move them to
          </p>
        </div>
      )}
      <div className="wrapper">
        <div id="first" className="zone gray first">
          {playerElements}
        </div>
        <div id="second" className="zone gray round">
          {second}
        </div>
        <div id="third" className="zone gray round">
          {third}
        </div>
        <div id="fourth" className="zone gray round">
          {fourth}
        </div>
        <div id="fifth" className="zone gray round">
          {fifth}
        </div>
        <div id="sixth" className="zone gray round">
          {sixth}
        </div>
      </div>
      <div>
        <Saving
          firstPlayers={firstPlayers}
          secondPlayers={secondPlayers}
          thirdPlayers={thirdPlayers}
          fourthPlayers={fourthPlayers}
          fifthPlayers={fifthPlayers}
          sixthPlayers={sixthPlayers}
          firstScores={firstScores}
          secondScores={secondScores}
          thirdScores={thirdScores}
          fourthScores={fourthScores}
          fifthScores={fifthScores}
          sixthScores={sixthScores}
        />
      </div>
    </div>
  );
}

export default Bracket;
