import React from "react";
import wedding from "../assets/wedding.jpeg";
import mainLogo from "../assets/main-logo.png";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const navigate = useNavigate();

  const handleStep1 = () => {
    navigate("/step2");
  };
  
    const optionsMarital = [
      { value: "single", label: "Single" },
      { value: "divorced", label: "Divorced" },
      { value: "widowed", label: "Widowed" },
    ];

    const optionsProvince = [
      { value: "koshi", label: "Koshi" },
      { value: "madesh", label: "Madesh" },
      { value: "bagmati", label: "Bagmati" },
      { value: "gandaki", label: "Gandaki" },
      { value: "lumbini", label: "Lumbini" },
      { value: "karnali", label: "Karnali" },
      { value: "sudurpaschim", label: "Sudurpaschim" },
    ];

    const optionsDistrict = [
      { value: "morang", label: "Morang" },
      { value: "sunsari", label: "Sunsari" },
      { value: "jhapa", label: "Jhapa" },
    ];

    const optionsReligion = [
      { value: "hindu", label: "Hindu" },
      { value: "muslim", label: "Muslim" },
      { value: "buddhist", label: "Buddhist" },
      { value: "christain", label: "Christain" },
      { value: "jains", label: "Jains" },
      { value: "others", label: "Others" },
    ];

    const optionsEducational = [
      { value: "primary-school", label: "Primary School" },
      { value: "sec-school", label: "Sec. School" },
      { value: "bachelors-degree", label: "Bachelor's Degree" },
      { value: "masters-degree", label: "Master's Degree" },
      { value: "phd", label: "PhD" },
    ];

    const optionsEmployment = [
      { value: "employed", label: "Employed" },
      { value: "self-employed", label: "Self-Employed" },
      { value: "student", label: "Student" },
      { value: "unemployed", label: "UnEmployed" },
      { value: "retired", label: "Retired" },
    ];

  return (
    <div
      className="relative flex justify-center w-full h-screen py-[5%] bg-center bg-cover font-outfit"
      id="step1"
      style={{ backgroundImage: `url(${wedding})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      <form className="absolute px-[8%] h-[78%] shadow-lg bg-white w-[65%] rounded-3xl">
        <img className="absolute w-16 top-5 left-16" src={mainLogo} alt="" />
        <p className="mt-16 mb-2 text-lg font-light text-center text-gray-600">
          Setting up your profile
        </p>
        <h2 className="text-[#FF6347] font-semibold text-center text-2xl mb-8">
          Step 1 : Demographic Details
        </h2>
        <div className="flex flex-wrap gap-10">
          <Select
            className="w-80"
            placeholder="Marital Status"
            options={optionsMarital}
          />
          <Select
            className="w-80"
            placeholder="Province"
            options={optionsProvince}
          />
          <Select
            className="w-80"
            placeholder="District"
            options={optionsDistrict}
          />
          <Select
            className="w-80"
            placeholder="Religion"
            options={optionsReligion}
          />
          <Select
            className="w-80"
            placeholder="Education Level"
            options={optionsEducational}
          />
          <Select
            className="w-80"
            placeholder="Employment Status"
            options={optionsEmployment}
          />
        </div>
        <div className="flex justify-center mt-14">
            <button
              className="w-96 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
              type="submit"
              onClick={handleStep1}
            >
              Next
            </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
