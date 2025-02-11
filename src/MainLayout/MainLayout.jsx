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
      <header className="bg-gradient-to-r from-[rgba(166,127,237,0.5)] to-[rgba(45,199,225,0.5)] backdrop-blur-md  z-10 w-full fixed flex items-center justify-center">
        <div className="container mx-auto">
          <Navbar></Navbar>
        </div>
      </header>
      <section className=" ">
        <Outlet></Outlet>
      </section>
      <footer className="bg-footer mt-8 md:mt-10 lg:mt-12">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
