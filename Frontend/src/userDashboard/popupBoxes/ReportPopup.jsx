import React, { useState } from 'react'
import { MdBlock, MdReport } from 'react-icons/md';
import { SlOptionsVertical } from 'react-icons/sl';

const ReportPopup = () => {
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const toggleBox = () => {
      setIsBoxVisible(!isBoxVisible);
    };
  return (
    <div className="relative">
      <SlOptionsVertical
        onClick={(e) => {
          e.preventDefault(); // Prevent default link behavior
          toggleBox();
        }}
        className="absolute cursor-pointer right-[5%] top-5 text-4xl text-[#F24822]  "
      />

      {/* Pop-up box */}
      {isBoxVisible && (
        <div className="absolute text-gray-600 left-[33rem] w-40 mt-2 bg-white rounded shadow-lg">
          <div className="flex justify-center items-center gap-x-3 p-3 hover:bg-gray-100 w-full">
            <MdReport />
            <span>Report Profile</span>
          </div>
          <div className="flex justify-center items-center gap-x-3 p-3 hover:bg-gray-100 w-full">
            <MdBlock className='-ml-2' />
            <span>Block Profile</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReportPopup