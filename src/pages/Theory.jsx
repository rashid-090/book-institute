import React, { useState } from 'react';
import { PreventNavigation, Theory } from "../components";

const ProveTheory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  function handelButton(module){
    setIsModalOpen(true)
  }
  return (
    <>
        <PreventNavigation/>
    <section className="w-11/12 xl:w-10/12 mx-auto py-20">
          <h1 className="text-5xl font-normal capitalize text-center pb-10">Prove the Theory</h1>
          <div className="w-full grid place-items-center"><button onClick={()=>handelButton()} className="bg-mainclr px-10 h-12 rounded-full capitalize">Prove Theory now</button></div>
          {/* form */}
          <Theory isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </section>
  </>
  )
}

export default ProveTheory