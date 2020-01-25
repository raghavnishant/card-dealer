import React from "react";
import "./Coin.css";

export default function Coin({ face }) {
  if (!face) {
    return null;
  }

  let imgSrc = "";

  if (face === "heads") {
    imgSrc = "https://labs.blogs.com/currency/coin50.png";
  } else {
    imgSrc =
      "https://atkinsonsbullion.com/AtkinsonsBullion/media/product/agco13038/agco13038_1.png";
  }
  return (
    <div className="Coin">
      <img src={imgSrc} alt={face} />
    </div>
  );
}
