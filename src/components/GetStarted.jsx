// Import necessary dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import docImage from './images/doc.jpeg';
import patient from './images/pat.jpeg';


const GetStarted = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Get Started</h1>
        <p className="text-lg mb-8">Choose your category to get started:</p>

        <div className="flex space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          <Link
            to="/doctorSignUp"
            className="group relative bg-transparent hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-lg focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={patient}
              alt="Doctor"
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="absolute inset-0 flex items-center mt-14 justify-center ">
            <p  style={{
    background:
      "linear-gradient(109deg, rgba(255, 255, 255, 0.00) -1.99%, rgba(0, 0, 0, 0.19) 103.55%)",
    backdropFilter: "blur(4.399999618530273px)",
  }} className='bg-gray-100 w-56 p-10'></p> 
            <button
 
  className='bg-purple-600 px-3 py-1 text-sm absolute rounded-lg'
>
  Sign up as a Patient
</button>


            </span>
          </Link>

          <Link
            to="/SignUpPage"
            className="group relative bg-transparent hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-lg focus:outline-none focus:shadow-outline transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={docImage}
              alt="Patient"
              className="w-full h-48 object-cover rounded-lg"
            />
            <span className="absolute inset-0 flex items-center mt-14 justify-center   duration-300">
             <p style={{
    background:
      "linear-gradient(109deg, rgba(255, 255, 255, 0.00) -1.99%, rgba(0, 0, 0, 0.19) 103.55%)",
    backdropFilter: "blur(4.399999618530273px)",
  }}  className='bg-gray-100 w-56  p-10'></p> 
             <button

  className='bg-purple-600 px-3 py-1 text-sm absolute rounded-lg'
>
  Sign up as a Doctor
</button>

            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
