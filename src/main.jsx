import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import WhoWeAres from './pages/WhoWeAres';
import WhatWeDo from './pages/WhatWeDo';
import ContactUs from './pages/ContactUs';
import DiscussionForums from './pages/DiscussionForums';
import Consultings from './pages/Consultings';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AiPolicy from './pages/AiPolicy';
import FAQs from './pages/FAQs';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import ProfileDetails from './pages/ProfileDetails';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Values from './pages/Values';
import ValuesDetails from './pages/ValuesDetails';
import Login from './layouts/Login';
import Signin from './layouts/Signin';
import ForgotPassword from './layouts/ForgotPassword';
import AuthProvider from './contexts/AuthProvider';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/item/:id",
    element: <BlogDetails />,
  },
  {
    path: "/profile-details/:id", 
    element: <ProfileDetails />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/whoWeAre",
    element: <WhoWeAres />,
  },
  {
    path: "/whatWeDo",
    element: <WhatWeDo />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/forums",
    element: <DiscussionForums />,
  },
  {
    path: "/consulting",
    element: <Consultings />,
  },
  {
    path: "/terms",
    element: <TermsOfService />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/policy",
    element: <AiPolicy />,
  },
  {
    path: "/faq",
    element: <FAQs />,
  },
  {
    path: "/course",
    element: <Courses />,
  },
  {
    path: "/course-details/:id",
    element: <CourseDetails />,
  },
  {
    path: "/value",
    element: <Values />,
  },
  {
    path: "/value-details/:id",
    element: <ValuesDetails />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/update-Profile",
    element: <Profile />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>,
);