import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FileUploader() {
  const [file, setFile] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);
  let file_path_new = "";

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadResult(data);
        console.log(data);
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };
  return (
    <div>
      <label className="h-10 w-1/2 flex items-center justify-center gap-1 border bg-black rounded-lg min-h-2xl p-2 text-md text-white cursor-pointer">
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
      {file && (<img src={URL.createObjectURL(file)} />)}
      
      <br />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}
