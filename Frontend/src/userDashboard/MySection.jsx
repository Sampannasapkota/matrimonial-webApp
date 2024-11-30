import React from 'react'
import myPhoto from '../assets/Ellipse 4.png'
import PersonalIdentity from './PersonalIdentity';
import { GiBodyHeight } from 'react-icons/gi';
import { FaLocationDot, FaSmoking, FaUser, FaUserGraduate } from 'react-icons/fa6';
import { PiBowlFoodFill } from 'react-icons/pi';

const MySection = () => {
  return (
    <div>
      <img className="w-16 mx-auto mt-8" src={myPhoto} alt="" />
      <h1 className="text-center font-semibold text-xl">Hi Samrashyan!</h1>
      <div className="w-full px-10 space-y-2 mt-2">
        <div className="flex justify-between w-full">
          <div className="text-gray-800" id="username">
            @samra123
          </div>
          <div className="text-gray-500">Age - 22</div>
        </div>
        <p className="text-[#F24822] font-semibold border-b-2 border-gray-400 pb-2">
          Edit Profile
        </p>
      </div>
      <div className="flex flex-col items-start w-full text-gray-500 py-3 px-12 leading-7">
        <PersonalIdentity icon=<FaLocationDot /> name="Morang" />
        <PersonalIdentity icon=<GiBodyHeight /> name="5'7" />
        <PersonalIdentity icon=<FaUserGraduate /> name="Student" />
        <PersonalIdentity icon=<FaUser /> name="Never Married" />
        <PersonalIdentity icon="ॐ " name="Hindu" />
        <PersonalIdentity icon=<PiBowlFoodFill /> name="Non-Veg" />
        <PersonalIdentity icon=<FaSmoking /> name="Smoker" />
      </div>
          <button className="ml-20 border-[#F24822] border-2 text-[#F24822] font-extrabold rounded-lg py-1 text px-6">
            Logout
          </button>
      
    </div>
  );
}

export default MySection