import React, { useState, useEffect } from 'react';
import { Logo } from '../assets';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change based on when the effect should occur
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-40 transition-all duration-300  ${
        isScrolled ? 'bg-mainclr shadow-lg border-white' : 'bg-mainclr  border-gray-700'
      }`}
    >
      <div className="w-11/12 xl:w-10/12 mx-auto py-1 xl:py-2 flex items-center justify-between">
        <img
          className="h-16 w-32 object-contain"
          src={isScrolled ? Logo : Logo}
          alt="Logo"
        />
        <ul className={`hidden lg:flex gap-10 text-base capitalize ${!isScrolled ? "text-white " : "text-black"} capitalize`}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <button className={`shadow-xl ${!isScrolled ? "bg-white border-mainhvr  text-mainclr duration-150 hover:border-mainhvr" : "bg-mainhvr border-mainhvr  text-white hover:text-white duration-150 hover:border-mainhvr"} rounded-xl px-5 border text-sm xl:text-base py-2 `}>
          <a href='#cform'>Apply now</a>
        </button>
      </div>
    </nav>
  );
};

export default Header;
