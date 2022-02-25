import React from "react";
import "../styles/ScoreBoard.css";


const ScoreBoard = (props) => {
  return(
    <section id="scoreBoard">
      <p className="currentScore">Current Score: {props.currentScore}</p>
      <p className="highScore">High Score: {props.highScore}</p>
    </section>
  );
}

export default ScoreBoard;