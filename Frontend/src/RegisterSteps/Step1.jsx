import React from "react";
import wedding from "../assets/wedding.jpeg";
import mainLogo from "../assets/main-logo.png";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const navigate= useNavigate()
    const optionsMarital = [
      { value: "single", label: "Single" },
      { value: "divorced", label: "Divorced" },
      { value: "widowed", label: "Widowed" },
    ];
    const optionsResidentialStatus = [     
      { value: "nepaliCitizen", label: "Nepali Citizen" },
      { value: "prHolder", label: "PR Holder" },
      { value: "nrn", label: "NRN" },
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

    const optionsReligion = [
      { value: "hindu", label: "Hindu" },
      { value: "muslim", label: "Muslim" },
      { value: "buddhist", label: "Buddhist" },
      { value: "christain", label: "Christain" },
      { value: "jains", label: "Jains" },
      { value: "kirat", label: "Kirat" },
      { value: "others", label: "Others" },
    ];

    const optionsEducational = [
      { value: "primary-school", label: "Primary " },
      { value: "sec-school", label: "Secondary" },
      { value: "higher-school", label: "Higher Secondary" },
      { value: "bachelors-degree", label: "Bachelor's Degree" },
      { value: "masters-degree", label: "Master's Degree" },
      { value: "phd", label: "PhD" },
      { value: "diploma", label: "Diploma" },
    ];

    const optionsDiet = [
      { value: "veg", label: "Veg" },
      { value: "non-veg", label: "Non-Veg" },
      { value: "eggiterian", label: "Eggiterian" },
      { value: "vegan", label: "Vegan" },
      { value: "no-peference", label: "No Preference" },
    ];

    const optionsEmployment = [
      { value: "employed", label: "Employed" },
      { value: "self-employed", label: "Self-Employed" },
      { value: "student", label: "Student" },
      { value: "unemployed", label: "UnEmployed" },
      { value: "retired", label: "Retired" },
    ];
    const optionsIncome = [
      { value: "very-low", label: "Less than 20,000" },
      { value: "low", label: "20,000 to 40,000" },
      { value: "medium", label: "40,000 to 60,000" },
      { value: "high", label: "60,000 to 1,00,000" },
      { value: "very-high", label: "Above 1,00,000" },
      { value: "unemployed", label: "UnEmployed" },
    ];
    const optionsMotherTongue = [
      { value: "nepali", label: "Nepali" },
      { value: "newari", label: "Newari" },
      { value: "maithili", label: "Maithili" },
      { value: "bhojpuri", label: "Bhojpuri" },
      { value: "tharu", label: "Tharu" },
      { value: "tamang", label: "Tamang" },
      { value: "sherpa", label: "Sherpa" },
      { value: "gurung", label: "Gurung" },
      { value: "magar", label: "Magar" },
      { value: "rai", label: "Rai" },
      { value: "limbu", label: "Limbu" },
      { value: "others", label: "Others" },
    ];

    const optionsHeight = [
      { value: "very-short", label: "Below 5'2" },
      { value: "short", label: "5'3 to 5'6" },
      { value: "medium", label: "5'7 to 5'10" },
      { value: "tall", label: "5'11 and above" },
    ];

  return (
    <div
      className="relative flex items-center justify-center w-full h-screen bg-center bg-cover font-outfit"
      id="step1"
      style={{ backgroundImage: `url(${wedding})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      <form className="absolute px-28 h-[35em] shadow-lg bg-white w-[50em] rounded-3xl">
        <img className="absolute w-16 top-5 left-16" src={mainLogo} alt="" />
        <p className="mt-16 mb-2 text-lg font-light text-center text-gray-600">
          Setting up your profile
        </p>
        <h2 className="text-[#FF6347] font-semibold text-center text-2xl mb-8">
          Step 1 : Demographic Details
        </h2>
        <div className="flex flex-wrap justify-center gap-5 gap-x-10">
          <Select
            className="w-60"
            placeholder="Marital Status"
            options={optionsMarital}
          />
          <Select
            className="w-60"
            placeholder="Residential Status"
            options={optionsResidentialStatus}
          />
          <Select
            className="w-60"
            placeholder="Province"
            options={optionsProvince}
          />
          <Select
            className="w-60"
            placeholder="Mother Tongue"
            options={optionsMotherTongue}
          />

          <Select
            className="w-60"
            placeholder="Education Level"
            options={optionsEducational}
          />
          <Select
            className="w-60"
            placeholder="Employment Status"
            options={optionsEmployment}
          />
          <Select
            className="w-60"
            placeholder="Diet Preference"
            options={optionsDiet}
          />
          <Select
            className="w-60"
            placeholder="Height"
            options={optionsHeight}
          />
          <Select
            className="w-60"
            placeholder="Income Range"
            options={optionsIncome}
          />
          <input
            type="text"
            className="pl-2 border-2 border-gray-300 rounded-lg w-60"
            placeholder="District"
          />
        </div>
        <div className="flex justify-center mt-14">
          <button
            className="w-96 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
            type="submit"
            onClick={()=>{navigate("/register/step2")}}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
