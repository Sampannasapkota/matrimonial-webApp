import React from "react";
import comment from "./assets/fluent_comment-48-regular.png";
import pic1 from "./assets/cropped-SUMIR_BARAL CROPPED.png";
import pic2 from "./assets/Anish.png";
import pic3 from "./assets/rimesh_sapkota.png";

const Testimonials = () => {
  return (
    <div className="font-outfit" id="testimonials">
      <h2 className="text-center font-extrabold text-[40px] text-[#FF6347] mt-20">
        Testimonials
      </h2>
      <p className="ml-[5%] mr-[5%] text-[20px] mt-20 text-[#333333]">
        We understand that finding a life partner is a deeply personal journey.
        At MeroBihe, we bring together individuals with shared values and
        aspirations, focusing on meaningful connections and a smooth experience.
        Join us today to explore a supportive, transparent, and privacy-centric
        platform that empowers you in your journey toward marriage.
      </p>
      <div className="flex justify-evenly mt-[5%]">
        <div className="relative w-[18%] shadow-xl shadow-gray-300 rounded-3xl h-96 p-[1%]">
          <img className="absolute top-[6%] w-8" src={comment} alt="" />
          <img className="w-[50%] mx-auto mt-[6%]" src={pic1} alt="" />
          <h3 className="mt-[6%] mb-[6%] text-[#FF6347] font-semibold text-2xl text-center">
            Sumir Baral
          </h3>
          <p className="p-5 h-[46%] text-center text-[#333333] border-2 border-[#FF6347] rounded-3xl">
            100% partner finder.. wow...Congratulation to all...
          </p>
        </div>
        <div className="relative w-[18%] shadow-xl shadow-gray-300 rounded-3xl h-96 p-[1%]">
          <img className="absolute top-[6%] w-8" src={comment} alt="" />
          <img className="w-[50%] mx-auto mt-[6%]" src={pic2} alt="" />
          <h3 className="mt-[6%] mb-[6%] text-[#FF6347] font-semibold text-2xl text-center">
            Anish Gadtaula
          </h3>
          <p className="p-5 h-[46%] text-center text-[#333333] border-2 border-[#FF6347] rounded-3xl">
            Wowowowowowo just wow
          </p>
        </div>
        <div className="relative w-[18%] shadow-xl shadow-gray-300 rounded-3xl h-96 p-[1%]">
          <img className="absolute top-[6%] w-8" src={comment} alt="" />
          <img className="w-[50%] mx-auto mt-[6%]" src={pic3} alt="" />
          <h3 className="mt-[6%] mb-[6%] text-[#FF6347] font-semibold text-2xl text-center">
            Rimesh Sapkota
          </h3>
          <p className="p-5 h-[46%] text-center text-[#333333] border-2 border-[#FF6347] rounded-3xl">
            Lovely..❤
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
