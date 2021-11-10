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
      whichQ: "1 / 5",
    },
    {
      id: 2,
      questionText:
        "When was Michael Phelps last named male World Swimmer of the Year?",
      options: ["2012", "2014", "2016", "2017"],
      correctAnswerIndex: 2,
      whichQ: "2 / 5",
    },
    {
      id: 3,
      questionText: "Pick the right Ryan? Who is Ryan Reynolds?",
      options: ["Ryan1", "Ryan2", "Ryan3", "Ryan4"],
      correctAnswerIndex: 2,
      whichQ: "3 / 5",
    },
    {
      id: 4,
      questionText: "Squidtime! Which one do you choose?",
      options: ["Umbrella", "Square", "Triangle", "Cirle"],
      correctAnswerIndex: 2,
      whichQ: "4 / 5",
    },
    {
      id: 5,
      questionText: "Which song is this?",
      options: ["One", "Two", "Three", "Four"],
      correctAnswerIndex: 2,
      whichQ: "5 / 5",
    },
  ],
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
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
  },
});
