import React, { useState } from "react";
import { FaRankingStar } from "react-icons/fa6";
import { FaHistory, FaRegUser } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import { SlLogout } from "react-icons/sl";

function Sidebar() {
  // Track the active button, default to 'ranking'
  const [activeButton, setActiveButton] = useState("ranking");

  // Function to change the active button
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="bg-primary-gradient h-full w-full flex flex-col justify-between items-center py-4">
        {/* Upper Buttons */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <button
              className={`${
                activeButton === "ranking" ? "text-black" : "text-white"
              }`}
              onClick={() => handleClick("ranking")}
            >
              <FaRankingStar className="w-20 h-6" /> <p>Ranking</p>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className={`${
                activeButton === "history" ? "text-black" : "text-white"
              }`}
              onClick={() => handleClick("history")}
            >
              <FaHistory className="w-20 h-6" />
              <p>History</p>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className={`${
                activeButton === "books" ? "text-black" : "text-white"
              }`}
              onClick={() => handleClick("books")}
            >
              <IoBookSharp className="w-20 h-6" /> <p>Books</p>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className={`${
                activeButton === "profile" ? "text-black" : "text-white"
              }`}
              onClick={() => handleClick("profile")}
            >
              <FaRegUser className="w-20 h-6" /> <p>Profile</p>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className={`${
                activeButton === "addSadhna" ? "text-black" : "text-white"
              }`}
              onClick={() => handleClick("addSadhna")}
            >
              <CgAddR className="w-20 h-6" />
              <p>Add</p> <p>Sadhna</p>
            </button>
          </div>
        </div>
        {/* Bottom Logout Button */}
        <div>
          <button
            className={`${
              activeButton === "logout" ? "text-black" : "text-white"
            }`}
            onClick={() => handleClick("logout")}
          >
            <SlLogout className="w-20 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
