import React, { useState } from "react";
import Image from "next/image";

export default function FileUploader({ file, setFile }) {
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4 h-40 ">
        <div className="">
          <label
            className="h-full 
        w-full flex items-center 
        justify-center gap-1 border-2
        border-black
         bg-black hover:bg-transparent shadow-lg  hover:text-purple-600 hover:border-purple-400 transition ease-in-out duration-500 rounded-lg min-h-2xl
          p-2 text-md text-white cursor-pointer "
          >
            <input type="file" className="hidden" onChange={handleFileChange} />
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            Select Image
          </label>
        </div>
        <div className="h-40">
          {file && (
            <img
              className="rounded-lg w-full h-full object-cover border border-purple-200"
              src={URL.createObjectURL(file)}
            />
          )}
          {!file && (
            <div className=" flex items-center justify-center rounded-lg w-full h-full object-cover border-2 border-purple-300 text-gray-400" >Upload a Image!</div>
          )}
        </div>
      </div>
    </>
  );
}
