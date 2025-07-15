import React from 'react';
import {Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="h-32 w-screen absolute inset-x-0  pl-32 border-t-8 border-neutral-900 bg-blue-300">
          <nav className="text-stone-950 p-4 flex space-x-20">
            <Link to="/" className="hover:text-gray-950">Home</Link>
            <Link to="/char" className="hover:text-gray-50">Characters</Link>
            <Link to="/community" className="hover:text-gray-50">Community</Link>
            <Link to="/about" className="hover:text-gray-50">About</Link>
             <Link to="/profile" className="hover:text-gray-50">Profile</Link>
          </nav>
        </div>
    </>
  )
}

export default Navbar