import React from "react";
import "../styles/Winscreen.css";

const Winscreen = (props) => {
  return (
    <div id="winscreen" style={{display: props.winDisplay}}>
      <div className="winBox">
        <h2>You win!</h2>
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

export default Winscreen;