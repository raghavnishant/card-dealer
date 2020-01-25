import React from "react";
import "./Box.css";

export default function Box(props) {
  const [red, green, blue] = props.color;
  const { id } = props.id;

  const handleClick = id => {
    props.changeColor(id);
  };
  return (
    <div
      onClick={() => console.log(id)}
      className="Box"
      style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
    ></div>
  );
}
