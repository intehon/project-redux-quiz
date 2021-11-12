/* eslint-disable*/

import React from "react";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
  const quizSlice = useSelector(state => state);
  const question =
    quizSlice.quiz.questions[quizSlice.quiz.currentQuestionIndex];
  const questions = quizSlice.quiz.questions
  const currentQuestion = quizSlice.quiz.currentQuestionIndex


  return (
    <div className="progress">
      <progress className="progress-bar" value={currentQuestion} max={questions.length} />
      <p>{question.progress}</p>
    </div>
  );
};