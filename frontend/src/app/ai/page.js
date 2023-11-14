"use client";
import { useState } from "react";
import Image from "next/image";
import FileUploader from "@/components/FileUploader";
import QuestionCard from "@/components/QuestionCard";
import Link from "next/link";
import DummyCard from "@/components/dummyCard";

function Page() {
  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const [imgGenQ, setImgGenQ] = useState([]);
  const [context, setContext] = useState("");
  const [counter, setCounter] = useState("");
  const [loading, setLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [file, setFile] = useState(null);

  const pairs = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F" };

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
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  const handleGenerateMCQ = async (text, count) => {
    const apiUrl = "http://localhost:8000/generate-mcq";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, count }),
      });

      const data = await response.json();
      const parsedData = data.map((jsonString) => JSON.parse(jsonString));
      setGeneratedQuestions(parsedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const sendDataToAPI = async () => {
    setLoading(true);
    handleGenerateMCQ(context, counter - 5);
    await handleUploadData();
    setIsGenerated(true);
  };

  const testQuestions1 = async () => {
    setContext("The human eye is one of the most valuable and sensitive sense organs. It enables us to see the wonderful world and the colours around us. On closing the eyes, we can identify objects to some extent by their smell, taste, sound they make or by touch. It is, however, impossible to identify colours while closing the eyes. Thus, of all the sense organs, the human eye is the most significant one as it enables us to see the beautiful, colourful world around us.The human eye is like a camera. Its lens system forms an image on a light-sensitive screen called the retina. Light enters the eye through a thin membrane called the cornea. It forms the transparent bulge on the front surface of the eyeball as shown in Fig. 11.1. The eyeball is approximately spherical in shape with a diameter of about 2.3 cm. Most of the refraction for the light rays entering the eye occurs at the outer surface of the cornea. The crystalline lens merely provides the finer adjustment of focal length required to focus objects at different distances on the retina. We find a structure called iris behind the cornea. Iris is a dark muscular diaphragm that controls the size of the pupil. The pupil regulates and controls the amount of light entering the eye. The eye lens forms an inverted real image of the object on the retina. The retina is a delicate membrane having enormous number of light-sensitive cells. The light-sensitive cells get activated upon illumination and generate electrical signals. These signals are sent to the brain via the optic nerves. The brain interprets these signals,and finally, processes the information so that we perceive objects as they are.")
    setCounter(10)
  }

  const testQuestions2 = async () => {
    setContext("") // Enter defualt Context
    setCounter(12)
  }

  const testQuestions3 = async () => {
    setContext("") // Enter defualt Context
    setCounter(15)
  }


  const combined = [...generatedQuestions, ...imgGenQ];

  return (
    <>
      <main className="bg-gradient-to-tl from-purple-200 via-white to-white h-screen ">
        <div className="text-2xl font-bold px-10 py-5">
          <a
            className="hover:text-purple-600 transition duration-300 ease-in-out"
            href={"/"}
          >
            Quiz<span className="text-[#EC669F]">Fuse</span>
          </a>
        </div>
        <div className="grid grid-cols-2  max-w-[74rem] mx-auto relative">
          <div className="mx-4">
            <div className="text-xl font-bold ">Enter  <button onClick={testQuestions1} className="text-[#EC669F] cursor-default">Text</button> Here!</div>
            <div className="text-xs mb-4 text-gray-400">
              {"Enter the text from which you want to generate questions."}
            </div>
            <div className="items-start">
              <textarea
                className="w-full h-[250px] p-2 border-2 rounded-lg text-xs border-purple-300"
                placeholder="Enter your text here..."
                value={context}
                onChange={(event) => setContext(event.target.value)}
              ></textarea>
              <div className="ml-4">
                <div className="flex items-center -ml-3">
                  <div className="text-sm font-bold justify-between mt-5">
                    Number Of <button onClick={testQuestions2} className="text-[#EC669F] cursor-default">Questions</button>
                  </div>
                  <label
                    htmlFor="counterc"
                    className="block mb-2 text-sm font-medium text-white dark:text-white "
                  ></label>
                  <input
                    value={counter}
                    onChange={(event) =>
                      setCounter(parseInt(event.target.value, 10))
                    }
                    type="number"
                    id="counterc"
                    className="border-2 border-purple-300 pl-4 text-sm rounded-lg focus:ring-purple-400 focus:border-purple-300 block w-full py-2.5 dark:border-purple-300 placeholder:text-xs dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
                    placeholder="Enter the number of questions you want to generate"
                    required
                  />
                </div>
              </div>
              <div className="my-4">
                <FileUploader file={file} setFile={setFile} />
                <div className="flex items-center h-3 justify-center mt-10">
                  <button
                    className="bg-black  mt-5 hover:bg-transparent border-2 border-black transition duration-500 ease-in-out hover:text-purple-500 text-white rounded-lg hover:border-purple-500 flex items-center justify-center py-2 w-full mb-[2.9rem]"
                    onClick={sendDataToAPI}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                      />
                    </svg>

                    <label className="">Upload Data</label>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            {loading && (// Loading animation
              <>
                <div className="flex items-center justify-center">
                  <div className="animate-spin">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 opacity-90 text-purple-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  <div className="px-4 font-bold text-gray-400">
                    Please Wait while we Generate your Questions......
                  </div>
                </div>
                <div className="mt-12">
                <div className="bg-gray-50 shadow-lg rounded-xl w-3/4 h-[26%] mx-auto p-8 mb-4 border border-text-300 shadow-purple-200 filter ">
                  <div className="text-xs justify-center bg-purple-200 shadow-md shadow-purple-300 text-black w-full h-10 rounded-lg p-2 mb-6 items-center flex font-bold  flex-col ">
                    <div className="h-2 w-4/5 bg-gray-400 rounded-lg"></div>
                  </div>
                  <div className="h-2 w-full bg-gray-400 rounded-lg"></div>
                  <div className="h-2 w-1/2 mt-2 bg-gray-400 rounded-lg"></div>
                  <div className="h-2 w-1/3 mt-2 bg-gray-400 rounded-lg"></div>
                </div>
                <div className="bg-gray-50 shadow-lg rounded-xl w-3/4 h-[26%] mx-auto p-8 mb-4 border border-text-300 shadow-purple-200 filter  ">
                  <div className="text-xs justify-center bg-purple-200 shadow-md shadow-purple-300 text-black w-full h-10 rounded-lg p-2 mb-6 items-center flex font-bold  flex-col ">
                    <div className="h-2 w-4/5 bg-gray-400 rounded-lg"></div>
                  </div>
                  <div className="h-2 w-full bg-gray-400 rounded-lg"></div>
                  <div className="h-2 w-1/2 mt-2 bg-gray-400 rounded-lg"></div>
                  <div className="h-2 w-1/3 mt-2 bg-gray-400 rounded-lg"></div>
                </div>
                <div className="bg-gray-50 shadow-lg rounded-xl w-3/4 h-[26%] mx-auto p-8 mb-4 border border-text-300 shadow-purple-200 filter  ">
                  <div className="text-xs justify-center bg-purple-200 shadow-md shadow-purple-300 text-black w-full h-10 rounded-lg p-2 mb-6 items-center flex font-bold  flex-col ">
                    <div className="h-2 w-4/5 bg-gray-400 rounded-lg"></div>
                  </div>
                  <div className="h-2 w-full bg-gray-400 rounded-lg"></div>
                  <div className="h-2 w-1/2 mt-2 bg-gray-400 rounded-lg"></div>
                  <div className="h-2 w-1/3 mt-2 bg-gray-400 rounded-lg"></div>
                </div>
                </div>

              </>
            )}
            {!loading && isGenerated && (
              <QuestionCard generatedQuestions={combined} pairs={pairs} />
            )}
            {!isGenerated && !loading && (
              <div className="overflow-y-auto mt-14 "> 
                <div className="bg-gray-50 shadow-lg rounded-xl w-3/4 h-[26%] mx-auto p-8 mb-4 border border-text-300 shadow-purple-200 ">
                  <div className="text-sm justify-center bg-purple-200 shadow-md shadow-purple-300 text-black w-full h-10 rounded-lg p-2 mb-6 items-center flex font-bold ">
                    Welcome to QuizFuse AI
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 ">
                      <span className="font-extrabold">-</span> Upload the text
                      and image data from which you want to generate.
                    </span>
                    <span className="text-xs text-gray-500">
                      <span className="font-extrabold">-</span> Set the number
                      of questions you want to generate and click the button to
                      generate questions
                    </span>
                  </div>
                </div>
                <DummyCard/>
                <DummyCard/>
              </div>
            )}
          </div>
        </div>
      </main>
      <div className="absolute bottom-1 right-6 text-sm text-gray-400 ">QuizFuse V1.0.1A </div>
    </>
  );
}

export default Page;
