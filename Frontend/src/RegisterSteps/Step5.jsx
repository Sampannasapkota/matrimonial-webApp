import React from 'react'
import wedding from "../assets/wedding.jpeg";
import mainLogo from "../assets/main-logo.png";
import { BsExclamationTriangleFill } from 'react-icons/bs';
import EmptyPhotoComp from './EmptyPhotoComp';
import { useNavigate } from 'react-router-dom';



const Step5 = () => {
   
  return (
    <div
      className="relative flex justify-center w-full h-screen items-center bg-center bg-cover font-outfit"
      id="step1"
      style={{ backgroundImage: `url(${wedding})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 to-orange-400 opacity-70"></div>
      <form
      onSubmit={handleSubmit}
       className="absolute px-28 h-[35em] shadow-lg bg-white w-[60em] rounded-3xl">
        <img className="absolute w-16 top-5 left-16" src={mainLogo} alt="" />
        <p className="mt-14 mb-2 text-lg font-light text-center text-gray-600">
          The final step...
        </p>
        <h2 className="text-[#FF6347] font-semibold text-center text-2xl ">
          Step 5 : Please upload atleast 3 pictures
        </h2>
        <p className="flex items-center justify-center text-sm text-gray-500 gap-x-1">
          <span>
            <BsExclamationTriangleFill />
          </span>
          Make sure your face has been seen clearly for better matches
        </p>
        {/* Photos goes here  */}
        <div className="flex flex-col items-center justify-center px-5 mt-5 gap-x-20 gap-y-4">
          <div className='flex gap-x-24'>
            <EmptyPhotoComp />
            <EmptyPhotoComp />
          </div>
          <div className='flex gap-x-24'>
            <EmptyPhotoComp />
            <EmptyPhotoComp />
          </div>
        </div>

        <div className="flex justify-around mt-10">
          <button
            className="w-80 mx-auto text-[#F24822] rounded-lg h-10 font-semibold border-2 border-[#F24822] hover:text-rose-950 hover:border-2 hover:border-rose-950"
            onClick={() => {
              navigate("/register/step4");
            }}
          >
            Back
          </button>
          <button
            className="w-80 mx-auto bg-[#F24822] rounded-lg h-10 text-white font-semibold  hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step5