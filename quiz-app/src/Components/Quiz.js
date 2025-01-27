import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrentQuestion] = useState(0);

  const [optionChosen, setOptionChosen] = useState("");

  const correctAnswer = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    correctAnswer();

    setCurrentQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    correctAnswer();

    setGameState("endscreen");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>

      <div className="Options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>

        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>

        <button onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>

        <button onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>

      {currQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
