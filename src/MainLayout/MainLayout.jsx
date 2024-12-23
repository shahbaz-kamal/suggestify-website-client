import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <section>
        <Outlet></Outlet>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
