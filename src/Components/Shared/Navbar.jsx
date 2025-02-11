import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const {
    user,
    setUser,
    loading,
    setLoading,
    updateUser,
    logoutUser,
    googleSignInUser,
    signInWithEmailUser,
    registerUser,
  } = UseAuth();
  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `rounded-md transition-all duration-300 ${
            isActive
              ? "bg-primary font-bold text-lg"
              : "hover:underline text-base font-bold"
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
              ? "bg-primary font-bold text-lg"
              : "hover:underline text-base font-bold"
          }`
        }
      >
        <li className="px-2 py-2 hover:underline">Queries</li>
      </NavLink>
      {user && user?.email ? (
        <NavLink
          to={"/recommendations-for-me"}
          className={({ isActive }) =>
            `rounded-md transition-all duration-300 ${
              isActive
                ? "bg-primary font-bold text-lg"
                : "hover:underline text-base font-bold"
            }`
          }
        >
          <li className="px-2 py-2 hover:underline">Recommendations for me</li>
        </NavLink>
      ) : (
        ""
      )}
      {user && user?.email ? (
        <NavLink
          to={"/my-queries"}
          className={({ isActive }) =>
            `rounded-md transition-all duration-300 ${
              isActive
                ? "bg-primary font-bold text-lg"
                : "hover:underline text-base font-bold"
            }`
          }
        >
          <li className="px-2 py-2 hover:underline">My Queries</li>
        </NavLink>
      ) : (
        ""
      )}
      {user && user?.email ? (
        <NavLink
          to={"/my-recommendations"}
          className={({ isActive }) =>
            `rounded-md transition-all duration-300 ${
              isActive
                ? "bg-primary font-bold text-lg"
                : "hover:underline text-base font-bold"
            }`
          }
        >
          <li className="px-2 py-2 hover:underline">My recommendations</li>
        </NavLink>
      ) : (
        ""
      )}
         <NavLink
          to={"/contacts"}
          className={({ isActive }) =>
            `rounded-md transition-all duration-300 ${
              isActive
                ? "bg-primary font-bold text-lg"
                : "hover:underline text-base font-bold "
            }`
          }
        >
          <li className="px-2 py-2 hover:underline">Contacts</li>
        </NavLink>
    </>
  );

  // *log out

  const handleLogOut = () => {
    logoutUser().then((result) => {
      Swal.fire({
        // title: "Good job!",
        text: "Log Out Successfull",
        icon: "success",
      });
    });
  };
  return (
    <div className="navbar py-2 md:py-4 ">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <Link to={"/"}>
            {" "}
            <h3 className=" text-xl md:text-2xl hidden xl:inline-flex font-semibold mr-2">
              Suggestify
            </h3>
          </Link>

          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full">
            <img className="w-full h-full rounded-full" src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user && user?.email ? (
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user && user.email ? user.displayName : ""}
            data-tooltip-place="bottom"
            className="w-10 h-10 z-10 relative"
          >
            <img
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
              src={user.photoURL || ""}
              alt="user photo"
            />{" "}
          </div>
        ) : (
          ""
        )}
        {user && user?.email ? (
          <Link>
            <button
              onClick={handleLogOut}
              className="border border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to={"/log-in"}>
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="login to see private content"
              data-tooltip-place="bottom"
              className="border border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
