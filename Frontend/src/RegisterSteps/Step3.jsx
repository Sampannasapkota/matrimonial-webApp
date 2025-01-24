import React, { useState } from "react";
import wedding from "../assets/wedding.jpeg";
import mainLogo from "../assets/main-logo.png";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
const [age, setAge] = useState(18);
const navigate=useNavigate()

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
    { value: "no-peference", label: "No Preference" },
  ];

  const optionsEmployment = [
    { value: "employed", label: "Employed" },
    { value: "self-employed", label: "Self-Employed" },
    { value: "student", label: "Student" },
    { value: "unemployed", label: "UnEmployed" },
    { value: "retired", label: "Retired" },
    { value: "no-peference", label: "No Preference" },
  ];

  const optionsDiet = [
    { value: "veg", label: "Veg" },
    { value: "non-veg", label: "Non-Veg" },
    { value: "eggiterian", label: "Eggiterian" },
    { value: "vegan", label: "Vegan" },
    { value: "no-peference", label: "No Preference" },
  ];
  const optionsAge = [
    { value: "genz", label: "18-28" },
    { value: "millenial", label: "29-44" },
    { value: "genx", label: "25-60" },
    { value: "babyboomer", label: "60 above" },
    { value: "no-peference", label: "No Preference" },
  ];

  const optionsResidential = [
    { value: "nepaliCitizen", label: "Nepali Citizen" },
    { value: "prHolder", label: "PR Holder" },
    { value: "nrn", label: "NRN" },
    { value: "no-peference", label: "No Preference" },
  ];

  const optionsEducation = [
    { value: "primaryLevel", label: "Primary Level" },
    { value: "secondaryLevel", label: "Secondary Level" },
    { value: "higherSecondaryLevel", label: "Higher Secondary Level" },
    { value: "bachelor", label: "Bachelor" },
    { value: "masters", label: "Masters" },
    { value: "phd", label: "PhD" },
    { value: "diploma", label: "Diploma" },
    { value: "no-peference", label: "No Preference" },
  ];

  const optionsFamilyClass = [
    { value: "middleClass", label: "Middle Class" },
    { value: "upperClass", label: "Upper Class" },
    { value: "lowerClass", label: "Lower Class" },
    { value: "no-peference", label: "No Preference" },
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
  const optionsFamilyValues = [
    { value: "traditional", label: "Traditional" },
    { value: "modern", label: "Modern" },
    { value: "liberal", label: "Liberal" },
    { value: "no-peference", label: "No Preference" },
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
          You’re now few steps closer..
        </p>
        <h2 className="text-[#FF6347] font-semibold text-center text-2xl mb-8">
          Step 3 : Personal Preferences for Matches
        </h2>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-6">
          <Select
            className="w-60"
            placeholder="Marital Status"
            options={optionsMarital}
          />
          <Select
            className="w-60"
            placeholder="Age Range"
            options={optionsAge}
          />
          <Select
            className="w-60"
            placeholder="Diet Preferences"
            options={optionsDiet}
          />
          <Select
            className="w-60"
            placeholder="Religion"
            options={optionsReligion}
          />
          <Select
            className="w-60"
            placeholder="Ethnicity"
            options={optionsEthnicity}
          />
          <Select
            className="w-60"
            placeholder="Family Class"
            options={optionsFamilyClass}
          />
          <Select
            className="w-60"
            placeholder="Education Level"
            options={optionsEducation}
          />
          <Select
            className="w-60"
            placeholder="Employment Status"
            options={optionsEmployment}
          />
          <Select
            className="w-60"
            placeholder="Residential Status"
            options={optionsResidential}
          />
          <Select
            className="w-60"
            placeholder="Family Values"
            options={optionsFamilyValues}
          />
          
          
        </div>
        <div className="flex justify-around mt-8 gap-x-4">
          <button
            className="w-72 mx-auto text-[#F24822] rounded-lg h-10 font-semibold border-2 border-[#F24822] hover:text-rose-950 hover:border-2 hover:border-rose-950"
            onClick={() => {
              navigate("/register/step2");
            }}
          >
            Back
          </button>
          <button
            className="w-72 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
            type="submit"
            onClick={() => {
              navigate("/register/step4");
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
