import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-[#bfe2fd] w-6 h-6 border-2 border-[#bfe2fd] rounded-full p-5 flex justify-center items-center font-bold"
              : " w-6 h-6 bg-transparent  text-white  border-2 border-white rounded-full p-5 flex justify-center items-center font-bold"
          }
        >
          1
        </NavLink>
        <div className="flex flex-col">
          <span className="text-white">Step 1</span>
          <span className="text-white font-bold uppercase ">Your info</span>
        </div>
      </div>

      <div className="flex gap-4">
        <NavLink
          to="/second"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-[#bfe2fd] w-6 h-6 border-2 border-[#bfe2fd] rounded-full p-5 flex justify-center items-center font-bold"
              : " w-6 h-6 bg-transparent  text-white  border-2 border-white rounded-full p-5 flex justify-center items-center font-bold"
          }
        >
          2
        </NavLink>
        <div className="flex flex-col">
          <span className="text-white">Step 2</span>
          <span className="text-white font-bold uppercase ">Select plan</span>
        </div>
      </div>

      <div className="flex gap-4">
        <NavLink
          to="/third"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-[#bfe2fd] w-6 h-6 border-2 border-[#bfe2fd] rounded-full p-5 flex justify-center items-center font-bold"
              : " w-6 h-6 bg-transparent  text-white  border-2 border-white rounded-full p-5 flex justify-center items-center font-bold"
          }
        >
          3
        </NavLink>
        <div className="flex flex-col">
          <span className="text-white">Step 3</span>
          <span className="text-white font-bold uppercase "> Add-ons</span>
        </div>
      </div>

      <div className="flex gap-4">
        <NavLink
          to="/fourth"
          className={({ isActive }) =>
            isActive
              ? "text-black bg-[#bfe2fd] w-6 h-6 border-2 border-[#bfe2fd] rounded-full p-5 flex justify-center items-center font-bold"
              : " w-6 h-6 bg-transparent  text-white  border-2 border-white rounded-full p-5 flex justify-center items-center font-bold"
          }
        >
          4
        </NavLink>
        <div className="flex flex-col">
          <span className="text-white">Step 4</span>
          <span className="text-white font-bold uppercase ">Summary</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
