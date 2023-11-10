// Import necessary dependencies
"use client";
import Mp from "@/components/Mp";
import Image from "next/image";
import { useState } from "react";
import FileUploader from "@/components/FileUploader";
import QuestionCard from "@/components/QuestionCard";

// Define your React component
function Page() {

  return (
    <>
      {/* <FileUploader /> */}
      {/* <div>
        <div className="bg-white text-center rounded-lg p-4 w-1/4 mx-auto">
          <h1 className="text-black font-bold text-2xl">QuizFuse.ai</h1>{" "}
        </div>
        <div class="flex flex-col justify-start items-start min-h-screen bg-gray-200">
          <div class="flex flex-col w-full ml-40 mt-10">
            <h3 className="text-black font-bold mt-20 mb-2">Text Input Here</h3>
            <textarea
              placeholder="Enter your text here..."
              class="p-2 rounded-md border mt-3 w-1/3"
            />
            <h3 className="text-black font-bold mt-8">Upload Images Here</h3>
            <input type="file" name="Image Upload" multiple hidden />
            <button
              type="button"
              id="upload-button"
              class="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-md w-40 mt-4"
            >
              Upload Image
            </button>
            <div class="mt-10">
              <button class="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-md ml-10 mt-10">
                Generate Questions
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <QuestionCard/>
      
      {/* <Mp /> */}
    </>
  );
}

export default Page;
