import React, { useState } from "react";
import loginAnimationData from "../../assets/login.json";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleShowPassWord = () => {
    setShowPassword(!showPassword);
  };
  // google sign in
  const handleGoogleSignIn = () => {
    googleSignInUser()
      .then((result) => {
        setLoading(false);
        Swal.fire({
          title: "Good job!",
          text: `Google sign in Successfull `,
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("Error", error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  // sign in with email & password
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexPass = /^.{6,}$/;
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;

    if (!regexPass.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be at least 6 characters",
      });
      return;
    }
    if (!regexUpperCase.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 1 uppercase letter",
      });
      return;
    }
    if (!regexLowerCase.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 1 lowercase letter",
      });
      return;
    }

    signInWithEmailUser(email, password)
      .then((result) => {
        console.log(result.user);
        setLoading(false);
        Swal.fire({
          title: "Good job!",
          text: "Login Successfull",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setLoading(false);
        console.log("ERROR", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  return (
    <div className="text-center bg-login rounded-md p-6">
      <h1 className="text-5xl font-bold mb-6">Login now!</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="card bg-base-100 w-[80%] md:w-[50%] lg:w-[35%]  shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="w-full">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 bg-login hover:bg-[#D4E9DD] transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg w-full"
              >
                <FcGoogle size={25} /> Login with google
              </button>
            </div>
            <div className="divider mt-3 mb-0">OR</div>
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
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
                name="password"
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
            <div className="form-control mt-6">
              <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
                Login
              </button>
            </div>
            <div>
              <p>
                Don't have an account?{" "}
                <span className="font-bold">
                  <Link to={"/register"}>Register Now.</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden md:inline-flex lg:w-[500px] ">
          <Lottie animationData={loginAnimationData}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
