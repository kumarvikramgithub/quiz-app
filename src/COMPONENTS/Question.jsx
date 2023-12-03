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
  const [test, setTest] = useState(questions);
  
  const chooseOption = (option)=>{
    if (
      (test[currentQuestionIndex].answer === option
    )) {
      setSelectedOptionBg(() => 'bg-teal-200 border-teal-100');
      setScore((myScore) => myScore + 1);
      questionBgInPannel(1, option);
    } else {
      setSelectedOptionBg(() => 'bg-red-100 border-red-100');
      questionBgInPannel(-1, option);
    }
    setIsOptionsDisable(dissabled=> !dissabled);
    setSelectedOption(option);
  }
  const nextQuestion = () =>{
    if (currentQuestionIndex === test.length-1){
      setStage("result");
    }else{
      isSolvedQuestion(currentQuestionIndex+1);
      setCurrentQuestionIndex((index) => index + 1);
    }
  }

  const questionBgInPannel = (value, option='') => {
    if (
      test[currentQuestionIndex].test.isCorrect === 0 ||
      test[currentQuestionIndex].test.isCorrect === 2
    ) {
      test[currentQuestionIndex].test.isCorrect = value;
    }
    test[currentQuestionIndex].test.option = option;
    setTest((test) => test);
  };

  const isSolvedQuestion = (newQuestionIndex)=>{
    if (
      test[newQuestionIndex].test.isCorrect === 1 ||
      test[newQuestionIndex].test.isCorrect === -1
    ) {
      setIsOptionsDisable(true);
      setSelectedOption(test[newQuestionIndex].test.option);
    } else {
      setIsOptionsDisable((dissabled) => (dissabled ? !dissabled : dissabled));
      setSelectedOption("");
    }
  };

  const changeQuestionFromListOfQuestion = (newQuestionIndex)=>{
    questionBgInPannel(2)
    setCurrentQuestionIndex(newQuestionIndex);
    isSolvedQuestion(newQuestionIndex);
  }
  return (
    <div className="flex justify-end">
      <div className="bg-slate-300 p-5 shadow rounded flex-grow">
        <h3 className="text-2xl font-semibold tracking-wide italic">
          {`Q${currentQuestionIndex + 1}.`}{" "}
          {test[currentQuestionIndex].question}
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
                : test[currentQuestionIndex].answer === "a" && isOptionsDisable
                ? "bg-teal-200 border-teal-100"
                : ""
            } `}
            onClick={() => chooseOption("a")}
            disabled={isOptionsDisable}
          >
            A. {test[currentQuestionIndex].options.a}
            {test[currentQuestionIndex].answer === "a" && isOptionsDisable ? (
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
                : test[currentQuestionIndex].answer === "b" && isOptionsDisable
                ? "bg-teal-200 border-teal-100"
                : ""
            } `}
            onClick={() => chooseOption("b")}
            disabled={isOptionsDisable}
          >
            B. {test[currentQuestionIndex].options.b}
            {test[currentQuestionIndex].answer === "b" && isOptionsDisable ? (
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
                : test[currentQuestionIndex].answer === "c" && isOptionsDisable
                ? "bg-teal-200 border-teal-100"
                : ""
            } `}
            onClick={() => chooseOption("c")}
            disabled={isOptionsDisable}
          >
            C. {test[currentQuestionIndex].options.c}
            {test[currentQuestionIndex].answer === "c" && isOptionsDisable ? (
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
                : test[currentQuestionIndex].answer === "d" && isOptionsDisable
                ? "bg-teal-200 border-teal-100"
                : ""
            } `}
            onClick={() => chooseOption("d")}
            disabled={isOptionsDisable}
          >
            A. {test[currentQuestionIndex].options.d}
            {test[currentQuestionIndex].answer === "d" && isOptionsDisable ? (
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
              isOptionsDisable ? "bg-green-600" : "bg-slate-400"
            } p-2 mt-3 text-slate-100 font-semibold rounded-lg`}
            disabled={!isOptionsDisable}
            onClick={nextQuestion}
          >
            {currentQuestionIndex === test.length - 1
              ? "Finish Quiz"
              : "Continue"}
          </button>
        </div>
      </div>
      <div
        className="bg-slate-200 ml-5 shadow-xl p-5 rounded"
        style={{ width: "320px" }}
      >
        <div className="border-b-2 border-solid border-slate-100 pb-5 mb-5">
          {test.map((q, questionIndex) => (
            <button
              className={`${
                test[questionIndex].test.isCorrect === 1
                  ? "bg-teal-200"
                  : test[questionIndex].test.isCorrect === -1
                  ? "bg-red-300"
                  : test[questionIndex].test.isCorrect === 2
                  ? "bg-amber-500"
                  : questionIndex === currentQuestionIndex
                  ? "bg-green-600"
                  : "bg-slate-300"
              } p-2 m-2 shadow-xl outline-2 rounded-md font-semibold`}
              style={{ width: "40px", height: "40px" }}
              key={questionIndex}
              onClick={() => changeQuestionFromListOfQuestion(questionIndex)}
              disabled={
                test[questionIndex].test.isCorrect === 1 ||
                test[questionIndex].test.isCorrect === -1
              }
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
              className="bg-green-600 rounded p-2 m-2 font-semibold"
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
              className="bg-teal-200 rounded p-2 m-2 font-semibold"
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
