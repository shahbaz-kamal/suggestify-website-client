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
import AddQueries from "../Pages/AddQueries";
import Error from "../Components/Error";
import QueryDetails from "../Pages/QueryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
      { path: "/add-queries", element: <AddQueries></AddQueries> },
      { path: "/query-details/:id", element: <QueryDetails></QueryDetails> },
    ],
  },
]);
export default router;
