import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Components/Loading";

const MainLayout = () => {
  const { loading } = UseAuth();
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <header className="container mx-auto">
        <Navbar></Navbar>
      </header>
      <section className="container mx-auto">
        <Outlet></Outlet>
      </section>
      <footer className="bg-footer mt-8 md:mt-10 lg:mt-12">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
