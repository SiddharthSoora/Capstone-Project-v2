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

  return (
    <>
      <div>
        <button className="bg-red-500" onClick={handleGenerateMCQ}>
          Generate MCQ
        </button>
        <ul>
          // Render the generated questions
          {generatedQuestions.map((question, index) => (
            <>
              <li key={index}>Question : {question.questionText}</li>
              <li key={index}>Answer : {question["answerText"]}</li>
              <li key={index}>Options : {question["distractors"]}</li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
