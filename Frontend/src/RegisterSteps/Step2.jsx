import React from 'react'
import wedding from "../assets/wedding.jpeg";
import mainLogo from "../assets/main-logo.png";
import Select from "react-select";

const Step2 = () => {
    const optionsDiet = [
      { value: "veg", label: "Veg" },
      { value: "non-veg", label: "Non-Veg" },
      { value: "eggiterian", label: "Eggiterian" },
      { value: "vegan", label: "Vegan" },
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
  return (
    <div
      className="relative flex justify-center w-full h-screen py-[5%] bg-center bg-cover font-outfit"
      id="register"
      style={{ backgroundImage: `url(${wedding})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      <form className="absolute px-[8%] h-[78%] shadow-lg bg-white w-[65%] rounded-3xl">
        <img className="absolute top-5 left-16 w-16" src={mainLogo} alt="" />
        <p className="text-center font-light text-lg text-gray-600 mt-16 mb-2">
          Setting up your profile
        </p>
        <h2 className="text-[#FF6347] font-semibold text-center text-2xl mb-8">
          Step 2 : Matchmaking Details
        </h2>
        <div className="flex flex-wrap gap-10">
          <Select
            className="w-80"
            placeholder="Diet Preferences"
            options={optionsDiet}
          />
          <Select className="w-80" placeholder="Height" />
          <Select
            className="w-80"
            placeholder="Family Type"
            options={optionsFamily}
          />
          <Select className="w-80" placeholder="Income Range" />
          <Select
            className="w-80"
            placeholder="Smoking Preferences"
            options={optionsSmoking}
          />
          <Select
            className="w-80"
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
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step2