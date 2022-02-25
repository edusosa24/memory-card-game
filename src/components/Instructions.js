import React from "react";
import "../styles/Instructions.css";

const Instructions = (props) => {
  return (
    <div id="instructions" style={{display: props.instructionsDisplay}}>
      <div className="instructionBox">
        <h2>HOW TO PLAY:</h2>
        <p>Pick cards being careful not to repeating choices.
          <br />You win if you pick all the cards.
        </p>
        <button
          type="button"
          onClick={() => props.close()}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Instructions;