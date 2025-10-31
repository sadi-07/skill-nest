import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import MainLayout from '../Layouts/mainLayout';
import Login from '../AuthPage/Login';
import Error from '../Components/Error';
import SignUp from '../AuthPage/SignUp';
import AllSkills from '../Pages/AllSkills';
import SkillDetails from '../Pages/skillDetails';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/", element: <Home></Home>
      },
      {
        path: "/skills", element: <AllSkills></AllSkills>,
        loader: () => fetch("/skills.json")
      },
      {
        path: "/skill/:skillId", element: <SkillDetails></SkillDetails>,
        loader: () => fetch("/skills.json")
      },
    ]
  },
  {
    path: "*", element: <Error></Error>
  },
  {
    path: "/login", element: <Login></Login>
  },
  {
    path: "/signup", element: <SignUp></SignUp>
  },
]);

export default Router;