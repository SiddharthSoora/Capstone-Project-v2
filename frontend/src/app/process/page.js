// Import necessary dependencies
"use client";
import Mp from "@/components/Mp";
import Image from "next/image";
import { useState } from "react";
import FileUploader from "@/components/FileUploader";
import QuestionCard from "@/components/QuestionCard";

// Define your React component
function Page() {
  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const [imgGenQ, setImgGenQ] = useState([]);
  let combined = [];
  // const [combined, setCombined] = useState([]); // [generatedQuestions, imgGenQ

  const [context, setContext] = useState("");
  const [counter, setCounter] = useState(10);

  const [file, setFile] = useState(null);

  const handleUploadData = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const dataimg = await response.json();
        const parsedDataimg = dataimg.map((jsonString) =>
          JSON.parse(jsonString)
        );
        setImgGenQ(parsedDataimg);

        // Move this line here
        handleGenerateMCQ(context, counter-5);
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  const handleGenerateMCQ = async (text, count) => {
    const apiUrl = "http://localhost:8000/"; // Update the URL with your API endpoint
    // const text =
    //   "The nervous system includes the brain, spinal cord, and a complex network of nerves. This system sends messages back and forth between the brain and the body. The brain is what controls all the body's functions. The spinal cord runs from the brain down through the back"; // Replace with the actual input text
    // const count = 2; // Replace with the desired count
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

  const sendDataToAPI = async () => {
    handleGenerateMCQ(context, counter);
  };

  console.log(context);
  console.log(counter);
  // console.log(file.name)


  {combined = [...generatedQuestions, ...imgGenQ]}
  return (
    <>
      {/* <FileUploader /> */}

      <main className="bg-gradient-to-tl from-purple-200 via-white to-purple-200 h-screen">
        {/* <div className={`blob animate-blob`}></div> */}
        {/* <div className={`yellowBlob animate-blob`}></div> */}
        {/* <div className={`pinkBlob animate-blob`}></div>
        <div className={`orangeBlob animate-blob`}></div> */}
        <div className="text-2xl font-bold px-10 py-5">QuizFuse</div>
        <div className="grid grid-cols-2 mt-2 max-w-[74rem] mx-auto relative">
          <div className="mx-4">
            <div className="text-xl font-bold mb-2">Enter Text Here!</div>
            <div className="items-start">
              <textarea
                className="w-full h-[250px] p-2 border rounded-lg text-xs"
                placeholder="Enter your text here..."
                value={context}
                onChange={(event) => setContext(event.target.value)}
              ></textarea>
              <div className="ml-4">
                <div className="flex items-center -ml-3">
                  <div className="text-sm font-bold justify-between mt-5">
                    Number Of Questions
                  </div>
                  <label
                    for="counterc"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  ></label>
                  <input
                    value={counter}
                    onChange={(event) =>
                      setCounter(parseInt(event.target.value, 10))
                    }
                    type="number"
                    id="counterc"
                    className=" border border-gray-300 pl-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:border-gray-600 dark:placeholder-gray-500 placeholder:text-xs  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
                    placeholder="Enter the number of questions you want to generate"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <FileUploader file={file} setFile={setFile} />
                <div className="">
                  <button
                    className="bg-black mt-4 text-white rounded-lg flex items-center justify-center py-2 w-full mb-[2.9rem]"
                    onClick={handleUploadData}
                  >
                    Upload Data
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <QuestionCard
              generatedQuestions={generatedQuestions}
              pairs={pairs}
            />
            <QuestionCard generatedQuestions={imgGenQ} pairs={pairs} /> */}
            
            <QuestionCard generatedQuestions={combined} pairs={pairs} />
          </div>
        </div>
        
      </main>

      {/* <Mp /> */}
    </>
  );
}

export default Page;
