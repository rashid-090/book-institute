import React from 'react'
import {Logo} from '../assets'

const home = () => {
  return (
    <section className='grid  place-items-center w-full h-full'>
        <img className='h-40 w-40' src={Logo} alt="" />
    </section>
  )
}

export default home