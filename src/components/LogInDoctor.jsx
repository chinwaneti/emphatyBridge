import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const LogInDoctor = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const route = useNavigate()

  const handleGoogleSignUp = () => {
    console.log('Google sign-up clicked');
  };

 

  const handleGetStarted = async () => {
    try {
      const response = await fetch("https://empathybridge.onrender.com/login/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
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
  
      route('/connectPage');  
  
    } catch (error) {
      console.error('Error:', error.message);
      setErrorMessage('Sign in failed! Please try again.');
    }
  };
  

  return (
    <div className="min-h-screen  flex items-center justify-center  bg-cover" style={{ backgroundPosition: "bottom",  backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/9ae0/6e45/d3d0adae42f421e6ec54527205f5cfa5?Expires=1702857600&Signature=P0Kodx89pNwx2Bca~BE15Z6hgIDQeOEY~9McNzUOnu~ClDZoMnZhAQt~cTZh2mAoITKp5UjYYc7ErYkx2DE2mbc5uvVuphXSaPSdcjIRJ58CvfXCr0s9V9CRyU5MyJxN8pkA30hykCXVh7qBmBLpYvzln0ej9J9Orby0Esva3osGdsPJ7Gj3KOqDyNxDw4Uk7CeHTVyMrgbTp9ng7yGJYtueGZGUmBT7bQN4dgxDYP1~u7fdGBD1d31i40svVcKrKtVnzKxx1mtNdVTIUAFr51lxroBvVP~l8ZTW023KzW34g2UfEFUDA-6ojIMFrtAQ3HeXQWqcmAqnM-YOF2U87Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")' }} >
      <div className="bg-white p-8 rounded-lg shadow-md w-[80vw] md:w-[40vw]  ">
        <h1 className="text-xl font-bold mb-6 text-center">Log In</h1>
        <div className="mb-4">
         
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border  border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
         
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border  border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       <button
          className="bg-indigo-500 text-white w-full h-11   rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          onClick={handleGetStarted}
        > Log In
        </button>
         
        <div className="mt-4 flex justify-between items-center">
          <hr className="w-[40%] border-t border-gray-300" />
          <p className="text-gray-500">OR</p>
          <hr className="w-[40%] border-t border-gray-300" />
        </div>
        <div className=" ">
          <button className=" border-solid border-gray-200 border-2  text-black font-bold w-full h-11 flex items-center justify-center my-2  rounded-md hover:bg-blue-300 focus:outline-none focus:ring focus:border-blue-300 transition duration-300" onClick={handleGoogleSignUp}>
            <FcGoogle style={{color: "#4285F4'"}} className="mr-2" />Sign up with Google
          </button>
          
          
        </div>
        
      </div>
      
    </div>
  );
};

export default LogInDoctor;
