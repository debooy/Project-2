import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ question, answer }) => {
  return (
    <div className="container">
      <div className="flashcard">
        <div className="flashcard-front">{question}</div>
        <div className="flashcard-back">{answer}</div>
      </div>
    </div>
  );
};

export default Flashcard;
