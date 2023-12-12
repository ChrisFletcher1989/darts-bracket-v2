import "./App.css";
import Intro from "./Components/Intro.jsx";
import PlayerNumber from "./Components/PlayerNumber";

function App() {
  return (
    <div className="body">
      <Intro />
      <br />
      <PlayerNumber />
    </div>
  );
}

export default App;
