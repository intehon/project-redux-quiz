/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { quiz } from "../reducers/quiz";

export const CurrentQuestion = () => {
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  const quizSlice = useSelector((store) => store);
  console.log("slices", quizSlice);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <img src={question.imgUrl} alt="pic" />
      {question.options.map((answer, index) => (
        <button
          key={answer}
          onClick={(answer) => onAnswerSubmit(question.id, index)}
        >
          {answer}
        </button>
      ))}

      <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
        Go to next Question
      </button>
    </div>
  );
};
