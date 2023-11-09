
import { useState } from 'react';
export default function Mainbody(){
    const [selectedInputType, setSelectedInputType] = useState('text');

  const handleInputTypeChange = (e) => {
    setSelectedInputType(e.target.value);
  };

  return (
    <div className="bg-white opacity-50 text-center rounded-lg p-4 w-1/2 mx-auto">
      <h1 className="text-black font-bold text-2xl">Generate Questions Here!</h1>
      <h2 className="text-black font-bold text-2xl">Choose Input Type</h2>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="textOption"
            name="inputType"
            value="text"
            checked={selectedInputType === 'text'}
            onChange={handleInputTypeChange}
            className="mr-2 cursor-pointer rounded-md border-gray-300"
          />
          <label for="textOption" className="cursor-pointer">Text</label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            id="pdfOption"
            name="inputType"
            value="pdf"
            checked={selectedInputType === 'pdf'}
            onChange={handleInputTypeChange}
            className="mr-2 cursor-pointer rounded-md border-gray-300"
          />
          <label for="pdfOption" className="cursor-pointer">PDF</label>
        </div>
      </div>

      {selectedInputType === 'text' && (
        <div className="mt-4">
          <textarea
            placeholder="Enter your text here..."
            className="w-full p-2 rounded-md border"
          />
        </div>
      )}
    </div>
  );
};