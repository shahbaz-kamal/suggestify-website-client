import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `rounded-md transition-all duration-300 ${
            isActive
              ? "bg-primary font-semibold text-lg"
              : "hover:underline text-base"
          }`
        }
      >
        <li className="px-2 py-2 hover:underline">Home</li>
      </NavLink>
      <NavLink
        to={"/queries"}
        className={({ isActive }) =>
          `rounded-md transition-all duration-300 ${
            isActive
              ? "bg-primary font-semibold text-lg"
              : "hover:underline text-base"
          }`
        }
      >
        <li className="px-2 py-2 hover:underline">Queries</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar  mb-6 md:mb-8 mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <a className="btn btn-ghost text-xl md:text-2xl hidden md:inline-flex">
            Suggestify
          </a>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full">
            <img className="w-full h-full rounded-full" src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/log-in"}>
          <button className="bg-accent hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
