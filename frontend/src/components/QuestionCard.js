
import React, { useState } from "react";

export default function QuestionCard({generatedQuestions, pairs }) {

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return(

    <>
      <h1 className="text-2xl font-bold ml-40 mb-4">Your Questions!</h1>
      <div className="overflow-y-auto overflow-hidden max-h-screen">

      {generatedQuestions.map((question, index) => {
        const options = [...question["distractors"], question["answerText"]];
        const shuffledOptions = shuffleArray(options);

        return (
          <div key={index} className="bg-slate-100 shadow-lg rounded-xl w-3/4 mx-auto p-8 mb-4">
            <div>
              <div className="text-lg bg-slate-200 shadow-md text-black w-full rounded-lg p-2 mb-6">
                <p key={index}> Question {index + 1}:- {question["questionText"]}</p>
              </div>
              {shuffledOptions.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <p>{pairs[optionIndex + 1]}. {option}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
    </>
  )
  // return (
  //   <>
  //     <div className="overflow-y-auto overflow-hidden max-h-[38rem]  ">
  //       {/* <button className="bg-red-500" onClick={handleGenerateMCQ}>
  //         Generate MCQ
  //         {value.value}
  //       </button> */}
  //       <h1 className="text-xl font-bold ml-20"> Generated Questions!</h1>
  //       {generatedQuestions.map((question, index) => (
  //         <>
  //           <div className=" bg-gray-50 shadow-lg rounded-lg w-3/4 mx-auto p-8 mb-4">
  //             <div>
  //               <div className="text-lg bg-slate-200 shadow-md text-black w-full rounded-lg p-2 mb-6">
  //                 <p key={index}>
  //                   {" "}
  //                   Question {index + 1}:- {question["questionText"]}
  //                 </p>
  //               </div>
  //               {question["distractors"].map((distractor, index) => (
  //                 <>
  //                   <div>
  //                     <p key={index}>
  //                       {pairs[index + 1]}. {distractor}
  //                     </p>
  //                   </div>
  //                 </>
  //               ))}
  //             </div>
  //           </div>
  //         </>
  //       ))}
  //     </div>
  //   </>
  // );
}
