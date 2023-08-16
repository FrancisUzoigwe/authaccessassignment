import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/Landingscreen";
import SignLayout from "../components/common/SignLayout";
import Signinscreen from "../pages/auth/Signinscreen";
import Signupscreen from "../pages/auth/Signupscreen";
import Layout from "../components/common/Layout";
import Homescreen from "../pages/screen/Homescreen";
import Aboutscreen from "../pages/screen/Aboutscreen";
import ErrorPage from "../error/Errorpage";
import PrivateRoute from "./privateRoute";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
  {
    element: <SignLayout />,
    path: "/auth",
    children: [
      {
        path: "/auth/signin",
        element: <Signinscreen />,
      },
      {
        path: "/auth/signup",
        element: <Signupscreen />,
      },
    ],
  },
  {
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    path: "/screen",
    children: [
      {
        index: true,
        element: <Homescreen />,
        path: "/screen/home",
      },
      {
        path: "/screen/about",
        element: <Aboutscreen />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
