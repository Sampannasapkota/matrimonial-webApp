import React, { useState } from "react";
import mainLogo from "../assets/main-logo.png";
import wedding from "../assets/wedding.jpeg";
import { RiHeartsFill } from "react-icons/ri";
import json from "../data.json";
import {
  FaBell,
  FaSmoking,
  FaUser,
  FaUserGraduate,
  FaUserGroup,
} from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";

import { IoMdHeart, IoMdOptions } from "react-icons/io";
import photo from "../assets/Rectangle 100.png";
import { HiMiniXMark } from "react-icons/hi2";
import InterestComponent from "./InterestComponent";
import PersonalIdentity from "./PersonalIdentity";
import { PiBowlFoodFill } from "react-icons/pi";
import MySection from "./MySection";
import PopupChatbox from "../userDashboard/popupBoxes/PopupChatbox";
import PopupMatchbox from "./popupBoxes/popupMatchbox";
import PopupLikes from "./popupBoxes/PopupLikes";
import Notification from "./popupBoxes/Notification";
import ReportPopup from "./popupBoxes/ReportPopup";

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null); // Tracks the active component

  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const user = json.find((user) => user.id === 1);

  const toggleBox = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  const handleClick = (component) => {
    setActiveComponent((prev) => (prev === component ? null : component)); // Toggle the same component or activate a new one
  };

  return (
    <div className="flex flex-col h-screen font-outfit" id="dashboard">
      <nav className="z-10 bg-white w-full flex items-center justify-center h-[12%]">
        <img src={mainLogo} className="w-20 pl-3" alt="logo" />

        <div className="flex items-center justify-end pr-8 gap-x-12 w-[85%]">
          {/* BiMessageRoundedDetail */}
          <div className="relative">
            <BiMessageRoundedDetail
              className={`text-2xl ${
                activeComponent === "message" ? "text-black" : "text-[#F24822]"
              }`}
              onClick={() => handleClick("message")}
            />
            {activeComponent === "message" && <PopupChatbox />}
          </div>

          {/* FaUserGroup */}
          <div className="relative">
            <FaUserGroup
              className={`text-2xl ${
                activeComponent === "group" ? "text-black" : "text-[#F24822]"
              }`}
              onClick={() => handleClick("group")}
            />
            {activeComponent === "group" && <PopupMatchbox />}
          </div>

          {/* RiHeartsFill */}
          <div className="relative">
            <RiHeartsFill
              className={`text-2xl ${
                activeComponent === "hearts" ? "text-black" : "text-[#F24822]"
              }`}
              onClick={() => handleClick("hearts")}
            />
            {activeComponent === "hearts" && <PopupLikes />}
          </div>

          {/* FaBell */}
          <div className="relative">
            <FaBell
              className={`text-2xl ${
                activeComponent === "bell" ? "text-black" : "text-[#F24822]"
              }`}
              onClick={() => handleClick("bell")}
            />
            {activeComponent === "bell" && <Notification />}
          </div>
        </div>
      </nav>
      {/* Background Picture  */}
      <div className="relative w-full h-[100%] overflow-hidden ">
        <img className="w-full " src={wedding} alt="wedding" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      {/* main Section to view  */}

      <div className="absolute flex justify-around items-center bg-transparent left-44 top-[16%] w-[80%] h-[32em]  ">
        <div className=" bg-white w-[25%] rounded-3xl h-full">
          <MySection />
        </div>
        {/* Dashboard with picture  */}

        <div className="relative bg-white w-[50em] rounded-3xl h-full">
          <IoMdOptions className="absolute left-[5%] top-5 text-4xl text-[#F24822]  " />
          <ReportPopup />
          {/* <SlOptionsVertical className="absolute right-[5%] top-5 text-4xl text-[#F24822]  " /> */}
          <div className="flex flex-col gap-y-4">
            {/* profile photo and like btn and cross btn  */}
            <div className="flex items-center justify-center w-full gap-12 mt-20 ">
              <div className="flex items-center justify-center w-24 h-24 rounded-full shadow-xl">
                <HiMiniXMark className="text-gray-500 text-7xl" />
              </div>
              <div id="photo">
                <img src={photo} alt="" className="w-44" />
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-full shadow-xl">
                <IoMdHeart className=" text-7xl text-[#F24822]" />
              </div>
            </div>
            {/* name  */}
            <h1 className="text-3xl text-[#F24822] font-semibold text-center">
              {user.name}{" "}
              <span className="text-3xl font-semibold text-black">
                {"- "}
                {user.age}
              </span>
            </h1>
            <div className="flex justify-center gap-x-2">
              <InterestComponent name={user.interest[0]} />
              <InterestComponent name={user.interest[1]} />
              <InterestComponent name={user.interest[2]} />
              <InterestComponent name={user.interest[3]} />
              <InterestComponent name={user.interest[4]} />
            </div>
            <div className="flex justify-center text-gray-700 gap-x-6 ">
              <PersonalIdentity icon=<FaUserGraduate /> name="Student" />
              <PersonalIdentity icon=<FaUser /> name="Single" />
              <PersonalIdentity icon="ॐ " name="Hindu" />
              <PersonalIdentity icon=<PiBowlFoodFill /> name="Non-Veg" />
              <PersonalIdentity icon=<FaSmoking /> name="Smoker" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
