/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      imgUrl:
        "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/Running/How+Far/Carousel.jpg",
      questionText: "Who set the Olympic record for the 100m dash in 2012?",
      options: ["Usain Bolt", "Justin Gatlin", "Tyson Gay", "Asafa Powell"],
      correctAnswerIndex: 0,
      answerText: "yes, he is fast!",
      whichQ: "1/5",
    },
    {
      id: 2,
      imgUrl:
        "https://www.allabouttrh.com/wp-content/uploads/2020/12/EjMr4zfWsAAI1CP.jpg",
      questionText: "Which Housewives franchise was the first to air in 2006?",
      options: ["New York", "Atlanta", "Orange County", "Beverly Hills"],
      correctAnswerIndex: 2,
      whichQ: "2/5",
    },
    {
      id: 3,
      questionText: "Pick the right Ryan? Who is Ryan Reynolds?",
      options: ["Ryan1", "Ryan2", "Ryan3", "Ryan4"],
      correctAnswerIndex: 3,
      whichQ: "3/5",
    },
    {
      id: 4,
      imgUrl:
        "https://i.etsystatic.com/21146347/r/il/5310da/3424626039/il_340x270.3424626039_kq8p.jpg",
      questionText: "Squidtime! Which one do you choose?",
      options: ["Umbrella", "Square", "Triangle", "Cirle"],
      correctAnswerIndex: 2,
      whichQ: "4/5",
    },
    {
      id: 5,
      imgUrl: "https://pbs.twimg.com/media/DVq4s6EW0AA4Q3a.jpg",
      questionText: "Which bear is this?",
      options: ["Care bear", "Winnie the Pooh", "Björne", "Paddington"],
      correctAnswerIndex: 0,
      whichQ: "5/5",
    },
  ],
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  quizStart: true,
};

// Change these to your own questions!

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        throw new Error(
          "Could not find question! Check to make sure you are passing the question id correctly."
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
      });
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState;
    },

    /**
     * Use this action to progress from the starting-page of the quiz (action added by team elephants group 1, not part of the starting code)
     */
    start: (state) => {
      state.quizStart = false
    }
  },
});
