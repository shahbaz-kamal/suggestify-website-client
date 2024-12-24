import Lottie from "lottie-react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import registerAnimationData from "../../assets/register.json";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassWord = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="text-center bg-login rounded-md p-6">
      <h1 className="text-5xl font-bold mb-6">Register now!</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="card bg-base-100 w-[80%] md:w-[50%] lg:w-[35%]  shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="w-full">
              <button className="flex items-center justify-center gap-2 bg-login hover:bg-[#D4E9DD] transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg w-full">
                <FcGoogle size={25} /> Register with google
              </button>
            </div>
            <div className="divider mt-3 mb-0">OR</div>
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <div
                onClick={handleShowPassWord}
                className="absolute right-3 bottom-4"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </div>
            </div>
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="URL"
                placeholder="Enter your photoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
                Register
              </button>
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <span className="font-bold">
                  <Link to={"/log-in"}>Login Now.</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden md:inline-flex lg:w-[500px] md:justify-center">
          <Lottie animationData={registerAnimationData}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
