import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={props.image} alt="pokemon.png" />
      </div>
      <div className="card-text">
        <h2>{props.name}</h2>
        <div className="icons">
            {props.type}
        </div>
      </div>
    </div>
  );
};

export default Card;
