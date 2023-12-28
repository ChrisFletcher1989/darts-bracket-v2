import React, { useState } from "react";
import store from "../redux/store";
import "../App.css";
import buttonClickedReducer, {
  clicked,
} from "../redux/saveClicked/saveClicked";

function Saving({
  firstPlayers,
  secondPlayers,
  thirdPlayers,
  fourthPlayers,
  fifthPlayers,
  sixthPlayers,
  firstScores,
  secondScores,
  thirdScores,
  fourthScores,
  fifthScores,
  sixthScores,
}) {
  const unsubscribe = store.subscribe(() => {
    console.log("Updated State", store.getState());
  });
  let email = "";
  let [passcode, setPasscode] = useState();
  let [id, setId] = useState();
  let [password, setPassword] = useState();
  let [saveForm, setSaveForm] = useState([]);

  let handleSaveClick = () => {
    store.dispatch(clicked());
    setSaveForm([
      ...saveForm,
      <div key={saveForm.length} className="w-full max-w-xs mx-auto mt-3">
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-blue-500">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-red-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              className="text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Please enter email address"
              onChange={(event) => handleEmailChange(event)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-red-700 text-sm font-bold mb-2"
              htmlFor="inputPasscode"
            >
              Create an ID (needed by others to view)
            </label>
            <input
              className="text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inputId"
              name="id"
              type="string"
              placeholder="Enter an ID (to share)"
              onChange={(event) => handleIdChange(event)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-red-700 text-sm font-bold mb-2"
              htmlFor="passcode"
            >
              Please set a passcode others need to access this tournament
            </label>
            <input
              className="text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passcode"
              name="email"
              type="string"
              placeholder="Enter passcode (to share)"
              onChange={(event) => handlePasscodeChange(event)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-red-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Please enter a password for editing this tournament (DO NOT SHARE)
            </label>
            <input
              className="text-base shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password (PERSONAL)"
              onChange={(event) => handlePasswordChange(event)}
            />
          </div>
          <div>
            <button
              className="text-base bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSaveTournament}
            >
              Save existing tournament
            </button>
            <button
              className="text-base bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSaveNewTournament}
            >
              Add tournament
            </button>
          </div>
        </form>
      </div>,
    ]);
  };

  let handleEmailChange = (event) => {
    email = event.target.value;
  };
  let handleIdChange = (event) => {
    id = event.target.value;
  };

  let handlePasscodeChange = (event) => {
    passcode = event.target.value;
  };

  let handlePasswordChange = (event) => {
    password = event.target.value;
  };

  let handleSaveTournament = () => {
    console.log("third players before send", third);
    event.preventDefault();
    if (password.length > 5) {
      fetch(
        "https://ya6aaaok58.execute-api.ap-northeast-1.amazonaws.com/saveBracket",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            passcode: passcode,
            password: password,
            id: id,
            firstPlayers: firstPlayers,
            secondPlayers: secondPlayers,
            thirdPlayers: thirdPlayers,
            fourthPlayers: fourthPlayers,
            fifthPlayers: fifthPlayers,
            sixthPlayers: sixthPlayers,
            firstScores: firstScores,
            secondScores: secondScores,
            thirdScores: thirdScores,
            fourthScores: fourthScores,
            fifthScores: fifthScores,
            sixthScores: sixthScores,
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            // Check for error status and throw an error
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((responseData) => {
          setSaveForm([
            ...saveForm,
            <div key={saveForm.length}>
              <p>{JSON.stringify(responseData)}</p>
            </div>,
          ]);
        })
        .catch((error) => {
          setSaveForm([
            ...saveForm,
            <div key={saveForm.length}>
              <p>Error: {error.message}</p>
            </div>,
          ]);
        });
    }
  };
  let handleSaveNewTournament = () => {
    event.preventDefault();
    if (password.length > 5) {
      fetch(
        "https://ya6aaaok58.execute-api.ap-northeast-1.amazonaws.com/addBracket",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            passcode: passcode,
            password: password,
            id: id,
            firstPlayers: firstPlayers,
            secondPlayers: secondPlayers,
            thirdPlayers: thirdPlayers,
            fourthPlayers: fourthPlayers,
            fifthPlayers: fifthPlayers,
            sixthPlayers: sixthPlayers,
            firstScores: firstScores,
            secondScores: secondScores,
            thirdScores: thirdScores,
            fourthScores: fourthScores,
            fifthScores: fifthScores,
            sixthScores: sixthScores,
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            // Check for error status and throw an error
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((responseData) => {
          setSaveForm([
            ...saveForm,
            <div key={saveForm.length}>
              <p>{JSON.stringify(responseData)}</p>
            </div>,
          ]);
        })
        .catch((error) => {
          setSaveForm([
            ...saveForm,
            <div key={saveForm.length}>
              <p>Error: {error.message}</p>
            </div>,
          ]);
        });
    }
  };

  return (
    <div className="body">
      {!buttonClickedReducer.buttonClicked && (
        <button
          onClick={handleSaveClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save for others to view?
        </button>
      )}
      {saveForm}
    </div>
  );
}

export default Saving;
