import React from "react";
import wedding from "./assets/wedding.jpeg";
import mainLogo from "./assets/main-logo.png";
import vertical_img from "./assets/Rectangle 78.png";
import img2 from "./assets/Rectangle 79.png";
import img3 from "./assets/Rectangle 80.png";
import img4 from "./assets/Rectangle 81.png";
import { IoMdLock, IoMdMail } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate= useNavigate()

  const handleSignup = () => { navigate('/register')}
  const handleLogin = () => { navigate('/dashboard') }
  
  return (
    <div
      id="login"
      className="relative w-full h-screen py-[9%] bg-center bg-cover font-outfit"
      style={{ backgroundImage: `url(${wedding})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      <div className="absolute flex items-center justify-center w-full space-x-10">
        <div className="p-5 h-96 bg-white w-[20%] rounded-3xl">
          <img className="w-16 mx-auto mb-6" src={mainLogo} alt="" />
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-5 w-full p-[5%]">
            <img className="w-20" src={vertical_img} alt="" />
            <img className="w-20 h-20" src={img2} alt="" />
            <img className="w-20 h-20" src={img4} alt="" />
            <img className="w-20 -mt-14" src={img3} alt="" />
          </div>
        </div>
        <form className="px-[8%] h-96 bg-white w-[65%] rounded-3xl">
          <h2 className="text-[#FF6347] text-center text-3xl font-semibold mt-6 mb-10">
            Welcome to meroBihe
          </h2>
          <div className="relative flex items-center">
            <input
              className="w-full p-2 pl-5 shadow-md focus:outline-none"
              type="email"
              placeholder="Email Address *"
            />
            <IoMdMail className="text-2xl text-[#FF4822] absolute right-2" />
          </div>
          <div className="relative flex items-center mt-4">
            <input
              className="w-full p-2 pl-5 shadow-md focus:outline-none"
              type="password"
              placeholder="Password *"
            />
            <IoMdLock className="text-2xl text-[#FF4822] absolute right-2" />
          </div>
          <div className="mt-5 space-x-8 text-center">
            <label className="ml-2 text-gray-600" htmlFor="remember">
              <input type="checkbox" id="remember" name="remember" />
              Remember me
            </label>
            <a className="underline text-[#F24822]" href="">
              Forgot Password?
            </a>
          </div>
          <div className="relative flex mt-10 space-x-12">
            <button className="w-full border-[1px] rounded-lg border-[#F24822] text-gray-600 font-medium hover:text-rose-950 hover:border-2 hover:border-rose-950">
              Continue with Google
            </button>
            <FcGoogle className="absolute text-lg left-2 top-2.5" />
            <button
              className="w-full bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
              type="submit"
              onClick={handleLogin}
            >
              Log In
            </button>
          </div>
          <p className="mt-5 text-center text-gray-600">
            New member?
            <a className="text-[#F24822] ml-2 underline" href="" onClick={handleSignup}>
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
