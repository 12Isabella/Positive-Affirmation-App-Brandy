import "./App.css";
import affirmations from "./affirmations";
import { useState } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  let [currentAffirmation, setCurrentAffirmation] = useState(null);
  function showAffirmation(event) {
    event.preventDefault();
    const numAffirmations = affirmations.length;
    const index = getRandomInt(numAffirmations);
    setCurrentAffirmation(affirmations[index]);
  }
  return (
    <div className="App">
      <h1 className="mt-5">Want to feel better? Press the button!</h1>
      <button onClick={showAffirmation} className="btn btn-primary mt-5">
        Get Affirmation!
      </button>
      <h2 className="mt-3">{currentAffirmation}</h2>
    </div>
  );
}

export default App;
