import React, { useState } from "react";

export default function QuestionCard({ generatedQuestions, pairs }) {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <>
      <h1 className="text-xl font-bold ml-16 mb-6">
        Your Generated<span className="text-[#EC669F]"> Questions!</span> 
      </h1>
      <div className="overflow-y-auto overflow-hidden max-h-screen h-[35rem]">
        {generatedQuestions.map((question, index) => {
          const options = [...question["distractors"], question["answerText"]];
          const shuffledOptions = shuffleArray(options);

          return (
            <div
              key={index}
              className="bg-gray-50 shadow-lg rounded-xl w-3/4 mx-auto p-8 mb-4 border border-text-300 shadow-purple-200 "
            >
              <div>
                <div className="text-sm bg-purple-200 shadow-md shadow-purple-300 text-black w-full rounded-lg p-2 mb-6">
                  <p key={index}>
                    {" "}
                    <span className="font-bold">
                      Question {index + 1}
                    </span>:- {question["questionText"]}
                  </p>
                </div>
                {shuffledOptions.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`text-sm ${
                      option === question["answerText"]
                        ? "text-green-600 font-bold" // Highlight correct answer in green
                        : ""
                    }`}
                  >
                    <span className="font-bold">{pairs[optionIndex + 1]}.</span>{" "}
                    {option}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
