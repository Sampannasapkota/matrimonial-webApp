import React from 'react'
import profilePic from "../../../assets/Chat photo.png";
import { IoMdHeart } from 'react-icons/io';

const LikesComp = () => {
  return (
    <div className="flex gap-x-1 ">
      <img className="w-12 h-12" src={profilePic} alt="profilepic" />
      <div className="flex items-center gap">
        <IoMdHeart className="p-0 m-0 text-[#FF3D00]" />
        <h3 className="text-[14px] w-28">
          Sampanna
        </h3>
        <div className=" flex justify-center items-center rounded-full bg-[#FF3D00] text-white text-[12px] w-24 h-8 ">
          View Profile
        </div>
      </div>
    </div>
  );
}

export default LikesComp