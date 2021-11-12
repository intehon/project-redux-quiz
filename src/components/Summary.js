/* eslint-disable*/

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { quiz } from "reducers/quiz"

const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()

  const correctAnswer = answers.filter((answers) => {
    return answers.isCorrect === true
  })

  // const changeStyle = (isCorrect) => {
  //   return (isCorrect ? {color: green} : {color: red}) <span style={changeStyle(answers[0].isCorrect)}></span>
  // }

  return (
    <div className="summary">
      <p>You got {correctAnswer.length} out of 5!</p>
      <h4>Your answers/ correct answer:</h4>
      {/* ev mappa här över arrayen av svar */}
      <p> Question 1: {answers[0].answer}</p>
      <p> Question 2: {answers[1].answer}</p>
      <p> Question 3: {answers[2].answer}</p>
      <p> Question 4: {answers[3].answer}</p>
      <p> Question 5: {answers[4].answer}</p>
      <button
        className="restart-btn"
        onClick={() => dispatch(quiz.actions.restart())}
      >
        Play again!
      </button>
    </div>
  );
};

export default Summary