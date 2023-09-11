import React from 'react';

function Navbar() {
  return (
    <div className="bg-blue-500 p-4">
      <nav>
        <ul className="flex space-x-4 justify-center">
          <li className='text-white'>
            Home
          </li>
          <li className="text-white">
            About Us
          </li>
          <li className="text-white">
            Join 
          </li>
          <li className="text-white">
            Guidelines
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;


