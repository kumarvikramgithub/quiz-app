import { useContext, useState } from "react";
import { QuizStageContext } from "./ContextApi.js";
import { Icon } from "@iconify/react";

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionBg, setSelectedOptionBg] = useState();
  const [isOptionsDisable, setIsOptionsDisable] = useState(false);
  const { setStage, questions, setScore} =
    useContext(QuizStageContext);
  
  const chooseOption = (option)=>{
    setSelectedOptionBg(() => `${questions[currentQuestionIndex].answer===option?'bg-teal-100 border-teal-100':'bg-red-300 border-red-100"'}`);
    if (questions[currentQuestionIndex].answer === option){
      setScore(myScore=>myScore+1);
      questions[currentQuestionIndex].test.isCorrect = 1;
      console.log(questions[currentQuestionIndex].test.isCorrect);
    }else{
      questions[currentQuestionIndex].test.isCorrect = -1;
    }
    setIsOptionsDisable(dissabled=> !dissabled);
    setSelectedOption(option);
  }
  const nextQuestion = () =>{
    if (currentQuestionIndex === questions.length-1){
      setStage("result");
    }else{
      setCurrentQuestionIndex((index) => index + 1);
    }
    setIsOptionsDisable((dissabled) => !dissabled);
    setSelectedOption('');
  }

  const changeQuestionFromListOfQuestion = (newQuestionIndex)=>{
    setCurrentQuestionIndex(newQuestionIndex);
    setIsOptionsDisable((dissabled) => dissabled?!dissabled:dissabled);
    setSelectedOption("");
  }
  return (
    <div className="flex justify-end">
      <div className="bg-slate-300 p-5 shadow rounded flex-grow">
        <h3 className="text-2xl font-semibold tracking-wide italic">
          {`Q${currentQuestionIndex + 1}.`}{" "}
          {questions[currentQuestionIndex].question}
        </h3>
        <div className="m-5 flex flex-col items-start">
          <button
            className={`bg-slate-200 p-2 my-2  flex  items-center justify-between  w-full border-2 border-solid  ${
              !isOptionsDisable
                ? "hover:bg-slate-400 hover:text-white border-slate-400"
                : ""
            }    rounded-md ${
              selectedOption === "a"
                ? selectedOptionBg
                : questions[currentQuestionIndex].answer === "a" &&
                  isOptionsDisable
                ? "bg-teal-100 border-teal-100"
                : ""
            } `}
            onClick={() => chooseOption("a")}
            disabled={isOptionsDisable}
          >
            A. {questions[currentQuestionIndex].options.a}
            {questions[currentQuestionIndex].answer === "a" &&
            isOptionsDisable ? (
              <Icon icon="icon-park-solid:correct" color="lime" />
            ) : selectedOption === "a" ? (
              <Icon icon="octicon:x-12" color="red" />
            ) : (
              ""
            )}
          </button>
          <button
            className={`bg-slate-200 p-2 my-2  flex  items-center justify-between  w-full border-2 border-solid  ${
              !isOptionsDisable
                ? "hover:bg-slate-400 hover:text-white border-slate-400"
                : ""
            }    rounded-md ${
              selectedOption === "b"
                ? selectedOptionBg
                : questions[currentQuestionIndex].answer === "b" &&
                  isOptionsDisable
                ? "bg-teal-100 border-teal-100"
                : ""
            } `}
            onClick={() => chooseOption("b")}
            disabled={isOptionsDisable}
          >
            B. {questions[currentQuestionIndex].options.b}
            {questions[currentQuestionIndex].answer === "b" &&
            isOptionsDisable ? (
              <Icon icon="icon-park-solid:correct" color="lime" />
            ) : selectedOption === "b" ? (
              <Icon icon="octicon:x-12" color="red" />
            ) : (
              ""
            )}
          </button>
          <button
            className={`bg-slate-200 p-2 my-2  flex  items-center justify-between  w-full border-2 border-solid  ${
              !isOptionsDisable
                ? "hover:bg-slate-400 hover:text-white border-slate-400"
                : ""
            }    rounded-md ${
              selectedOption === "c"
                ? selectedOptionBg
                : questions[currentQuestionIndex].answer === "c" &&
                  isOptionsDisable
                ? "bg-teal-100 border-teal-100"
                : ""
            } `}
            onClick={() => chooseOption("c")}
            disabled={isOptionsDisable}
          >
            C. {questions[currentQuestionIndex].options.c}
            {questions[currentQuestionIndex].answer === "c" &&
            isOptionsDisable ? (
              <Icon icon="icon-park-solid:correct" color="lime" />
            ) : selectedOption === "c" ? (
              <Icon icon="octicon:x-12" color="red" />
            ) : (
              ""
            )}
          </button>
          <button
            className={`bg-slate-200 p-2 my-2  flex  items-center justify-between  w-full border-2 border-solid  ${
              !isOptionsDisable
                ? "hover:bg-slate-400 hover:text-white border-slate-400"
                : ""
            }    rounded-md ${
              selectedOption === "d"
                ? selectedOptionBg
                : questions[currentQuestionIndex].answer === "d" &&
                  isOptionsDisable
                ? "bg-teal-100 border-teal-100"
                : ""
            } `}
            onClick={() => chooseOption("d")}
            disabled={isOptionsDisable}
          >
            A. {questions[currentQuestionIndex].options.d}
            {questions[currentQuestionIndex].answer === "d" &&
            isOptionsDisable ? (
              <Icon icon="icon-park-solid:correct" color="lime" />
            ) : selectedOption === "d" ? (
              <Icon icon="octicon:x-12" color="red" />
            ) : (
              ""
            )}
          </button>
        </div>
        <div className=" flex justify-end mr-5">
          <button
            className={`${
              isOptionsDisable ? "bg-sky-500" : "bg-slate-400"
            } p-2 mt-3 text-slate-100 font-semibold rounded-lg`}
            disabled={!isOptionsDisable}
            onClick={nextQuestion}
          >
            {currentQuestionIndex === questions.length - 1
              ? "Finish Quiz"
              : "Continue"}
          </button>
        </div>
      </div>
      <div
        className="bg-slate-200 ml-5 shadow-xl p-5 rounded "
        style={{ width: "320px" }}
      >
        <div className="border-b-2 border-solid border-slate-100 pb-5 mb-5">
          {questions.map((q, questionIndex) => (
            <button
              className={`${
                questionIndex === currentQuestionIndex
                  ? "bg-sky-500"
                  : "bg-slate-300"
              } p-2 m-2 shadow-xl outline-2 rounded-md font-semibold`}
              style={{ width: "40px", height: "40px" }}
              key={questionIndex}
              onClick={() => changeQuestionFromListOfQuestion(questionIndex)}
            >
              {" "}
              {`Q${questionIndex + 1}`}{" "}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap">
          <div className="font-semibold tracking-wider">
            <button
              className="bg-slate-300 rounded p-2 m-2 font-semibold"
              style={{ width: "40px", height: "40px" }}
            >
              Q
            </button>{" "}
            Not Attempt.
          </div>
          <div className="font-semibold tracking-wider">
            <button
              className="bg-sky-500 rounded p-2 m-2 font-semibold"
              style={{ width: "40px", height: "40px" }}
            >
              Q
            </button>{" "}
            Current.
          </div>
          <div className="font-semibold tracking-wider">
            <button
              className="bg-amber-500 rounded p-2 m-2 font-semibold"
              style={{ width: "40px", height: "40px" }}
            >
              Q
            </button>{" "}
            Skipped.
          </div>
          <div className="font-semibold tracking-wider">
            <button
              className="bg-teal-100 rounded p-2 m-2 font-semibold"
              style={{ width: "40px", height: "40px" }}
            >
              Q
            </button>{" "}
            Correct.
          </div>
          <div className="font-semibold tracking-wider">
            <button
              className="bg-red-300 rounded p-2 m-2 font-semibold"
              style={{ width: "40px", height: "40px" }}
            >
              Q
            </button>{" "}
            Incorrect.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question
