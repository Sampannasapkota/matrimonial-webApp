import React from 'react'
import logo from './assets/main-logo.png'

const Footer = () => {
  return (
    <div
      className="flex space-x-52 bg-[#F24822] h-72 mt-[5%] p-[5%]"
      style={{ borderRadius: "55% 55% 10% 10% / 20% 20% 0% 0%  " }}
    >
      <div className="flex justify-center items-center bg-white w-20 h-20 rounded-full ">
        <img className="w-16" src={logo} alt="" />
      </div>
      <div className="flex space-x-32 text-white">
        <div>
          <h2 className="font-semibold text-xl -ml-6 mb-2">Need Help ?</h2>
          <ul className="space-y-1 list-disc">
            <li>Member Login</li>
            <li>Sign Up</li>
            <li>How to use meroBihe</li>
            <li>Customer Support</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-xl -ml-6 mb-2">Company</h2>
          <ul className="space-y-1 list-disc">
            <li>About Us</li>
            <li>MeroBihe blog</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-xl -ml-6 mb-2">Privact & You</h2>
          <ul className="space-y-1 list-disc">
            <li>Terms of User</li>
            <li>Privacy Policy</li>
            <li>Report Misuse</li>
            <li>Success Stories </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer