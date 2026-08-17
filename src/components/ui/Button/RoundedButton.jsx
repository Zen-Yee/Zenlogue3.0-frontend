import React from "react";
import "./RoundedButton.css";

function RoundedButton(props) {
  return (
    <button type={props.type} className="round-button">
      {props.text}
    </button>
  );
}

export default RoundedButton;
