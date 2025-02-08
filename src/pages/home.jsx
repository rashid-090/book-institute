import React from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";

const calltoAction = [
  {
    title: `Buy the Book`,
    url: `/book`,
  },
  {
    title: `Register Course`,
    url: `/register-course`,
  },
  {
    title: `Prove Theory`,
    url: `/prove-theory`,
  },
  {
    title: `Collaborate`,
    url: `/collaborate`,
  },
];

const Home = () => {
  return (
    <section className="bg-home-bg bg-cover bg-center bg-no-repeat grid  place-items-center w-full h-screen relative">
      <div className="bg-[#00000073] absolute w-full h-full"></div>
      <div className="w-11/12 relative xl:w-10/12 mx-auto flex flex-col gap-5 items-center text-center">
        <h1 className="text-7xl font-semibold capitalize text-white">
          The future of tech is here
        </h1>
        <p className="w-[60%] mx-auto text-gray-200">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          eveniet, saepe sequi voluptatibus officiis vero repellat cumque porro
          id, consequuntur perferendis non soluta, sint deserunt molestiae
          praesentium explicabo neque blanditiis.
        </p>
        <div className="flex justify-between w-fit gap-5 mt-5">
          {calltoAction?.map((bt, i) => (
            <Link to={bt.url} class="relative" key={i}>
              <button class=" bg-gradient-to-r from-mainclr to-maingrd2 relative px-10 py-4 text-lg text-white border-none rounded-full cursor-pointer overflow-hidden shine-button">
                <span class="relative z-[1]">{bt.title}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
