import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import MainLayout from '../Layouts/mainLayout';
import Login from '../AuthPage/Login';
import Error from '../Components/Error';
import SignUp from '../AuthPage/SignUp';
import AllSkills from '../Pages/AllSkills';
import SkillDetails from '../Pages/skillDetails';
import MyProfile from '../Pages/MyProfile';
import { LogIn } from 'lucide-react';
import LoginWithTheme from '../AuthPage/Login';
import PrivateRoute from '../Provider/PrivateRoute';
import ForgotPass from '../Pages/ForgotPass';
import Loading from '../Components/Loading';

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
        loader: () => fetch("/skills.json"),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/myprofile", element: <MyProfile></MyProfile>,
      },
      {
        path: "/skill/:skillId", element: 
        <PrivateRoute>
          <SkillDetails></SkillDetails>
        </PrivateRoute>,
        loader: () => fetch("/skills.json"),
        hydrateFallbackElement: <Loading></Loading>
      },
    ]
  },
  {
    path: "*", element: <Error></Error>
  },
  {
    path: "/login", element: <LoginWithTheme></LoginWithTheme>
  },
  {
    path: "/forgot-password", element: <ForgotPass></ForgotPass>
  },
  {
    path: "/signup", element: <SignUp></SignUp>
  },
]);

export default Router;