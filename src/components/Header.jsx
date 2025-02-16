import React, { useState, useEffect } from 'react';
import { Logo } from '../assets';
import { Link } from 'react-router-dom';

const NavLinks = [
  {
    title: `Buy the Book`,
    url: `#book`,
  },
  {
    title: `Register Course`,
    url: `#register-course`,
  },
  {
    title: `Prove Theory`,
    url: `#prove-theory`,
  },
  {
    title: `Collaborate`,
    url: `#collaborate`,
  },

];



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
      className={`fixed w-full left-0 top-0 z-40 transition-all duration-300 py-2 xl:py-0  ${
        isScrolled ? 'bg-gradient-to-r from-maingrd2 to-mainclr shadow-lg border-white' : 'bg-gradient-to-r from-maingrd2 to-mainclr  border-gray-700'
      }`}
    >
      <div className="w-11/12 xl:w-10/12 mx-auto py-1 xl:py-3 flex items-center justify-between">
        <Link to={'/'}><h1 className='text-white text-3xl font-black uppercase tracking-widest'>My BOOK</h1></Link>
        <ul className={`hidden lg:flex gap-10 text-base capitalize ${!isScrolled ? "text-white " : "text-white"} capitalize`}>
        {NavLinks?.map((bt, i) => (
            <a href={bt.url} key={i}>
              {bt.title}
            </a>
          ))}
        </ul>
        <button className={`shadow-xl ${!isScrolled ? "bg-white border-mainhvr  text-mainclr duration-150 hover:border-mainhvr" : "bg-white border-mainhvr  text-mainclr  duration-150 hover:border-mainhvr"} rounded-lg xl:rounded-xl px-5 border text-sm xl:text-base py-2 `}>
          <Link to={'/jobs'}>Apply for Jobs</Link>
        </button>
      </div>
    </nav>
  );
};

export default Header;
