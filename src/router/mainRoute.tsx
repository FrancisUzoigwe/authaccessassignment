import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/Landingscreen";
import SignLayout from "../components/common/SignLayout";
import Signinscreen from "../pages/auth/Signinscreen";
import Signupscreen from "../pages/auth/Signupscreen";
import Layout from "../components/common/Layout";
import Homescreen from "../pages/screen/Homescreen";
import ErrorPage from "../error/Errorpage";
import PrivateRoute from "./PrivateRoute";
import Viewscreen from "../pages/screen/Viewscreen";
import Createscreen from "../pages/screen/Createscreen";
import Donescreen from "../pages/screen/Donescreen";

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
        path: "/screen/view",
        element: <Viewscreen />,
      },
      {
        path: "/screen/create",
        element: <Createscreen />,
      },
      {
        path: "/screen/done",
        element: <Donescreen />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
