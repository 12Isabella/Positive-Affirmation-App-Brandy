import "./App.css";
import affirmations from "./affirmations";

import { useState } from "react";

function App() {
  let [currentAffirmation, setCurrentAffirmation] = useState(null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function showAffirmation(event) {
    event.preventDefault();
    const numAffirmations = affirmations.length;
    const index = getRandomInt(numAffirmations);

    setCurrentAffirmation(affirmations[index]);
  }
  return (
    <div className="App">
      <h1 className="mt-5">Want to feel better? Press the button!</h1>

      <a href="/" onClick={showAffirmation} className="btn btn-primary mt-5">
        Get Affirmation!
      </a>

      <h2 className="mt-4">{currentAffirmation}</h2>
      <img src=" /images/ocean.jpg" alt="/" />
    </div>
  );
}

export default App;
