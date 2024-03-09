import React, { useState } from 'react';
import "./FlashcardNav.css";

const FlashcardNav = ({ flashcardData, onIndexChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? flashcardData.length - 1 : currentIndex - 1);
    onIndexChange(currentIndex === 0 ? flashcardData.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === flashcardData.length - 1 ? 0 : currentIndex + 1);
    onIndexChange(currentIndex === flashcardData.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div>
      <button className='flashcard-button' onClick={handlePrevious}>Previous</button>
      <button className='flashcard-button' onClick={handleNext}>Next</button>
    </div>
  );
};

export default FlashcardNav;