/* eslint-disable*/

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { quiz } from "reducers/quiz"

const Summary = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.quiz.answers)
  const quizOver = useSelector((state) => state.quiz.quizOver)

  const correctAnswer = answers.filter((answers) => {
    return answers.isCorrect === true
  })

  if (quizOver) {
    return (
      <div className="summary">
        <p>You got {correctAnswer.length} out of 5!</p>
        <h4>Your answers:</h4>
        {answers.map((answer) => (
          <p key={answer.questionId}>Question {answer.questionId}:  
            <span className={answer.isCorrect ? "green" : "red"}> {answer.answer}</span>
          </p>
        ))}
        <button
          className="restart-btn"
          onClick={() => dispatch(quiz.actions.restart())}
        >
          Play again!
        </button>
      </div>
    );
  } else return null
};

export default Summary