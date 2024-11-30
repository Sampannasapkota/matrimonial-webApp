import React from 'react'
import mainLogo from '../../src/assets/main-logo.png'
import wedding from "../assets/wedding.jpeg";
import { RiHeartsFill } from 'react-icons/ri';
import { FaBell, FaSmoking, FaUser, FaUserGraduate, FaUserGroup } from 'react-icons/fa6';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import MainDashboard from './MainDashboard';
import { IoMdHeart, IoMdOptions } from 'react-icons/io';
import { SlOptionsVertical } from 'react-icons/sl';
import photo from '../assets/Rectangle 100.png';
import { HiMiniXMark } from 'react-icons/hi2';
import InterestComponent from './InterestComponent';
import PersonalIdentity from './PersonalIdentity';
import hindu from '../assets/hindu.png';
import { PiBowlFoodFill } from 'react-icons/pi';
import MySection from './MySection';

const UserDashboard = () => {
  return (
    <div className="flex flex-col h-screen font-outfit">
      <nav className="absolute z-10 bg-white w-full flex items-center justify-center h-[12%]">
        <img src={mainLogo} className="w-20 pl-3" alt="logo" />
        <div className="flex items-center justify-end pr-8 gap-x-12 w-[85%]">
          <BiMessageRoundedDetail className="text-2xl text-[#F24822]" />
          <FaUserGroup className="text-2xl text-[#F24822]" />
          <RiHeartsFill className="text-2xl text-[#F24822]" />
          <FaBell className="text-2xl text-[#F24822]" />
        </div>
      </nav>
      {/* Background Picture  */}
      <div className="relative w-full h-[100%] overflow-hidden ">
        <img className="w-full " src={wedding} alt="wedding" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      {/* main Section to view  */}

      
      <div className="absolute flex justify-around bg-transparent left-44 top-32 w-[80%] h-[70%]  ">
        <div className=" bg-white w-[25%] rounded-3xl h-full">
          <MySection/>
        </div>
        <div className="relative bg-white w-[70%] rounded-3xl h-full">
          <IoMdOptions className="absolute left-[5%] top-5 text-4xl text-[#F24822]  " />
          <SlOptionsVertical className="absolute right-[5%] top-5 text-4xl text-[#F24822]  " />
          <div className='flex flex-col gap-y-4'>
            {/* profile photo and like btn and cross btn  */}
            <div className="flex justify-center items-center gap-12 w-full mt-[4%] ">
              <div className="flex justify-center items-center rounded-full w-24 h-24 shadow-lg">
                <IoMdHeart className=" text-7xl text-[#F24822]" />
              </div>
              <div id="photo">
                <img src={photo} alt="" className="w-44" />
              </div>
              <div className="flex justify-center items-center rounded-full w-24 h-24 shadow-lg">
                <HiMiniXMark className="text-gray-500 text-7xl" />
              </div>
            </div>
            {/* name  */}
            <h1 className="text-3xl text-[#F24822] font-semibold text-center">
              Sammantha Bhattarai{" "}
              <span className="text-black font-semibold text-3xl">- 22</span>
            </h1>
            <div className="flex justify-center gap-x-2">
              <InterestComponent name="Animal" />
              <InterestComponent name="Travel" />
              <InterestComponent name="Dance" />
              <InterestComponent name="Music" />
              <InterestComponent name="Singing" />
            </div>
            <div className='flex justify-center gap-x-5 text-gray-700 '>
              <PersonalIdentity icon=<FaUserGraduate /> name="Student" />
              <PersonalIdentity icon=<FaUser /> name="Never Married" />
              <PersonalIdentity icon="ॐ " name="Hindu" />
              <PersonalIdentity icon=<PiBowlFoodFill /> name="Non-Veg" />
              <PersonalIdentity icon=<FaSmoking /> name="Smoker" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard