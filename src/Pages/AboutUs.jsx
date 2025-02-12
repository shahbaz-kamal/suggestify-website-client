import React from "react";
import Title from "../Components/Shared/Title";
import aboutUs from "../assets/aboutUs2.jpg";
import { IoIosSettings } from "react-icons/io";
import { FaFire } from "react-icons/fa6";
import { GiClassicalKnowledge } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="pt-32 container mx-auto px-2 md:px-0">
      <header>
        <Title title={"About Us"}></Title>
      </header>
      <section className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 justify-between  w-full">
        <div className="w-[50%] lg:w-[40%] flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-md"
            src={aboutUs}
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <h3 className="font-bold text-xl md:text-3xl mb-2 text-color-text text-center lg:text-start">
            Who Are We?
          </h3>
          <p className="text-lg md:text-xl text-color-text opacity-65 mb-2 md:mb-3 text-center lg:text-start">
            Suggestify is a dynamic platform where users can ask any kind of
            question and receive answers from a knowledgeable community. Whether
            it's tech-related queries, career advice, product recommendations,
            or general discussions, Suggestify connects people with the right
            answers.
          </p>
          <p className="text-lg md:text-xl text-color-text  mb-2 md:mb-3 text-center lg:text-start">
            We are committed to fostering an interactive and insightful
            environment where curiosity meets clarity. Our goal is to make
            information easily accessible, helping users find reliable solutions
            to their questions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* 1st div */}
            <div className="flex flex-col items-center justify-start border border-primary-20 p-6">
              <div className="text-primary mb-1">
                <GiClassicalKnowledge size={25} />
              </div>
              <Helmet>
                <title>About Us || Suggestify</title>
              </Helmet>
              <h3 className="font-semibold text-lg md:text-xl text-color-text mb-1">
                Knowledge-Driven Community
              </h3>
              <p className="text-base md:text-lg text-center">
                We provide a space where users can exchange ideas, solve
                problems, and grow their knowledge across various topics.
              </p>
            </div>
            {/* 1st div */}
            <div className="flex flex-col items-center justify-start border border-primary-20 p-6">
              <div className="text-primary mb-1">
                <FaFire size={25} />
              </div>

              <h3 className="font-semibold text-lg md:text-xl text-color-text mb-1">
                Smart & Engaging Platform
              </h3>
              <p className="text-base md:text-lg text-center">
                By combining smart algorithms with user-generated insights, we
                ensure that relevant and valuable answers are easily accessible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
