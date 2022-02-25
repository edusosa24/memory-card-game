import React from "react";
import "../../styles/Board.css";


const Board = (props) => {

  return (
    <section id="board">
      {props.imagesUrls.map((image) => {
        return (
          <Card
            handleClick={props.handleClick}
            url={image.url}
            key={image.url}
          />
        );
      })}
    </section>
  );
};

const Card = (props) => {
  return (
    <button
      type="button"
      id={props.url}
      onClick={() => props.handleClick(props.url)}
    >
      <img
        src={require(`${props.url}`)}
        alt="" />
    </button>
  );
};


export default Board;