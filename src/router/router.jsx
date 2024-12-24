import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Queries from "../Pages/Queries";
import ReccomendationsForMe from "../Pages/ReccomendationsForMe";
import MyQueries from "../Pages/MyQueries";
import MyRecommendations from "../Pages/MyRecommendations";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/queries", element: <Queries></Queries> },
      {
        path: "/recommendations-for-me",
        element: (
          <PrivateRoute>
            <ReccomendationsForMe></ReccomendationsForMe>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-queries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-recommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations></MyRecommendations>
          </PrivateRoute>
        ),
      },
      { path: "/log-in", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
export default router;
