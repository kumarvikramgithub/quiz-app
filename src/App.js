import { useContext } from 'react'
import {
  QuizStageContext,
} from "./COMPONENTS/ContextApi.js";
import HomePage from './COMPONENTS/HomePage.jsx'
import Question from "./COMPONENTS/Question.jsx";
import Result from "./COMPONENTS/Result.jsx";

function App() {
  const {stage} = useContext(QuizStageContext);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {stage==='home' && <HomePage />}
      {stage==='question' && <Question />}
      {stage==='result' && <Result />}
    </div>
  );
}

export default App;
