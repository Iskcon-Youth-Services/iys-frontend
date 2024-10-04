import React, { useState } from "react";
import SignImg from "../images/Signup.png";
import { HiUserAdd, HiUser } from "react-icons/hi";
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";
import { SVGGraphic } from "../components/Svg_";

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex flex-col md:flex-row h-full bg-customColor">
      {/* Left side image section */}
      <div className="w-full md:w-1/2 hidden md:block">
        <img
          src={SignImg}
          alt="Signup"
          className="h-screen rounded-tr-3xl rounded-br-3xl"
        />
      </div>

      {/* Right side login/signup form */}
      <div className="w-full md:w-1/2 lg:w-1/2 h-svh text-center flex flex-col justify-center px-2  py-12 bg-customColor">
        <div className="flex mb-8">
          <button
            onClick={() => setActiveTab("login")}
            className={`mr-2 flex items-center px-4 py-2 rounded-3xl ${
              activeTab === "login"
                ? "bg-[#654019] text-white"
                : "bg-[#e0b694] text-black"
            }`}
          >
            <HiUser className="mr-1" />
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`ml-2 flex items-center px-4 py-2 rounded-3xl ${
              activeTab === "signup"
                ? "bg-[#654019] text-white"
                : "bg-[#e0b694] text-black"
            }`}
          >
            <HiUserAdd className="mr-1" />
            Signup
          </button>
        </div>

        {/* Container for the form with gradient border */}
        <div className="relative p-[1px] rounded-lg bg-primary-gradient mb-8">
          {/* SVG at the top */}
          <div className="absolute -top-2 left-0 right-0">
            <SVGGraphic/>
          </div>

          <div className="bg-[#FFFAF1] p-6 rounded-xl shadow-md">
            {/* Login form */}
            {activeTab === "login" && <LoginComponent />}
            {/* Signup form (conditionally rendered) */}
            {activeTab === "signup" && <SignupComponent />}
          </div>

          {/* SVG at the bottom */}
          <div className="absolute -bottom-2 left-0 right-0">
            <SVGGraphic/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
