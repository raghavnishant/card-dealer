import React from "react";
import "./Die.css";

export default function Die(props) {
  const { face } = props;
  return (
    <i
      className={`fas fa-dice-${face} Die ${props.isRolling && "isRolling"}`}
    ></i>
  );
}
