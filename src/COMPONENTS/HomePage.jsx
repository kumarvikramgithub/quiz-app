import { useContext } from "react";
import { QuizStageContext } from "./ContextApi.js";
const HomePage = () => {
  const { setStage } = useContext(QuizStageContext);
  const updateStage = ()=> setStage('question');
  return (
    <div>
      <h3 className="text-3xl text-sky-500 font-extrabold tracking-wider">To Proof Your skill</h3>
      <p className="text-lg font-semibold tracking-wide py-5">Choose one from categories below & see how many questions you can answer correctly out of test module.</p>
      <button onClick={updateStage} className="bg-slate-700 p-3 rounded text-slate-100 font-semibold tracking-wider uppercase shadow-lg">Start Quiz</button>
    </div>
  );
}

export default HomePage
