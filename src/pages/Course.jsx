import React from 'react'
import { Regcousre } from "../components";
const Course = () => {
  return (
    <>
    <section className="w-11/12 xl:w-10/12 mx-auto py-20">
          <h1 className="text-5xl font-normal capitalize text-center pb-10">Register for a Course</h1>
          {/* form */}
          <Regcousre/>
    </section>
  </>
  )
}

export default Course