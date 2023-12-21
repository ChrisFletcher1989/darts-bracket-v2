import React, { useState, useEffect } from "react";
import PlayerNumber from "./PlayerNumber";
import "../App.css";
import Bracket from "./Bracket";

let randomNames = [];
let seededNames = [];

function PlayerInputs({ number }) {
  let playerNames = [];
  let names = [];
  let a = "";
  let id = "";
  let passcode = "";
  let [randomClicked, setRandomClicked] = useState(false);
  const [savedGame, setSavedGame] = useState([]);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    console.log("Passcode changed:", passcode);
  }, [passcode]);

  useEffect(() => {
    console.log("ID changed:", id);
  }, [id]);

  const handleCompetitor = (event) => {
    a = event.target.value;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === "Tab") {
      handleCompetitorClick();
    }
  };

  const handleCompetitorClick = () => {
    if (a.toLowerCase().includes("seed")) {
      seededNames.push(a);
    } else if (a !== "" && a !== names[names.length - 1]) {
      names.push(a);
    }
  };

  const seeds = (seededNames, names) => {
    let totalNames = names.length + seededNames.length;
    let positions = [0, totalNames - 1];
    if (seededNames.length === 2) {
      for (let i = 0; i < totalNames; i++) {
        randomNames.push("REPLACE");
      }
      randomNames[0] = seededNames[0];
      randomNames[randomNames.length - 1] = seededNames[1];
    }
    if (seededNames.length > 2) {
      let interval = 100 / (seededNames.length - 1);
      let end = 100;
      for (let i = 0; i < seededNames.length / 2 - 1; i++) {
        positions.push(Math.floor((totalNames / 100) * interval));
        positions.push(Math.floor((totalNames / 100) * (end - interval) - 1));
        interval += 100 / (seededNames.length - 1);
      }
      for (let i = 0; i < totalNames; i++) {
        randomNames.push("REPLACE");
      }

      for (let j = 0; j < seededNames.length; j++) {
        randomNames[positions[j]] = seededNames[j];
      }
    }
    console.log(
      "random names=",
      randomNames,
      "seeded names=",
      seededNames,
      "positions length=",
      positions.length,
      "positions=",
      positions
    );
  };

  const handleRandomize = () => {
    if (a !== "" && a !== names[names.length - 1]) {
      names.push(a);
    }
    if (seededNames.length !== 0) {
      seeds(seededNames, names);
    }
    while (names.length > 0) {
      let i = Math.floor(Math.random() * names.length);
      for (let j = 0; j < randomNames.length; j++) {
        if (randomNames[j] === "REPLACE") {
          randomNames[j] = names[i];
          names.splice(i, 1);
          i = 0;
        }
      }
      randomNames.push(names[i]);
      names.splice(i, 1);
      i = 0;
    }
    if (randomNames[randomNames.length - 1] === undefined) {
      randomNames.pop();
    }
    setRandomClicked(true);
  };

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

  const handleLoadClick = async () => {
    try {
      console.log("Before setPasscode - passcode:", passcode, "id:", id);

      const requestData = {
        passcode: passcode,
        id: id,
      };

      console.log("Request Data:", requestData);

      const response = await fetch(
        "https://ya6aaaok58.execute-api.ap-northeast-1.amazonaws.com/loadBracket",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const responseData = await response.json();
      setResponse(responseData);
      console.log("After fetch - response:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  savedGame.push(
    <form className="w-full max-w-sm">
      <div className="flex border-b border-teal-500 py-2">
        <input
          className="text-base appearance-none bg-transparent border-none w-full text-blue-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          id="id"
          key="passcode"
          placeholder="ID (load game)"
          aria-label="id"
          onChange={(event) => {
            id = event.target.value;
          }}
        />
        <input
          className="text-base appearance-none bg-transparent border-none w-full text-blue-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          id="passcode"
          key="passcode"
          placeholder="Passcode?"
          aria-label="passcode"
          onChange={(event) => {
            passcode = event.target.value;
          }}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={handleLoadClick}
        >
          Load Game
        </button>
      </div>
    </form>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      {savedGame}
      <fieldset className="playerNames" id="playerNames">
        {playerNames}
        <br />
      </fieldset>
      <div className="flex">
        <button
          id="randomise px-2"
          className="randomise"
          onClick={handleRandomize}
        >
          Randomise
        </button>
        <button
          id="generatePDF"
          className="randomise"
          onClick={function printFunction() {
            window.print();
          }}
        >
          Print PDF
        </button>
      </div>
      <div className="players"></div>
      <Bracket
        response={response}
        randomNames={randomNames}
        randomClicked={randomClicked}
      />{" "}
    </div>
  );
}

export default PlayerInputs;
