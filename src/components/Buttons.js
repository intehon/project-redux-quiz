/* eslint-disable*/

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { quiz } from "../reducers/quiz"
import styled from "styled-components"

const ButtonStyle = styled.div`
  padding: 20px;

  button {
    padding: 15px;
    background: pink;
    border: none;
    border-radius: 5px;
    font-weight: bold;
  }

  button:hover {
    color: white;
    cursor: pointer;
  }
`;

const Buttons = () => {
  const dispatch = useDispatch()

  const quizSlice = useSelector((state) => state)
  const answers = quizSlice.quiz.answers
  const question =
    quizSlice.quiz.questions[quizSlice.quiz.currentQuestionIndex]

  return (
    <ButtonStyle>
      {answers.length === question.id && answers.length < 5 && (
        <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
          Go to next Question
        </button>
      )}
      {answers.length === 5 && (
        <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
          Quiz Over
        </button>
      )}
    </ButtonStyle>
  );
};

export default Buttons