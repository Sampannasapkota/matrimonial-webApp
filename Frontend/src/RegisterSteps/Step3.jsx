import React, { useState } from "react";
import wedding from "../assets/wedding.jpeg";
import mainLogo from "../assets/main-logo.png";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();

  const handleStep3 = () => {
    navigate("/step4");
  };
  
const [age, setAge] = useState(18);

const handleChange = (e) => {
  setAge(e.target.value);
};

  const optionsMarital = [
    { value: "single", label: "Single" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
  ];

  const optionsReligion = [
    { value: "hindu", label: "Hindu" },
    { value: "muslim", label: "Muslim" },
    { value: "buddhist", label: "Buddhist" },
    { value: "christain", label: "Christain" },
    { value: "jains", label: "Jains" },
    { value: "others", label: "Others" },
  ];

  const optionsEmployment = [
    { value: "employed", label: "Employed" },
    { value: "self-employed", label: "Self-Employed" },
    { value: "student", label: "Student" },
    { value: "unemployed", label: "UnEmployed" },
    { value: "retired", label: "Retired" },
  ];

  const optionsDiet = [
    { value: "veg", label: "Veg" },
    { value: "non-veg", label: "Non-Veg" },
    { value: "eggiterian", label: "Eggiterian" },
    { value: "vegan", label: "Vegan" },
    { value: "no-peference", label: "No Preference" },
  ];

  const optionsSmoking = [
    { value: "non-smoker", label: "Non-Smoker" },
    { value: "smoker", label: "Smoker" },
    { value: "trying-to-quit", label: "Trying to quit" },
  ];
  const optionsDrinking = [
    { value: "non-drinker", label: "Non-Drinker" },
    { value: "drinker", label: "Drinker" },
    { value: "trying-to-quit", label: "Trying to quit" },
  ];

  return (
    <div
      className="relative flex justify-center w-full h-screen items-center bg-center bg-cover font-outfit"
      id="step1"
      style={{ backgroundImage: `url(${wedding})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      <form className="absolute px-28 h-[35em] shadow-lg bg-white w-[60em] rounded-3xl">
        <img className="absolute w-16 top-5 left-16" src={mainLogo} alt="" />
        <p className="mt-16 mb-2 text-lg font-light text-center text-gray-600">
          You’re now few steps closer..
        </p>
        <h2 className="text-[#FF6347] font-semibold text-center text-2xl mb-8">
          Step 3 : Personal Preferences for Matches
        </h2>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          <Select
            className="w-80"
            placeholder="Marital Status"
            options={optionsMarital}
          />

          <div className="flex flex-col w-80 ">
            <label
              htmlFor="age-slider"
              className="text-[17px] text-gray-600 font-medium mb-1"
            >
              Select Min Age: <span className="px-2 text-gray-700">{age}</span>
            </label>
            <input
              id="age-slider"
              type="range"
              min="18"
              max="80"
              value={age}
              onChange={handleChange}
              className="h-2 bg-gray-200 rounded-lg appearance-none w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <Select
            className="w-80"
            placeholder="Diet Preferences"
            options={optionsDiet}
          />
          <Select
            className="w-80"
            placeholder="Religion"
            options={optionsReligion}
          />
          <Select
            className="w-80"
            placeholder="Employment Status"
            options={optionsEmployment}
          />
          <Select
            className="w-80"
            placeholder="Smoking Preferences"
            options={optionsSmoking}
          />
          <Select
            className="w-80 "
            placeholder="Drinking Preferences"
            options={optionsDrinking}
          />
        </div>
        <div className="flex justify-around mt-14">
          <button
            className="w-80 mx-auto text-[#F24822] rounded-lg h-10 font-semibold border-2 border-[#F24822] hover:text-rose-950 hover:border-2 hover:border-rose-950"
            type="submit"
          >
            Back
          </button>
          <button
            className="w-80 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
            type="submit"
            onClick={handleStep3}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
