import { createContext, useState } from 'react'

export const QuizStageContext = createContext();
export const QuizStageContextProvider = ({ children }) => {
  const [stage, setStage] = useState("home");
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "What is the capital of France?",
      options: { a: "Berlin", b: "Madrid", c: "Paris", d: "Rome" },
      answer: "c",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: { a: "Earth", b: "Mars", c: "Jupiter", d: "Venus" },
      answer: "b",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: {
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "Mark Twain",
      },
      answer: "b",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "What is the largest mammal?",
      options: {
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Hippopotamus",
      },
      answer: "b",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "Which programming language is often used for web development?",
      options: { a: "Python", b: "Java", c: "JavaScript", d: "C++" },
      answer: "c",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "What is the capital of Canada?",
      options: { a: "Toronto", b: "Vancouver", c: "Ottawa", d: "Montreal" },
      answer: "c",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "Which ocean is the largest?",
      options: {
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
      },
      answer: "d",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: {
        a: "J.K. Rowling",
        b: "Harper Lee",
        c: "George Orwell",
        d: "Ernest Hemingway",
      },
      answer: "b",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "What is the largest planet in our solar system?",
      options: { a: "Mars", b: "Jupiter", c: "Saturn", d: "Venus" },
      answer: "b",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "In which year did the Titanic sink?",
      options: { a: "1912", b: "1905", c: "1923", d: "1899" },
      answer: "a",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "What is the capital of Japan?",
      options: { a: "Beijing", b: "Seoul", c: "Tokyo", d: "Bangkok" },
      answer: "c",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: { a: "China", b: "Japan", c: "Korea", d: "Thailand" },
      answer: "b",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "What is the largest ocean on Earth?",
      options: { a: "Atlantic", b: "Indian", c: "Pacific", d: "Arctic" },
      answer: "c",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: {
        a: "Oxygen",
        b: "Carbon Dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
      },
      answer: "b",
      test: { isCorrect: 0, option: "" },
    },
    {
      question: "In what year did the Titanic sink?",
      options: { a: "1905", b: "1912", c: "1920", d: "1931" },
      answer: "b",
      test: { isCorrect: 0, option: "" },
    },
  ];

  return (
    <QuizStageContext.Provider
      value={{
        stage,
        setStage,
        questions,
        score,
        setScore
      }}
    >
      {children}
    </QuizStageContext.Provider>
  );
};