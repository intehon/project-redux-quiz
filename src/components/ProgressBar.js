/* eslint-disable*/

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const dispatch = useDispatch();
const question = useSelector(
  (state) => state.quiz.questions[quizSlice.quiz.currentQuestionIndex]
);

export const ProgressBar = () => {
  const Bar = () =>
    questions !== undefined &&
    questions.map((question, i) => {
      if (i > 0) {
        return (
          <div
            key={question}
            className="bar"
            style={{ width: 100 / state.questions - 1 + "%" }}
          ></div>
        );
      }
      return null;
    });

  return (
    <div className="progress">
      <Bar />
    </div>
  );
};
