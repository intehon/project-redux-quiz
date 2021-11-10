import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "reducers/quiz";

const FirstPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="firstPageBox">
      <h1>Welocome to our fabulous Quizzz!</h1>
      <h3>What do you know about popular culture?</h3>
      <button
        className="restart-btn"
        onClick={() => dispatch(quiz.actions.restart())}
      >
        Lets play!
      </button>
    </div>
  );
};

export default FirstPage;
