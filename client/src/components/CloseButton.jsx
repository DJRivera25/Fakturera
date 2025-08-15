import React from "react";
import "./CloseButton.css";

const CloseButton = ({ language, onClick }) => {
  return (
    <button className="close-button" onClick={onClick}>
      {language === "en" ? "Close and Go Back" : "Stäng och gå tillbaka"}
    </button>
  );
};

export default CloseButton;

