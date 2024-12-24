import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen py-10 flex flex-col gap-6 items-center justify-center">
      <div>
        <HiOutlineEmojiSad
          color="rgb(239,68,68)"
          size={100}
        ></HiOutlineEmojiSad>
      </div>
      <h1 className="text-5xl text-red-500 dark:text-[#FF6E6E]">404</h1>
      <p className="text-2xl text-red-400 dark:text-[#FF6E6E]">
        The page you are looking for dosen't Exist or an other error occured.
      </p>
      <Link>
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="login to see private content"
          data-tooltip-place="bottom"
          className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg"
        >
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default Error;
