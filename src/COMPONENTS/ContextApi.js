import { createContext, useState } from 'react'

export const QuizStageContext = createContext();
export const QuizStageContextProvider = ({ children }) => {
  const [stage, setStage] = useState("home");
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "Hey, how are you?",
      options: {
        a: "Fine",
        b: "MindBloing",
        c: "Bakwas",
        d: "Mat pucho na",
      },
      answer: "a",
    },
    {
      question: "What is you name?",
      options: {
        a: "Rahul",
        b: "Suresh",
        c: "Mina",
        d: "None of these",
      },
      answer: "c",
    },
    {
      question: "2+5 is ....",
      options: {
        a: 17,
        b: 10,
        c: 6,
        d: 7,
      },
      answer: "d",
    },
  ];
  return (
    <QuizStageContext.Provider
      value={{ stage, setStage, questions, score, setScore }}
    >
      {children}
    </QuizStageContext.Provider>
  );
};