import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Footer, Header } from '../components/user'
import { ScrollToTop } from 'react-router-scroll-to-top'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <div className="app 2xl:max-w-[2500px] mx-auto flex flex-col justify-between min-h-screen relative">
            <div className="bg-[#00000078] absolute w-full h-full"></div>
            <ToastContainer position='bottom-right' theme='dark' />
            <Header />
            <ScrollToTop />
            <div className='pt-14 md:pt-16'><Outlet /></div>
            <Footer />
        </div>
    )
}

export default UserLayout


