import React, { useState } from 'react';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoogleSignUp = () => {
    console.log('Google sign-up clicked');
  };

  const handleFacebookSignUp = () => {
    console.log('Facebook sign-up clicked');
  };

  const handleAppleSignUp = () => {
    console.log('Apple sign-up clicked');
  };

  const handleGetStarted = async () => {
    try {
      const response = await fetch("https://empathybridge.onrender.com/signup/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          full_name: name,
          password,
          role: "doctor",
        }),
      });

      if (!response.ok) {
        // Handle error
        const errorData = await response.json();
        console.error('Error:', errorData);
        setErrorMessage('Sign up failed! Please try again.');
        setSuccessMessage('');
        return;
      }

      const responseData = await response.json();
      console.log('signed up:', responseData);
      setSuccessMessage('Sign up successful! Please proceed to ');
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage('Sign up failed! Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className=" "  >
      <div className='card md:flex md:h-screen '>
        <div className=' md:w-[50%]  md:py-5 ml-14'>
          <div className="bg-white w-[80vw] md:w-[40vw] p-20  md:py-5 ">
            <h1 className="text-xl font-bold mt-6 text-center">Sign Up</h1>
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">
                {errorMessage}
              </p>
            )}
            {successMessage && !errorMessage && (
              <p className="text-green-500 text-center mb-4">
                {successMessage}
                <Link to="/LogInDoctor" className="text-indigo-500">Login</Link>
              </p>
            )}
            <div className="">
              <input
                type="text"
                id="text"
                className=" p-2 w-full border mt-2  border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="">
              <input
                type="email"
                id="email"
                className=" p-2 w-full border mt-2  border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="Password"
                id="Password"
                className=" p-2 w-full border mt-2  border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                placeholder="Enter your password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-indigo-500 text-white w-full h-11  rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
            <div className="mt-4 flex justify-between items-center">
              <hr className="w-[40%] border-t border-gray-300" />
              <p className="text-gray-500">OR</p>
              <hr className="w-[40%] border-t border-gray-300" />
            </div>
            <div className=" ">
              <button className=" border-solid border-gray-200 border-2  text-black font-bold w-full h-11 flex items-center justify-center my-2  rounded-md hover:bg-blue-300 focus:outline-none focus:ring focus:border-blue-300 transition duration-300" onClick={handleGoogleSignUp}>
                <FcGoogle style={{ color: "#4285F4'" }} className="mr-2" />Sign up with Google
              </button>
              <button className="bg border-solid border-gray-200 border-2  text-black font-bold w-full h-11 flex items-center justify-center my-2  rounded-md hover:bg-indigo-200 focus:outline-none focus:ring focus:border-blue-300 transition duration-300" onClick={handleFacebookSignUp}>
                <FaFacebook style={{ color: "#1877F2" }} className="mr-2" />Sign up with Facebook
              </button>
              <button className=" border-solid border-gray-200 border-2  text-black font-bold w-full h-11 flex items-center justify-center my-2  rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300 transition duration-300" onClick={handleAppleSignUp}>
                <FaApple style={{ color: "black" }} className="mr-2" />Sign up with Apple
              </button>
              <div>
                <p className=' text-center'>Already have an account? <Link to='/LogInDoctor'><span className='text-indigo-500 cursor-pointer'>Log in</span></Link> </p>
              </div>
            </div>
          </div>
        </div>
        <div className='card img md:w-[50%] md:relative'>
          <img src="https://media.istockphoto.com/id/1328787453/photo/adhesive-bandage-on-arm-after-injection-vaccine-or-medicine-adhesive-bandages-plaster-medical.jpg?s=612x612&w=0&k=20&c=xenu3djZHBrX9sl1xrTWTDP7jr1GZa4u14jVY-ZcR2Y=" alt="food" className='md:h-[100vh] ' loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
