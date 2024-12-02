import React from 'react'
import MatchComp from './popupComponent/MatchComp';

const PopupMatchbox = () => {
  return (
    <div className="absolute -left-32 mt-2 p-4 h-[520px] w-80 bg-white border border-gray-300 rounded">
      <h1 className="text-[#F24822] font-bold text-xl ml-1">Matches</h1>
      <input
        type="search"
        placeholder="Search matches"
        className="px-4 h-9 mt-2 w-full rounded-full border-2 border-gray-500"
      />
      <ul className="flex flex-col font-semibold text-lg pl-4 mt-5 w-full gap-y-4">
        <li>
          <MatchComp />
        </li>
        <li>
          <MatchComp />
        </li>
      </ul>
    </div>
  );
}

export default PopupMatchbox