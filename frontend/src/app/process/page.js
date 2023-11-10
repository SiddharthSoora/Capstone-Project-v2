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
      

      <main className="bg-gray-100">
        <div className="text-2xl font-bold px-10 py-6">QuizFuse</div>
        <div className="grid grid-cols-2 mt-10 max-w-[74rem] mx-auto">
          <div className="mx-4">
            <div className="text-xl font-bold">Enter Text Here!</div>
            <div className="items-start">
              <textarea
                className="w-full h-[250px] p-2 border rounded-lg text-xs"
                placeholder="Enter your text here..."
              ></textarea>
              <div className="ml-4">
                <div className="flex items-center -ml-3">
                  <div className="text-sm font-bold justify-between">Number Of Questions</div>
                  <label
                    for="count"
                    class="block mb-2 text-sm font-medium  dark:text-white"
                  >
                  </label>
                  <input
                    type="number"
                    id="count"
                    class=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-white dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter the number of questions you want to generate"
                    required
                  />
                </div>
              </div>
            </div>
            <FileUploader/>
          </div>
          <div><QuestionCard/></div>
        </div>
      </main>

      {/* <Mp /> */}
    </>
  );
}

export default Page;
