import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa6';

const EmptyPhotoComp = () => {
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click(); // Triggers file selection
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]; // Get the selected file
    if (selectedFile) {
      console.log("File selected:", selectedFile.name);
    }
  };
  return (
    <div
      onClick={handleFileClick}
      className="flex items-center justify-center w-24 bg-gray-300 rounded-lg h-28"
    >
      <FaPlus className="text-2xl font-extrabold text-white " />
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  );
}

export default EmptyPhotoComp