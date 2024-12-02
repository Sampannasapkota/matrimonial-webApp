import React from 'react'
import LikesComp from './popupComponent/LikesComp';

const PopupLikes = () => {
  return (
    <div className="absolute -left-36 mt-2 p-3 h-[520px] w-80 bg-white border border-gray-300 rounded">
      <h1 className="text-[#F24822] font-bold text-xl ml-1">Likes</h1>
      <ul className="flex flex-col font-semibold text-lg pl-2 mt-5 w-full gap-y-4">
        <li>
          <LikesComp />
        </li>
        <li>
          <LikesComp />
        </li>
      </ul>
    </div>
  );
}

export default PopupLikes