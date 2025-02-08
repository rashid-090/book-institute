import React from "react";
import { Regform } from "../components";

const Books = () => {
  return (
    <>
      <section className="w-11/12 xl:w-10/12 mx-auto py-20">
            <h1 className="text-5xl font-normal capitalize text-center pb-10">Buy the Book</h1>
            {/* form */}
            <Regform/>
      </section>
    </>
  );
};

export default Books;
