import React, { useState, useEffect } from "react";

export default function QuestionCardv2({ generatedQuestions, pairs }) {
  const [selectedOptions, setSelectedOptions] = useState(
    Array(generatedQuestions.length).fill(null)
  );
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    // Shuffle options only when the component mounts
    const options = generatedQuestions.map((question) => {
      const allOptions = [...question["distractors"], question["answerText"]];
      return shuffleArray(allOptions);
    });
    setShuffledOptions(options);
  }, [generatedQuestions]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <>
      <h1 className="text-xl font-bold ml-16 mb-4">
        Your Generated Questions!
      </h1>
      <div className="overflow-y-auto overflow-hidden max-h-screen h-[34rem]">
        {generatedQuestions.map((question, questionIndex) => {
          const options = shuffledOptions[questionIndex];

          return (
            <div
              key={questionIndex}
              className="bg-gray-50 shadow-lg rounded-xl w-3/4 mx-auto p-8 mb-4 border border-text-300"
            >
              <div>
                <div className="text-sm bg-purple-200 shadow-md text-black w-full rounded-lg p-2 mb-6">
                  <p key={questionIndex}>
                    {" "}
                    <span className="font-bold">
                      Question {questionIndex + 1}
                    </span>
                    :- {question["questionText"]}
                  </p>
                </div>
                {options &&
                  options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`text-sm ${
                        selectedOptions[questionIndex] !== null &&
                        optionIndex === selectedOptions[questionIndex]
                          ? option === question["answerText"]
                            ? "text-green-600 font-bold" // Highlight correct answer in green
                            : "text-red-600 font-bold" // Highlight incorrect answer in red
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        id={`option-${questionIndex}-${optionIndex}`}
                        name={`question-${questionIndex}`}
                        value={optionIndex}
                        checked={selectedOptions[questionIndex] === optionIndex}
                        className= "font"
                        onChange={() =>
                          handleOptionChange(questionIndex, optionIndex)
                        }
                      />
                      <label htmlFor={`option-${questionIndex}-${optionIndex}`}>
                        <span className="font-bold">
                          {pairs[optionIndex + 1]}.
                        </span>{" "}
                        {option}
                      </label>
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