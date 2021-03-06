import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "reducers/quiz";

const FirstPage = () => {
  const dispatch = useDispatch()
  const quizStart = useSelector((state) => state.quiz.quizStart)

  if (quizStart) {
    return (
      <div className="firstPageBox">
        <h1>Welcome to our fabulous Quizzz!</h1>
        <h3>What do you know about popular culture?</h3>
        <img src="https://m.media-amazon.com/images/I/91uBT9850xL._AC_SX425_.jpg" alt="poppic" />
        <button
          className="restart-btn"
          onClick={() => dispatch(quiz.actions.start())}
        >
          Lets play!
        </button>
      </div>
    );
  } else return null
};

export default FirstPage
