import React, { useState } from 'react'
import wedding from "../assets/wedding.jpeg";
import mainLogo from "../assets/main-logo.png";
import SelectOptionStep4 from './SelectOptionStep4';
import { useNavigate } from 'react-router-dom';

const Step4 = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleOptionClick = (label) => {
    if (selectedItems.includes(label)) {
      // If already selected, remove it
      setSelectedItems(selectedItems.filter((item) => item !== label));
    } else if (selectedItems.length < 5) {
      // If not selected and less than 5 are selected, add it
      setSelectedItems([...selectedItems, label]);
    } else {
      alert("You can only select up to 5 options!");
    }
  };

  const options = [
    "Animals",
    "Travel",
    "Food",
    "Sports",
    "Art",
    "Movie",
    "Music",
    "Dancing",
    "Singing",
    "Comedy",
    "Beauty",
    "Science",
    "Reading",
    "Technology",
    "Cooking",
    "Fitness",
    "Shopping",
    "Writing",
    "Business",
    "Others",
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
          You are one step closer...
        </p>
        <h2 className="text-[#FF6347] font-semibold text-center text-2xl mb-8">
          Step 4 : Select Your 5 Interests
        </h2>
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-4">
          {options.map((option) => (
            <SelectOptionStep4
              key={option}
              label={option}
              isSelected={selectedItems.includes(option)}
              onClick={() => handleOptionClick(option)}
            />
          ))}
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
};
export default Step4;