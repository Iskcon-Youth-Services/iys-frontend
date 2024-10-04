import React, { useState } from 'react';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  




  // Check if all fields are filled
  const isFormValid = email && password;

  return (
    <>
      <div className="mb-6">
        <p className="text-start text-[#654019] font-bold mb-2">Your Email</p>
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0b694]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <p className="text-start text-[#654019] font-bold mb-2">Password</p>
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0b694]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Show the Login button but with conditional opacity */}
      <button
        className={`w-full bg-primary-gradient text-white py-2 rounded-lg font-semibold mb-4 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!isFormValid} // This will prevent the button from being clickable
      >
        Login
      </button>

      <p className="text-lg mb-4">OR</p>
      <div className="relative p-[2px] rounded-lg bg-primary-gradient mb-4">
        <button className="w-full bg-[#FFFAF1] py-2 rounded-lg font-bold flex justify-center items-center">
          <span className="mr-2 bg-primary-gradient bg-clip-text text-transparent">
            Login With Google
          </span>
        </button>
      </div>

      <button className="w-full font-semibold mt-4"><span className='mr-2 bg-primary-gradient bg-clip-text text-transparent'>Forgot Password</span></button>
    </>
  );
}

export default LoginComponent;
