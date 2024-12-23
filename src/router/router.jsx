import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Queries from "../Pages/Queries";
import ReccomendationsForMe from "../Pages/ReccomendationsForMe";
import MyQueries from "../Pages/MyQueries";
import MyRecommendations from "../Pages/MyRecommendations";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        { path: "/", element: <Home></Home> },
        { path: "/queries", element: <Queries></Queries>},
        { path: "/reccomendation-for-me", element: <ReccomendationsForMe></ReccomendationsForMe>},
        { path: "/my-queries", element: <MyQueries></MyQueries>},
        { path: "/my-recommendations", element: <MyRecommendations></MyRecommendations>},
        { path: "/log-in", element: <Login></Login>},
        { path: "/register", element: <Register></Register>},
    ],
  },
]);
export default router;
