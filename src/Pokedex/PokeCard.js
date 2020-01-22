import React from "react";
import "./PokeCard.css";

// const link =

export default function PokeCard(props) {
  const { name, id, type, ex } = props.pokemon;
  return (
    <div className="PokeCard">
      <img
        alt={name}
        className="PokeCard-img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <h2>{name}</h2>
      <h3>Type: {type}</h3>
      <p>Experience: {ex}</p>
    </div>
  );
}
