import React from 'react'
import logo from './assets/main-logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <img src={logo} className="pl-3 w-16" alt="logo" />
      <div className="flex justify-end items-center">
        <ul className="flex space-x-12 text-[#333333] font-bold mr-12 ">
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Feature</li>
          <li className="cursor-pointer hover:underline">Testimonial</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>
        <div className="mr-5">
          <button className="bg-[#FF6347] rounded-xl text-white font-extrabold w-[156px] h-[48px] hover:bg-white hover:text-rose-950 hover:border-2 hover:border-rose-950">
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar