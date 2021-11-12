/* eslint-disable*/

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "reducers/quiz";

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const correctAnswer = answers.filter((answers) => {
    return answers.isCorrect === true;
  });

  console.log(answers)

  return (
    <div className="summary">
      <p>You got {correctAnswer.length} out of 5!</p>
      <h4>Your answers/ correct answer:</h4>
      {/* ev mappa här över arrayen av svar */}
      <p> Question 1: </p>
      <p> Question 2: </p>
      <p> Question 3: </p>
      <p> Question 4: </p>
      <p> Question 5: </p>
      <button
        className="restart-btn"
        onClick={() => dispatch(quiz.actions.restart())}
      >
        Play again!
      </button>
    </div>
  );
};

export default Summary;
