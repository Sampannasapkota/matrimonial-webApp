import React, { useState } from "react";
import mainLogo from "./assets/main-logo.png";
import wedding from "./assets/wedding.jpeg";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const Register = () => {
   const navigate = useNavigate();

   const handleRegister=()=>{
    navigate("/step1");
   }

   const handleLogin = () => {
     navigate("/login");
   };
  
    const [selectedOption, setSelectedOption] = useState();
    const [isOpen , setIsOpen] = useState(false)

    const options=[
      {value: 'male', label:'Male'},
      {value:'female', label:'Female'},
      {value:'non-binary', label:'Non-Binary'},
    ]

    const customStyles = {
      control: (base) => ({
        ...base,
        display: "flex",
        borderRadius: "0.375rem",
        padding: "0.25rem", 
        borderColor: "rgb(209 213 219)", 
        boxShadow: "1px 1px 1px rgb(209 213 219)", 
        "&:hover": {
          borderColor: "rgb(107 114 128)", 
        },
        "&:focus": {
          outline: "hidden",
        },
      }),
    };
    

  return (
    <div
      className="relative flex justify-center w-full h-screen items-center bg-center bg-cover font-outfit"
      id="register"
      style={{ backgroundImage: `url(${wedding})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      <form className="absolute px-28 h-[35em] shadow-lg bg-white w-[60em] rounded-3xl">
        <h2 className="text-center text-3xl text-[#FF6347] font-semibold mt-6 mb-10">
          Register Now!
        </h2>
        <img className="absolute w-16 top-5 left-16" src={mainLogo} alt="" />
        <div className="flex flex-col space-y-5">
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="email"
            placeholder="Full Name *"
          />
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="email"
            placeholder="Email Address *"
          />
          <div className="flex space-x-10">
            <input
              className="w-full p-2 pl-5 text-gray-400 shadow-md focus:outline-none"
              type="number"
              placeholder="Your Age"
              min={18}
            />
            <Select
              className="w-full"
              styles={customStyles}
              placeholder="Gender"
              options={options}
            />
          </div>
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="email"
            placeholder="Password *"
          />
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="email"
            placeholder="Confirm Password *"
          />
          <label
            className="ml-2 text-sm text-center text-gray-600"
            htmlFor="remember"
          >
            <input type="checkbox" id="terms" name="terms" />
            {" "}I've read and agree to the Terms and Conditions and Privacy Policy.
          </label>
          <button
            className="w-96 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
            onClick={handleRegister}
          >
            Register
          </button>
          <p className="text-center text-gray-600">
            Already a Member?
            <a className="text-[#F24822] ml-2 underline" href="" onClick={handleLogin}>
              Log In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
