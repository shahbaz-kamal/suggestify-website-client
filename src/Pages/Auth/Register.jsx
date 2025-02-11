import Lottie from "lottie-react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import registerAnimationData from "../../assets/register.json";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = UseAxiosPublic();
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

  // *toggling password visibility
  const handleShowPassWord = () => {
    setShowPassword(!showPassword);
  };

  // *creating/registering user

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    // verifying password
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
    const userInfo = { name, email, password, photo };
    console.log(userInfo);
    // registering user and updating displayname and photoURL
    registerUser(email, password)
      .then((result) => {
        const newUser = result.user;
        updateUser(name, photo)
          .then(() => {
            const updatedUser = {
              ...newUser,
              displayName: name,
              photoURL: photo,
            };
            setUser(updatedUser);
          })
          .then(async() => {
            setLoading(false);


           
            const newUser = { email, name, photoURL:photo };
            const { data } = await axiosPublic.post("google-user", newUser);
            if (data.insertedId) {
              Swal.fire({
                title: "Good job!",
                text: `Registration Successfull `,
                icon: "success",
              });
    
              return;
            } else {
              Swal.fire({
                title: "Good job!",
                text: `Registration Successfull `,
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${err.message}`,
            });
          });
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

  const handleGoogleSignIn = () => {
    googleSignInUser()
      .then(async (result) => {
        setLoading(false);
        const email = result?.user?.email;
        const name = result?.user?.displayName;
        const photoURL = result?.user?.photoURL;
        const newUser = { email, name, photoURL };
        const { data } = await axiosPublic.post("google-user", newUser);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: `Google sign in Successfull `,
            icon: "success",
          });

          return;
        } else {
          Swal.fire({
            title: "Good job!",
            text: `Google sign in Successfull `,
            icon: "success",
          });
        }
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

  return (
    <div className="text-center  rounded-md pt-32">
      <h1 className="text-5xl font-bold mb-6">Register now!</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="card bg-base-100 w-[80%] md:w-[50%] lg:w-[35%]  shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="w-full">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 bg-primary-20 hover:bg-secondary-20 transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg w-full"
              >
                <FcGoogle size={25} /> Register with google
              </button>
            </div>
            <div className="divider mt-3 mb-0">OR</div>
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
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
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                name="photo"
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
