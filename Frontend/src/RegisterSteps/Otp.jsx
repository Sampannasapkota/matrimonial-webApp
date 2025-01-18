import React from "react";
import wedding from "../assets/wedding.jpeg";
import mainLogo from "../assets/main-logo.png";
import { BsExclamationTriangleFill } from "react-icons/bs";
import EmptyPhotoComp from "./EmptyPhotoComp";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  return (
    <div
      className="relative flex justify-center w-full h-screen items-center bg-center bg-cover font-outfit"
      id="otp"
      style={{ backgroundImage: `url(${wedding})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      <form className="absolute px-28 h-[35em] shadow-lg bg-white w-[60em] rounded-3xl">
        <img className="absolute w-16 top-5 left-16" src={mainLogo} alt="" />
        <h2 className="text-[#FF6347] font-semibold text-center text-2xl mt-32 ">
          OTP Code Verification
        </h2>
        <p className="flex items-center justify-center text-sm text-gray-500 gap-x-1">
          Enter the OTP code sent to your email
        </p>
        {/* Otp goes here*/}
        <div className="w-full flex justify-center mt-10 ">
          <input
            type="text"
            className="border-2 border-gray-500 pl-32 rounded-lg h-10 w-80"
          />
        </div>
        <div className="flex flex-col justify-around mt-10">
          <button
            className="w-80 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
            type="submit"
          >
            Verify OTP
          </button>
          <p className="text-center text-gray-600 mt-2">
            Didn't receive code?{" "}
            <span className="underline text-[#F24822] cursor-pointer">Resend code</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Otp;
