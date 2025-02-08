import React from 'react';
import './App.css'
import { ScrollToTop } from "react-router-scroll-to-top";
import { lazy, Suspense, useState, useEffect} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";


import {Header, Footer} from './components';

import Home from './pages/home';
import Book from './pages/Books';
import Course from './pages/Course';
import Theory from './pages/Theory';
import Collaborate from './pages/Collaborate';
import Jobs from './pages/Jobs';

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
      {
        path: "/book",
        element: (
          <Suspense fallback={<p>Loading..</p>}>
            <Book/>
          </Suspense>
        ),
      },
      {
        path: "/register-course",
        element: (
          <Suspense fallback={<p>Loading..</p>}>
            <Course/>
          </Suspense>
        ),
      },
      {
        path: "/prove-theory",
        element: (
          <Suspense fallback={<p>Loading..</p>}>
            <Theory/>
          </Suspense>
        ),
      },
      {
        path: "/collaborate",
        element: (
          <Suspense fallback={<p>Loading..</p>}>
            <Collaborate/>
          </Suspense>
        ),
      },
      {
        path: "/jobs",
        element: (
          <Suspense fallback={<p>Loading..</p>}>
            <Jobs/>
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