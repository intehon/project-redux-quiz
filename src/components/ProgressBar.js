/* eslint-disable*/

import React from "react";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
  const quizSlice = useSelector(state => state);
  const question =
    quizSlice.quiz.questions[quizSlice.quiz.currentQuestionIndex];
  const questions = quizSlice.quiz.questions;
  const currentQuestion = quizSlice.quiz.currentQuestionIndex;
  const answers = quizSlice.quiz.answers;

  return (
    <div className="progress">
      <progress className="progress-bar" value={answers.length} max={questions.length} />
      <p>{(answers.length/questions.length)*100}%</p>
    </div>
  );
};