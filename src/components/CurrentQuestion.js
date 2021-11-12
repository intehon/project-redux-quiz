/* eslint-disable*/
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Summary from "./Summary"
import { quiz } from "../reducers/quiz"
import Buttons from "./Buttons"
import FirstPage from "./FirstPage"
import { ProgressBar } from "./ProgressBar"

export const CurrentQuestion = () => {
  const dispatch = useDispatch()

  // is it better to always call useSelector for each, to avoid updating every const every time something happens? (add this to stackoverflow)
  const quizSlice = useSelector((state) => state)
  const answers = quizSlice.quiz.answers
  const question = quizSlice.quiz.questions[quizSlice.quiz.currentQuestionIndex]
  const quizOver = quizSlice.quiz.quizOver
  const quizStart = quizSlice.quiz.quizStart

  const classNameButton = (answer, question_id, question_correctAnswerIndex, index) => {
    if(answers[question_id-1]?.answer === answer) {
      if (answers.length === question_id && question_correctAnswerIndex === index ) {
        return "correctAnswer"
      } else return "wrongAnswer"
    }
    else return "noAnswer"
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (id, index, correctAnswer) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index, question_correctAnswerIndex: correctAnswer }))
  };

  if (!quizOver && !quizStart) {
    return (
      <>
        <div className="questionBox">
          <h2>Question:</h2>
          <h1> {question.questionText}</h1>
          <img src={question.imgUrl} alt="pic" width="400px" />
          <div className="answerBox">
            {question.options.map((answer, index) => (
              <button
                key={answer}
                className={classNameButton(answer, question.id, question.correctAnswerIndex, index)}
                disabled={answers.length === question.id}
                onClick={() => onAnswerSubmit(question.id, index)}
              >
                {answer}
              </button>
            ))}
          </div>
        <Buttons />
        <ProgressBar />
        </div>
      </>
    )
  } else return null
};
