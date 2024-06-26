import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

export default function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className="Menu">
      {/*       
      when clicked sets gamestate to quiz in main app.js */}
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
