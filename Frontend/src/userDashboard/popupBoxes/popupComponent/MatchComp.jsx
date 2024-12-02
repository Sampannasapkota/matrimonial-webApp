import React from 'react'
import profilePic from "../../../assets/Chat photo.png";
import { BiMessageRoundedDetail } from 'react-icons/bi';

const MatchComp = () => {
  return (
    <div className="flex gap-x-4 ">
      <img className="w-12" src={profilePic} alt="profilepic" />
      <div className="flex items-center gap-x-8 ">
        <h3 className="w-32">Khaire</h3>
        {/* message  */}
        <BiMessageRoundedDetail className="text-[#F24822] text-3xl" />
      </div>
    </div>
  );
}

export default MatchComp