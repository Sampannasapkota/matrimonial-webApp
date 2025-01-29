import React, { useState } from "react";
import wedding from "../assets/wedding.jpeg";
import mainLogo from "../assets/main-logo.png";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Step1 = () => {
  const navigate= useNavigate()
  
  const userId= localStorage.getItem("userId")

  const [formData, setFormData] = useState({
    userId: userId ? parseInt(userId):null,
    maritalStatus: "",
    residentialStatus: null,
    province: null,
    motherTongue: null,
    educationLevel: null,
    employmentStatus: null,
    dietPreference: null,
    height: null,
    incomeRange: null,
    district: "",
  });

  const handleSelectChange = (value, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value?.value || null,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log(formData);

     // Send formData to the backend
     fetch("http://localhost:3000/demographic-details", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(formData),
     })
       .then((response) => response.json())
       .then((data) => {
         console.log("Success:", data);
         navigate("/register/step2");
       })
       .catch((error) => {
         console.error("Error:", error);
       });
   };


    const optionsMarital = [
      { value: "single", label: "Single" },
      { value: "divorced", label: "Divorced" },
      { value: "widowed", label: "Widowed" },
    ];

    const optionsResidential = [
      { value: "NepaliCitizen", label: "NepaliCitizen" },
      { value: "PRHolder", label: "PRHolder" },
      { value: "NRN", label: "NRN" },
    ];

    const optionsProvince = [
      { value: "Koshi", label: "Koshi" },
      { value: "Madesh", label: "Madesh" },
      { value: "Bagmati", label: "Bagmati" },
      { value: "Gandaki", label: "Gandaki" },
      { value: "Lumbini", label: "Lumbini" },
      { value: "Karnali", label: "Karnali" },
      { value: "Sudurpaschim", label: "Sudurpaschim" },
    ];

    const optionsReligion = [
      { value: "hindu", label: "Hindu" },
      { value: "muslim", label: "Muslim" },
      { value: "buddhist", label: "Buddhist" },
      { value: "christian", label: "Christian" },
      { value: "jains", label: "Jains" },
      { value: "kirat", label: "Kirat" },
      { value: "others", label: "Others" },
    ];

    const optionsEducational = [
      { value: "PrimaryLevel", label: "Primary " },
      { value: "SecondaryLevel", label: "Secondary" },
      { value: "HigherSecondaryLevel", label: "Higher Secondary" },
      { value: "Bachelor", label: "Bachelor's Degree" },
      { value: "Masters", label: "Master's Degree" },
      { value: "PhD", label: "PhD" },
      { value: "Diploma", label: "Diploma" },
    ];

    const optionsDiet = [
      { value: "Veg", label: "Veg" },
      { value: "NonVeg", label: "Non-Veg" },
      { value: "Eggiterian", label: "Eggiterian" },
      { value: "Vegan", label: "Vegan" },
      { value: "NoPreference", label: "No Preference" },
    ];

    const optionsEmployment = [
      { value: "Employed", label: "Employed" },
      { value: "SelfEmployed", label: "Self-Employed" },
      { value: "Student", label: "Student" },
      { value: "Unemployed", label: "UnEmployed" },
      { value: "Retired", label: "Retired" },
    ];
    const optionsIncome = [
      { value: "very_low", label: "Less than 20,000" },
      { value: "low", label: "20,000 to 40,000" },
      { value: "medium", label: "40,000 to 60,000" },
      { value: "high", label: "60,000 to 1,00,000" },
      { value: "very_high", label: "Above 1,00,000" },
      { value: "unemployed", label: "UnEmployed" },
    ];
    const optionsMotherTongue = [
      { value: "Nepali", label: "Nepali" },
      { value: "Newari", label: "Newari" },
      { value: "Maithili", label: "Maithili" },
      { value: "Bhojpuri", label: "Bhojpuri" },
      { value: "Tharu", label: "Tharu" },
      { value: "Tamang", label: "Tamang" },
      { value: "Sherpa", label: "Sherpa" },
      { value: "Gurung", label: "Gurung" },
      { value: "Magar", label: "Magar" },
      { value: "Rai", label: "Rai" },
      { value: "Limbu", label: "Limbu" },
      { value: "Others", label: "Others" },
    ];

    const optionsHeight = [
      { value: 150, label: "Below 5'2" },
      { value: 160, label: "5'3 to 5'6" },
      { value: 170, label: "5'7 to 5'10" },
      { value: 180, label: "5'11 and above" },
    ];

  return (
    <div
      className="relative flex items-center justify-center w-full h-screen bg-center bg-cover font-outfit"
      id="step1"
      style={{ backgroundImage: `url(${wedding})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      <form className="absolute px-28 h-[35em] shadow-lg bg-white w-[50em] rounded-3xl"
      onSubmit={handleSubmit} >
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
            onChange={(value)=> handleSelectChange(value, "maritalStatus")}
          />
          <Select
            className="w-60"
            placeholder="Residential Status"
            options={optionsResidential}
            onChange={(value)=> handleSelectChange(value, "residentialStatus")}
          />
          <Select
            className="w-60"
            placeholder="Province"
            options={optionsProvince}
            onChange={(value)=> handleSelectChange(value, "province")}
          />
          <Select
            className="w-60"
            placeholder="Mother Tongue"
            options={optionsMotherTongue}
            onChange={(value)=> handleSelectChange(value, "motherTongue")}
          />

          <Select
            className="w-60"
            placeholder="Education Level"
            options={optionsEducational}
            onChange={(value)=> handleSelectChange(value, "educationLevel")}
          />
          <Select
            className="w-60"
            placeholder="Employment Status"
            options={optionsEmployment}
            onChange={(value)=> handleSelectChange(value, "employmentStatus")}
          />
          <Select
            className="w-60"
            placeholder="Diet Preference"
            options={optionsDiet}
            onChange={(value)=> handleSelectChange(value, "dietPreference")}
          />
          <Select
            className="w-60"
            placeholder="Height"
            options={optionsHeight}
            onChange={(value)=> handleSelectChange(value, "height")}
          />
          <Select
            className="w-60"
            placeholder="Income Range"
            options={optionsIncome}
            onChange={(value)=> handleSelectChange(value, "incomeRange")}
          />
          <input
            type="text"
            className="pl-2 border-2 border-gray-300 rounded-lg w-60"
            placeholder="District"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center mt-14">
          <button
            className="w-96 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
            type="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
