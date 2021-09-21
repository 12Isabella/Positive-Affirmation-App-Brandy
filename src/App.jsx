import "./App.css";
import affirmations from "./affirmations";
import listOfImages from "./listOfImages";

import { useState } from "react";

function App() {
  let [currentAffirmation, setCurrentAffirmation] = useState(null);
  let [counter, setCounter] = useState(0);
  let [backroundImage, setBackgroundImage] = useState("image1");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function runCounter() {
    if (counter < listOfImages.length - 1) {
      counter = counter + 1;
      return counter;
    } else {
      counter = 0;
      return counter;
    }
  }

  function showAffirmation(event) {
    event.preventDefault();
    const numAffirmations = affirmations.length;
    const index = getRandomInt(numAffirmations);

    const imageIndex = counter;

    console.log(imageIndex);

    setCounter(runCounter());

    setCurrentAffirmation(affirmations[index]);

    setBackgroundImage(`image${imageIndex}`);
  }
  return (
    <div className="App">
      <div className={`${backroundImage} image`}>
        <h1 className="mt-5">Want to feel better? Press the button!</h1>

        <a href="/" onClick={showAffirmation} className="btn btn-primary mt-5">
          Get Affirmation!
        </a>

        <h2 className="mt-4">{currentAffirmation}</h2>
      </div>
    </div>
  );
}

export default App;
