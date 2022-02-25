import React from "react";
import "../styles/Losescreen.css";

const Losescreen = (props) => {
  return (
    <div id="Losescreen" style={{display: props.loseDisplay}}>
      <div className="loseBox">
        <h2>You Lose!</h2>
        <button
          type="button"
          onClick={() => props.close()}
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default Losescreen;