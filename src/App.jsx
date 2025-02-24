import React from 'react';
import './App.css'
import { ScrollToTop } from "react-router-scroll-to-top";
import { lazy, Suspense, useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider, Outlet, useLocation, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import { Header, Footer } from './components/user';

import Home from './pages/home';
import Book from './pages/Books';
import Course from './pages/Course';
import Theory from './pages/Theory';
import Collaborate from './pages/Collaborate';
import Jobs from './pages/Jobs';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

import { useDispatch, useSelector } from "react-redux";






function App() {

  const { user, loading } = useSelector((state) => state.user);



  const ProtectedRoute = ({ element }) => {
    const { user, loading } = useSelector((state) => state.user);

    return user ? element : <Navigate to="/login" />;
  };

  return (
    <>


      <BrowserRouter>
        {/* {user ? user.role === "user" && <UserLayout /> : <UserLayout />} */}

        <Routes>
          <Route
            path="/"
            element={<UserLayout />
            }
          >



            <Route
              index
              element={
                user && user.role === "admin" ? <Navigate to="/admin/" /> : <Home />
              }
            />
            
            {/* Auth Pages */}
            {/* <Route path="/login" element={<Login />} /> */}


            {/* General Pages */}
            <Route path="/book" element={<Book />} />
            <Route path="/register-course" element={<Course />} />
            <Route path="/prove-theory" element={<Theory />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/jobs" element={<Jobs />} />

            {/* <Route
              path="/edit-profile"
              element={<ProtectedRoute element={<Profile />} />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/change-password"
              element={<ProtectedRoute element={<ChangePassword />} />}
            /> */}
            {/* Admin Routes */}
            {(user && user.role === "admin") ||
              (user && user.role === "superAdmin") ? (
              <Route path="/admin/*" element={<AdminRoutes />} />
            ) : (
              <Route path="/admin" element={<Navigate to="/" />} />
            )}

            <Route path="*" element={<div >Page not found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />


        <Route path="*" element={<div >Page not found</div>} />
      </Route>
    </Routes>
  );
}