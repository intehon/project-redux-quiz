/* eslint-disable*/
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Summary from './Summary';
import { quiz } from '../reducers/quiz'
import Buttons from './Buttons';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();

  const quizSlice = useSelector((state) => state);
  const answers = quizSlice.quiz.answers;
  const question =
    quizSlice.quiz.questions[quizSlice.quiz.currentQuestionIndex];
  const quizOver = quizSlice.quiz.quizOver

  // const quizOver = quizSlice.quiz.quizOver;

  console.log("slices", quizSlice);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    // question.correctAnswerIndex === index;
    // ? alert("You guessed right!")
    // : alert("No its wrong :(");
  };


  // const renderButton = () => {
  //   if (answers.length === question.id) {
  //     return ( 
  //       <button  onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
  //         Go to next Question
  //       </button>
  //     );
  //   } else if (quizSlice.quizOver === true) {
  //     return <button>Quiz over</button>;
  //   }
  // };
  if (!quizOver) {
      
    return (
      <div>
        <h1>Question: {question.questionText}</h1>
        <img src={question.imgUrl} alt="pic" />
        <p>{question.whichQ}</p>
        {question.options.map((answer, index) => (
          <button
            key={answer}
            className={
              answers.length < question.id
                ? "noAnswer"
                : answers.length === question.id &&
                  question.correctAnswerIndex === index
                ? "correctAnswer"
                : "wrongAnswer"
            }
            disabled={answers.length === question.id}
            onClick={(answer) => onAnswerSubmit(question.id, index)}
          >
            {answer}
          </button>
        ))}
        {/* {answers.length === question.id && answers.length < 5 && (
          <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
            Go to next Questionz
          </button>
        )}
        {answers.length === 5 && (
          <button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
            Quiz Over
          </button>
        )} */}
        <Buttons />
      </div>
    );
  } return <Summary />  
  }