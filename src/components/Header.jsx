import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="bg-white p-4 flex justify-between text-purple-700">
        <span className="logo text-xl font-bold">EmpathyBridge</span>
        <div className="centered-nav flex items-center space-x-20">
          <Link to="/" className=" hover:text-purple-700">Explore</Link>
          <Link to="/solutions" className=" hover:text-purple-700">Solutions</Link>
          <Link to="/learn" className=" hover:text-purple-700">Learn</Link>
        </div>

        <div className="left-nav flex items-center space-x-4">
          <Link to="/" className=" text-white px-4 py-2 rounded-full bg-purple-500">Login</Link>
          <Link to="/GetStarted">
            <button className="text-purple-500 px-4 py-2 rounded-full hover:bg-gray-200 hover:text-purple-500 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
