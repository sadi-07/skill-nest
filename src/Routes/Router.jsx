import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import MainLayout from '../Layouts/mainLayout';
import Login from '../AuthPage/Login';
import Error from '../Components/Error';
import SignUp from '../AuthPage/SignUp';
import AllSkills from '../Pages/AllSkills';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/", element: <Home></Home>
      },
      {
        path: "/login", element: <Login></Login>
      },
      {
        path: "/signup", element: <SignUp></SignUp>
      },
      {
        path: "/all-skills", element: <AllSkills></AllSkills>
      },
    ]
  },
  {
    path: "*", element: <Error></Error>
  }
]);

export default Router;