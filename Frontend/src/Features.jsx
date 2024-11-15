import React from 'react'
import person from './assets/Exclude.png'
import component from './assets/Component.png'
import chat from './assets/fluent_chat-48-filled.png'

const Features = () => {
  return (
    <div className="font-outfit">
      <h2 className="text-center font-extrabold text-[40px] text-[#FF6347] mt-20">
        Our Features
      </h2>
      <p className="ml-[5%] text-[20px] mt-20 text-[#333333]">
        We understand that finding a life partner is a deeply personal journey.
        At MeroBihe, we bring together individuals with shared values and
        aspirations, focusing on meaningful connections and a smooth experience.
        Join us today to explore a supportive, transparent, and privacy-centric
        platform that empowers you in your journey toward marriage.
      </p>
      <div className="flex justify-evenly mt-[5%]">
        <div className="w-[18%] shadow-xl shadow-gray-300 rounded-3xl h-96">
          <img className="w-[45%] mx-auto mt-8" src={person} alt="" />
          <h3 className="text-[#FF6347] font-semibold text-2xl text-center">
            Secure & Private
          </h3>
          <p className="p-5 text-center text-[#333333]">
            Our platform ensures your privacy, with top-notch security to
            protect your data and keep your matchmaking journey confidential.
          </p>
        </div>
        <div className="w-[18%] shadow-xl shadow-gray-300 rounded-3xl h-96">
          <img className="w-[45%] mx-auto mt-8" src={component} alt="" />
          <h3 className="text-[#FF6347] font-semibold text-2xl text-center">
            Personalized Matches
          </h3>
          <p className="p-5 text-center text-[#333333]">
            Receive highly personalized matches based on a deep analysis of your
            preferences, interests, and values, helping you find the ideal
            partner.
          </p>
        </div>
        <div className="w-[18%] shadow-xl shadow-gray-300 rounded-3xl h-96">
          <img className="w-[45%] mx-auto mt-8" src={chat} alt="" />
          <h3 className="text-[#FF6347] font-semibold text-2xl text-center">
            Real Time Chatting
          </h3>
          <p className="p-5 text-center text-[#333333]">
            Receive real time communication message to keep connected with your
            connected ones.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features