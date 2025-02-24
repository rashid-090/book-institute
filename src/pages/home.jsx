import React from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
    <section className=" grid  place-items-center w-full py-10 h-full md:h-screen relative">
      {/* <div className="bg-[#00000073] absolute w-full h-full"></div> */}
      <div className="w-11/12 relative xl:w-10/12 mx-auto flex flex-col gap-5 items-center text-center">
        <h1 className="text-2xl xl:text-4xl 2xl:text-5xl font-semibold capitalize text-white xl:w-[75%] 2xl:w-[90%]">
        Welcome to the Portal of Timeless Knowledge
Explore the Universe Through the Grand Unified Theory of Everything.
        </h1>
        <p className="md:w-[60%] mx-auto text-gray-200 text-xs md:text-base">
        Dive into Unified Quantum Field Theory (UQFT) and explore the mysteries of 5-Dimensional Quantum SpaceTime Super-Relativity and SuperTime Singularity. Unlock the profound connections within QCCD (Quantum Chrono-Chromo Dynamics) and SSD (SuperSine Dynamics) as you elevate your understanding to the real realm of 5 dimensions.
        </p>
        <a href="#book" className="relative">
              <button className=" bg-gradient-to-r from-mainclr to-maingrd2 relative px-5 xl:px-10 py-2 xl:py-4 text-sm md:text-lg text-white border-none rounded-full cursor-pointer overflow-hidden shine-button">
                <span className="relative z-[1]">Learn More</span>
              </button>
        </a>

      </div>
    </section>
    {/*  */}
    <section className=" grid  place-items-center w-full py-10 h-full md:h-screen relative" id="book">
    <div className="w-11/12 relative xl:w-10/12 mx-auto flex flex-col gap-5 items-center text-center">
        <h1 className="text-2xl xl:text-4xl 2xl:text-5xl font-semibold capitalize text-white xl:w-[75%] 2xl:w-[90%]">
        The whole theory in a Book format
        </h1>
    
        <p className="md:w-[60%] mx-auto text-gray-200 text-xs md:text-base">
        Uncover the secrets of our groundbreaking theory in this cornerstone publication.<br/>
        The profound implications of our theory on science, philosophy, and daily life.
This book is more than knowledge—it’s the key to mastering the principles of existence.
        </p>
        <Link to={'/book'} className="relative">
              <button className=" bg-gradient-to-r from-mainclr to-maingrd2 relative px-5 xl:px-10 py-2 xl:py-4 text-sm md:text-lg text-white border-none rounded-full cursor-pointer overflow-hidden shine-button">
                <span className="relative z-[1]">Buy the Book</span>
              </button>
        </Link>
       
      </div>
    </section>
    {/*  */}
    <section className=" grid  place-items-center w-full py-10 h-full md:h-screen relative" id="register-course">
    <div className="w-11/12 relative xl:w-10/12 mx-auto flex flex-col gap-5 items-center text-center">
        <h1 className="text-2xl xl:text-4xl 2xl:text-5xl font-semibold capitalize text-white xl:w-[75%] 2xl:w-[90%]">
        Unlock the Universe Within and Beyond
Our Courses, Trainings, Seminars and Workshops
        </h1>
        <p className="md:w-[60%] mx-auto text-gray-200 text-xs md:text-base">
        Step into a transformative learning experience designed to expand your understanding of time, space, and self. Each module is meticulously crafted to align with the principles of Q-clock dynamics, supertime, and spacetime harmonics, offering cutting-edge insights into personal growth, education, and corporate excellence.        </p>
        
        <Link to={'/register-course'} className="relative">
              <button className=" bg-gradient-to-r from-mainclr to-maingrd2 relative px-5 xl:px-10 py-2 xl:py-4 text-sm md:text-lg text-white border-none rounded-full cursor-pointer overflow-hidden shine-button">
                <span className="relative z-[1]">Register Course</span>
              </button>
        </Link>
       
      </div>
    </section>
    {/*  */}
    <section className=" grid  place-items-center w-full py-10 h-full md:h-screen relative" id="prove-theory">
    <div className="w-11/12 relative xl:w-10/12 mx-auto flex flex-col gap-5 items-center text-center">
        <h1 className="text-2xl xl:text-4xl 2xl:text-5xl font-semibold capitalize text-white xl:w-[75%] 2xl:w-[90%]">
        Refute the Theory<br/> The Bharath Noble Prize Challenge
        </h1>
        <p className="md:w-[60%] mx-auto text-gray-200 text-xs md:text-base">
        Do you have the intellect, expertise, and conviction to challenge our groundbreaking theory? If you can successfully refute it, you will be awarded the prestigious Bharath Noble Prize
 </p>
        
        <Link to={'/prove-theory'} className="relative">
              <button className=" bg-gradient-to-r from-mainclr to-maingrd2 relative px-5 xl:px-10 py-2 xl:py-4 text-sm md:text-lg text-white border-none rounded-full cursor-pointer overflow-hidden shine-button">
                <span className="relative z-[1]">Prove Theory</span>
              </button>
        </Link>
       
      </div>
    </section>
    {/*  */}
    <section className=" grid  place-items-center w-full py-10 h-full md:h-screen relative" id="collaborate">
    <div className="w-11/12 relative xl:w-10/12 mx-auto flex flex-col gap-5 items-center text-center">
        <h1 className="text-2xl xl:text-4xl 2xl:text-5xl font-semibold capitalize text-white xl:w-[75%] 2xl:w-[90%]">
        Business Jobs, Jobs etc<br/> Collaborate with Us        </h1>
        <p className="md:w-[60%] mx-auto text-gray-200 text-xs md:text-base">
        Looking for an opportunity to work on cutting-edge ideas that push the boundaries of knowledge? Or perhaps you want to offer us a business collaboration as “what I can do”? Looking for a franchisee opportunity on mindfulness, Time yoga, motivational and transformational sphere? Here’s how you can connect with us. </p>
        
        <Link to={'/collaborate'} className="relative">
              <button className=" bg-gradient-to-r from-mainclr to-maingrd2 relative px-5 xl:px-10 py-2 xl:py-4 text-sm md:text-lg text-white border-none rounded-full cursor-pointer overflow-hidden shine-button">
                <span className="relative z-[1]">Collaborate</span>
              </button>
        </Link>
       
      </div>
    </section>
    </>
  );
};

export default Home;
