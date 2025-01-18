import React from 'react'
import wedding from "../assets/wedding.jpeg";
import mainLogo from "../assets/main-logo.png";
import Select from "react-select";
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
    const navigate = useNavigate();
    const optionsFamilyValues = [
      { value: "traditional", label: "Traditional" },
      { value: "modern", label: "Modern" },
      { value: "liberal", label: "Liberal" },
      { value: "no-peference", label: "No Preference" },
    ];
    const optionsFamilyClass = [
    { value: "middleClass", label: "Middle Class" },
    { value: "upperClass", label: "Upper Class" },
    { value: "lowerClass", label: "Lower Class" },
    { value: "no-peference", label: "No Preference" },
  ];
    const optionsFamily = [
      { value: "nuclear", label: "Nuclear" },
      { value: "joint", label: "Joint" },
      { value: "extended", label: "Extended" },
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
    const optionsEthnicity = [
      { value: "brahmin", label: "Brahmin" },
      { value: "chhetri", label: "Chhetri" },
      { value: "newar", label: "Newar" },
      { value: "gurung", label: "Gurung" },
      { value: "magar", label: "Magar" },
      { value: "rai", label: "Rai" },
      { value: "limbu", label: "Limbu" },
      { value: "tamang", label: "Tamang" },
      { value: "sherpa", label: "Sherpa" },
      { value: "thakuri", label: "Thakuri" },
      { value: "dalit", label: "Dalit" },
      { value: "madhesi", label: "Madhesi" },
      { value: "janajati", label: "Janajati" },
      { value: "others", label: "Others" },
      { value: "no-peference", label: "No Preference" },
    ];
    const optionsReligion = [
      { value: "hindu", label: "Hindu" },
      { value: "muslim", label: "Muslim" },
      { value: "buddhist", label: "Buddhist" },
      { value: "christain", label: "Christain" },
      { value: "jains", label: "Jains" },
      { value: "others", label: "Others" },
      { value: "no-peference", label: "No Preference" },
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
          Setting up your profile
        </p>
        <h2 className="text-[#FF6347] font-semibold text-center text-2xl mb-8">
          Step 2: Family Details
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          <Select
            className="w-80"
            placeholder="Religion"
            options={optionsReligion}
          />
          <Select
            className="w-80"
            placeholder="Ethnicity"
            options={optionsEthnicity}
          />
          <Select
            className="w-80"
            placeholder="Family Class"
            options={optionsFamilyClass}
          />
          <input
            type="text"
            className="w-80 border-2 border-gray-300 rounded-md pl-2 "
            placeholder="Gotra"
          />
          <Select
            className="w-80"
            placeholder="Family Type"
            options={optionsFamily}
          />
          <Select
            className="w-80"
            placeholder="Family Values"
            options={optionsFamilyValues}
          />
        </div>
        <div className="flex justify-around mt-14">
          <button
            className="w-80 mx-auto text-[#F24822] rounded-lg h-10 font-semibold border-2 border-[#F24822] hover:text-rose-950 hover:border-2 hover:border-rose-950"
            onClick={() => {
              navigate("/register/step1");
            }}
          >
            Back
          </button>
          <button
            className="w-80 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
            type="submit"
            onClick={() => {
              navigate("/register/step3");
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step2