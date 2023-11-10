import React, { useState } from "react";

export default function QuestionCard() {
  const [generatedQuestions, setGeneratedQuestions] = useState([]);

  const handleGenerateMCQ = async () => {
    const apiUrl = "http://localhost:8000/"; // Update the URL with your API endpoint
    const text =
      "The nervous system includes the brain, spinal cord, and a complex network of nerves. This system sends messages back and forth between the brain and the body. The brain is what controls all the body's functions. The spinal cord runs from the brain down through the back"; // Replace with the actual input text
    const count = 2; // Replace with the desired count

    try {
      // Make a POST request to the Flask API
      const response = await fetch(apiUrl + "generate-mcq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, count }),
      });

      // Parse the JSON response
      const data = await response.json();

      const parsedData = data.map((jsonString) => JSON.parse(jsonString));

      // Update the state with the generated questions
      setGeneratedQuestions(parsedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const pairs = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E" };
  return (
    <>
      <div>
        <button className="bg-red-500" onClick={handleGenerateMCQ}>
          Generate MCQ
        </button>
        // Render the generated questions
        <h1 className="text-2xl font-bold ml-40 mb-4 mt-20">Questions</h1>
        {generatedQuestions.map((question, index) => (
          <>
            <div className=" bg-gray-50 shadow-lg rounded-xl w-3/4 mx-auto p-8 mb-4">
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
