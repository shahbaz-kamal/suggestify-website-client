import React from "react";
import Title from "./Shared/Title";
import Lottie from "lottie-react";
import newsLetterData from "../assets/newsLetter.json";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div>
      <header>
        <Title title={"Newsletter"}></Title>
      </header>
      <section id="news-letter" className="">
        <div
          id="news-letter-children"
          className="flex items-center lg:justify-around container mx-auto flex-col lg:flex-row py-4 px-2 md:px-0"
        >
          <div className="w-[80%] lg:w-1/2 flex justify-center lg:justify-start">
            <div className="w-2/3">
              <Lottie animationData={newsLetterData}></Lottie>
            </div>
          </div>
          <div className="flex flex-col lg:items-start">
            <h3 className="font-bold text-xl md:text-4xl mb-7 text-color-text  lg:text-start">
              Subscribe to our <br /> Newsletter
            </h3>
            <p className="max-w-[500px] text-color-text lg:text-start">
              Want to get special offers before they run out? Subscribe to our
              email to get exclusive discounts and offers.
            </p>
            <div class="flex items-center bg-secondary-20 p-2 rounded-md w-full max-w-lg mt-4 group">
              <input
                type="email"
                placeholder="Your Email Address"
                class="flex-1 bg-transparent outline-none px-4 text-gray-700 placeholder:text-color-text"
              />
              <button class="border border-secondary text-color-text  px-6 py-2 rounded-md font-medium hover:bg-secondary hover:text-white transition duration-300 ease-in-out">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
