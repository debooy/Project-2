// App.js
import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import FlashcardNav from "./components/FlashcardNav";
import flashcardData from "./components/FlashcardData";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  return (
    <div className="app">
      <div className="title">
        <h1>Do You Know?</h1>
        <p>Test your knowledge of the world!</p>
      </div>
      <div className="flashcard-style">
        <Flashcard
          question={flashcardData[currentIndex].question}
          answer={flashcardData[currentIndex].answer}
        />
        <FlashcardNav
          flashcardData={flashcardData}
          onIndexChange={handleIndexChange}
        />
      </div>
    </div>
  );
}

export default App;
