import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const yr = new Date().getFullYear()
  return (
    <div className="bg-purple-600 h-[30vh] text-white">
      <div className="flex items-center justify-between border-b border-white w-[60%] mx-auto py-2 pt-10">
        <div className='mr-0'>EmpathyBridge</div>
        <div className='text-sm font-semibold  flex ml-5 justify-end space-x-10 '>
          <Link to="#" className="border-b border-transparent hover:border-white">Home</Link>
          <Link to="#" className="border-b border-transparent hover:border-white">About</Link>
          <Link to="#" className="border-b border-transparent hover:border-white">Solutions</Link>
          <Link to="#" className="border-b border-transparent hover:border-white">Contact</Link>
          <Link to="#" className="border-b border-transparent hover:border-white">Blog</Link>
        </div>
      </div>

      <div className="  border-white pt-2">
        <p className='text-center my-7'>© {yr} EmpathyBridge All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
