import React, { useState } from "react";
import wedding from "./assets/wedding.jpeg";
import mainLogo from "./assets/main-logo.png";
import vertical_img from "./assets/Rectangle 78.png";
import img2 from "./assets/Rectangle 79.png";
import img3 from "./assets/Rectangle 80.png";
import img4 from "./assets/Rectangle 81.png";
import { IoMdLock, IoMdMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { api } from "./api/index";

const LoginPage = () => {
<<<<<<< HEAD
  const [email, setEmail] = useState("");
=======
  const navigate = useNavigate();
  // const { login } = useAuth();

  const [username, setUsername] = useState("");
>>>>>>> 9da07ed25c6c765beae221679f129a11f55ce504
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const response = await api.post("/auth/login", { email, password });
      console.log(response);
      navigate("/");
      // login(response.data.token);
    }
     catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  };

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
        <form
          className="px-[8%] h-96 bg-white w-[65%] rounded-3xl"
          onSubmit={handleLogin}>
          <h2 className="text-[#FF6347] text-center text-3xl font-semibold mt-6 mb-10">
            Welcome to meroBihe
          </h2>
          <div className="relative flex items-center">
            <input
              className="w-full p-2 pl-5 shadow-md focus:outline-none"
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <IoMdMail className="text-2xl text-[#FF4822] absolute right-2" />
          </div>
          <div className="relative flex items-center mt-4">
            <input
              className="w-full p-2 pl-5 shadow-md focus:outline-none"
              type="password"
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <button
              className="w-full bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
              type="submit"
            >
              Log In
            </button>
          </div>
          <p className="mt-5 text-center text-gray-600">
            New member?
            <Link to="/register" className="text-[#F24822] ml-2 underline">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
