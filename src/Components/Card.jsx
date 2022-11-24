import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={props.image} alt="pokemon.png" />
      </div>
      <div className="card-text">
        <Link to={`${props.name}`}> <h2>{props.name}</h2></Link>
        <div className="icons">
            {props.type}
        </div>
      </div>
    </div>
  );
};

export default Card;
