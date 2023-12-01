import { useContext } from "react";
import { QuizStageContext } from "./ContextApi.js";

const Result = () => {
  const { setStage, score, questions, setScore } = useContext(QuizStageContext);
  const updateStage = () => {
    setStage("home");
    setScore(0);
  }
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 flex flex-col justify-center items-center shadow-2xl rounded">
      <div className=" w-32 h-32 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full flex justify-center items-center text-slate-200 font-extrabold text-3xl">
        {Math.round((score / questions.length) * 100 * 100) / 100}%
      </div>
      <h3 className="my-3 text-4xl text-teal-600">Congratulations!</h3>
      <p className="text-xl text-white">
        Your total correct answer is {score} out of {questions.length}
      </p>

      <button
        onClick={updateStage}
        className="bg-teal-500 p-3 rounded-xl mt-5 text-white font-semibold tracking-wide"
      >
        Re-attempt
      </button>
    </div>
  );
};

export default Result;
