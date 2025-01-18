import React, { useState } from "react";
import mainLogo from "./assets/main-logo.png";
import wedding from "./assets/wedding.jpeg";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import {api} from './api/index'

const Register = () => {
  const navigate = useNavigate();
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  // Update checkbox state
  const handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked);
  };

  const handleRegister = async () => {
    e.preventDefault();
    console.log(fullname,gender, email, password);
    try {
      const response = await api.post(
        "http://localhost:3000/auth/register",
        fullname,email,dob, gender,password
      );
      console.log("User data saved:", response.data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "non-binary", label: "Non-Binary" },
  ];

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
      className="relative flex items-center justify-center w-full h-screen bg-center bg-cover font-outfit"
      id="register"
      style={{ backgroundImage: `url(${wedding})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      <form
      onSubmit={handleRegister}
       className="absolute px-28 h-[35em] shadow-lg bg-white w-[60em] rounded-3xl">
        <h2 className="text-center text-3xl text-[#FF6347] font-semibold mt-6 mb-10">
          Register Now!
        </h2>
        <img className="absolute w-16 top-5 left-16" src={mainLogo} alt="" />
        <div className="flex flex-col space-y-5">
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="email"
            placeholder="Full Name *"
            required
          />
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="email"
            placeholder="Email Address *"
            required
          />
          <div className="flex space-x-10">
            <input
              className="w-full p-2 pl-5 text-gray-400 shadow-md focus:outline-none"
              type="date"
              placeholder="Date Of Birth"
              required
            />
            <Select
              className="w-full"
              styles={customStyles}
              placeholder="Gender"
              options={options}
              required
            />
          </div>
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="email"
            placeholder="Password *" 
            required
          />
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="email"
            placeholder="Confirm Password *"
            required
          />
          <label
            className="ml-2 text-sm text-center text-gray-600"
            htmlFor="remember"
          >
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={handleTermsChange}
            />{" "}
            I've read and agree to the Terms and Conditions and Privacy Policy.
          </label>
          <button
            className={`w-96 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold ${
              isTermsChecked
                ? "hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
                : "opacity-50 cursor-not-allowed"
            }`}
            onClick={()=>{navigate("/register/otp");}}
            disabled={!isTermsChecked}
          >
            Register
          </button>
          <p className="text-center text-gray-600">
            Already a Member?
            <Link to="/login" className="text-[#F24822] ml-2 underline">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
