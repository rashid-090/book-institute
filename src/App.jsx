
import './App.css'
import { ScrollToTop } from "react-router-scroll-to-top";
import { lazy, Suspense, useState, useEffect} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";


import {Header, Footer} from './components';

import Home from './pages/home'

const Layout = () => {
  return(
    <div className="app 2xl:max-w-[2500px] mx-auto flex flex-col justify-between min-h-screen">
       <ToastContainer position='bottom-right' theme='dark'/>
      <Header/>
      <ScrollToTop />
      <div className='pt-16'><Outlet /></div>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: (
          <Suspense fallback={<p>Loading..</p>}>
            not found
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Loading..</p>}>
            <Home/>
          </Suspense>
        ),
      },
      
    ],
  },
]);   


function App() {


  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App