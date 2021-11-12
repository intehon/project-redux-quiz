/* eslint-disable*/

import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { quiz } from "reducers/quiz"
import FirstPage from "./components/FirstPage"
import Summary from "./components/Summary"
import { CurrentQuestion } from "components/CurrentQuestion"

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
        <FirstPage />
        <CurrentQuestion />
        <Summary />
    </Provider>
  );
};
