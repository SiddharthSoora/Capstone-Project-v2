import React, { useState } from "react";
import Image from "next/image";


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
      <input type="file" onChange={handleFileChange} />
      <br />
      <button onClick={handleUpload}>Upload Image</button>
      {uploadResult && (
        <div>
          <h2>{uploadResult.file_path}</h2>
          <Image
            src={"/localstore/" + uploadResult.file_path}
            width={600}
            height={600}
            alt="Image Not Found"
          />
        </div>
      )}
    </div>
    
  );
}
