import React, { useState } from "react";

export default function QuestionCard({ generatedQuestions, pairs }) {
  return (
    <>
      <div className="overflow-y-auto overflow-hidden max-h-screen  ">
        {/* <button className="bg-red-500" onClick={handleGenerateMCQ}>
          Generate MCQ
          {value.value}
        </button> */}
        <h1 className="text-xl font-bold ml-20"> Generated Questions!</h1>
        {generatedQuestions.map((question, index) => (
          <>
            <div className=" bg-gray-50 shadow-lg rounded-lg w-3/4 mx-auto p-8 mb-4">
              <div>
                <div className="text-lg bg-slate-200 shadow-md text-black w-full rounded-lg p-2 mb-6">
                  <p key={index}>
                    {" "}
                    Question {index + 1}:- {question["questionText"]}
                  </p>
                </div>
                {question["distractors"].map((distractor, index) => (
                  <>
                    <div>
                      <p key={index}>
                        {pairs[index + 1]}. {distractor}
                      </p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
