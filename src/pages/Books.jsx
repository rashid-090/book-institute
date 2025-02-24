import React, { useState } from "react";
import { Regform, PreventNavigation } from "../components/user";

const Books = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);


  function handelButton(module) {
    setIsModalOpen(true)
  }
  return (
    <>
      <PreventNavigation />
      <section className="w-11/12 xl:w-10/12 mx-auto py-20">
        <h1 className="text-5xl font-normal capitalize text-center pb-10">Buy the Book</h1>
        <div className="w-full grid place-items-center"><button onClick={() => handelButton()} className="bg-mainclr px-10 h-12 rounded-full capitalize">buy now</button></div>
        {/* form */}
        <Regform isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </section>
    </>
  );
};

export default Books;
