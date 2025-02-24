import React from 'react'
import { PreventNavigation, Regcousre } from "../components/user";
import { useState } from 'react';
const Course = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handelButton(module){
    setIsModalOpen(true)
  }

  return (
    <>
      <PreventNavigation/>
    <section className="w-11/12 xl:w-10/12 mx-auto py-20">
          <h1 className="text-5xl font-normal capitalize text-center pb-10">Register for a Course</h1>
          <div className="w-full grid place-items-center"><button onClick={()=>handelButton()} className="bg-mainclr px-10 h-12 rounded-full capitalize">Register now</button></div>
          {/* form */}
          <Regcousre isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </section>
  </>
  )
}

export default Course