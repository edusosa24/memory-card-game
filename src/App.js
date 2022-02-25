import React, { useState, useEffect } from "react";
import "./styles/App.css";
import uniqid from 'uniqid';
import Board from "./components/Board/Board.js";
import ScoreBoard from "./components/Scoreboard";
import Instructions from "./components/Instructions.js";
import Winscreen from "./components/Winscreen.js";
import Losescreen from "./components/Losescreen.js";


const App = () => {

  const images = [
    { url: "./images/BlueEyesToonDragon.png", clicked: false },
    { url: "./images/BlueEyesWhiteDragon.png", clicked: false },
    { url: "./images/DarkMagician.png", clicked: false },
    { url: "./images/DarkMagicianGirl.png", clicked: false },
    { url: "./images/ExodiaTheForbiddenOne.png", clicked: false },
    { url: "./images/LeftArmOfTheForbiddenOne.png", clicked: false },
    { url: "./images/LeftLegOfTheForbiddenOne.png", clicked: false },
    { url: "./images/RightArmOfTheForbiddenOne.png", clicked: false },
    { url: "./images/RightLegOfTheForbiddenOne.png", clicked: false },
    { url: "./images/ToonDarkMagician.png", clicked: false },
    { url: "./images/ToonDarkMagicianGirl.png", clicked: false },
    { url: "./images/RedEyesBlackDragon.png", clicked: false },
    { url: "./images/RedEyesToonDragon.png", clicked: false },
    { url: "./images/SliferTheSkyDragon.png", clicked: false },
    { url: "./images/ObeliskTheTormentor.png", clicked: false },
    { url: "./images/TheWingedDragonOfRa.png", clicked: false }
  ];

  const [imagesUrls, setImagesUrls] = useState(images);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [instructionsDisplay, setInstructionsDisplay] = useState("flex");
  const [winDisplay, setWinDisplay] = useState("none");
  const [loseDisplay, setLoseDisplay] = useState("none");

  useEffect(() => {
   if(currentScore === 16){
     setWinDisplay("flex");
   }
  }, [currentScore]);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

  const resetGame = () => {
    setImagesUrls(shuffleArray(images));
    setCurrentScore(0);
  }

  const imageClicked = (num) => {
    let array = imagesUrls;
    array[num].clicked = true;
    setImagesUrls(shuffleArray(array));
    setCurrentScore(currentScore + 1);
    if (highScore <= currentScore) {
      setHighScore(highScore + 1);
    }
  }

  const handleClick = (url) => {
    let i = 0;
    for (i; url !== imagesUrls[i].url; i++);

    if (imagesUrls[i].clicked === true) {
      setLoseDisplay("flex");
      resetGame();
    }
    else {
      imageClicked(i);
    }
  }

  const closeInstructions = () => {
    setInstructionsDisplay("none");
  }

  const closeWinBox = () => {
    setWinDisplay("none");
    resetGame();
  }

  const closeLoseBox = () => {
    setLoseDisplay("none");
  }


  return (
    <div>
      <Instructions
        key={uniqid()}
        instructionsDisplay={instructionsDisplay}
        close={closeInstructions}
      />

      <Winscreen
        key={uniqid()}
        winDisplay={winDisplay}
        close={closeWinBox}
      />

      <Losescreen
        key={uniqid()}
        loseDisplay={loseDisplay}
        close={closeLoseBox}
      />

      <header>
        <h1>Memory Card Game</h1>
      </header>

      <ScoreBoard
        key={uniqid()}
        currentScore={currentScore}
        highScore={highScore}
      />

      <Board
        key={uniqid()}
        imagesUrls={imagesUrls}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
