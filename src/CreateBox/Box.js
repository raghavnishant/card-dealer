import React from "react";

export default function Box(props) {
  return (
    <div>
      <div
        style={{
          backgroundColor: `${props.box.color}`,
          width: `${props.box.width}px`,
          height: `${props.box.height}px`
        }}
      />
      <button onClick={props.handleRemove}>Remove</button>
    </div>
  );
}
