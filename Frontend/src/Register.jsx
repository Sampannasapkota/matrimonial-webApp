import React, { useState } from "react";
import mainLogo from "./assets/main-logo.png";
import wedding from "./assets/wedding.jpeg";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import {api} from './api/index'
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender,setGender]= useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //For otp verification
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // Update checkbox state
  const handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("{fullname:",fullName,"dob:",dob,"email:", email,"gender:",gender,"password", password,"}");

    // try {
    //   const response = await api.post("/auth/register", {
    //     fullname,
    //     email,
    //     dob,
    //     gender,
    //     password,


    //   });
    //   console.log(response);
    //   navigate("/register/otp");
    //   localStorage.setItem("token", response.data.token);
    // } catch (error) {
    //   console.log(error);
    //   setError(error.response.data.message);
    // }

    try {
      const response = await axios.post('http://localhost:3000/send-otp', { email });
      setOtpSent(true);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to send OTP');
    }
  };
  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/verify-otp', { email, otp });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to verify OTP');
    }
  };
  navigate("/register/otp")
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
        className="absolute px-28 h-[35em] shadow-lg bg-white w-[50em] rounded-3xl"
      >
        <h2 className="text-center text-3xl text-[#FF6347] font-semibold mt-6 mb-10">
          Register Now!
        </h2>
        <img className="absolute w-16 top-5 left-16" src={mainLogo} alt="" />
        <div className="flex flex-col space-y-5">
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="text"
            placeholder="Full Name *"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            required
          />
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <div className="flex space-x-10">
            <input
              className="w-full p-2 pl-5 text-gray-400 shadow-md focus:outline-none"
              type="date"
              placeholder="Date Of Birth"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
              required
            />
            <Select
              className="w-full"
              styles={customStyles}
              placeholder="Gender"
              value={gender}
              onChange={(selectedOption) => {
                setGender(selectedOption);
              }}
              options={options}
              required
            /> 
          </div>
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="text"
            placeholder="Password *"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <input
            className="w-full p-2 pl-5 shadow-md focus:outline-none"
            type="text"
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
          type="submit"
            className={`w-96 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold ${
              isTermsChecked
                ? "hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
                : "opacity-50 cursor-not-allowed"
            }`}
            
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
  )}


export default Register;
