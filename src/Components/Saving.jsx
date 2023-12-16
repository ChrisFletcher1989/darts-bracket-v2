import React, { useState } from "react";
import "../App.css";

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
  let [email, setEmail] = useState();

  let [passcode, setPasscode] = useState();
  let [password, setPassword] = useState();
  let [saveForm, setSaveForm] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  let handleSaveClick = () => {
    setButtonClicked(true);
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
              type="submit"
              className="text-base bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSaveTournament}
            >
              Save/Add tournament
            </button>
          </div>
        </form>
      </div>,
    ]);
  };

  let handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  let handlePasscodeChange = (event) => {
    setPasscode(event.target.value);
  };

  let handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let handleSaveTournament = () => {
    if (password.length > 5) {
      fetch("", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          passcode: passcode,
          password: password,
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
      })
        .then((response) => response.json())
        .then(() => {
          setSaveForm([
            ...saveForm,
            <div key={saveForm.length}>
              <p>Saved Successfully</p>
            </div>,
          ]);
        });
    }
  };

  return (
    <div className="body">
      {!buttonClicked && (
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
