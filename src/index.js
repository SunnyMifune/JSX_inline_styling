import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "Red",
  fontSize: "100px",
  border: "1px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
