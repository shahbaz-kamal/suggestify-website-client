import React from "react";
import AddQueries from "./AddQueries";
import Title from "../Components/Shared/Title";
import { Link } from "react-router-dom";

const MyQueries = () => {
  return (
    <div>
      This is my queries
      {/* add query banner */}
      <section>
        <Title title={"Add Queries"}></Title>
        <div
          className="hero rounded-md"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/7npCff6/add-Query-Banner2.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-md"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl font-bold text-[#E0F7FA]">
                Hello there
              </h1>
              <p className="mb-5 text-[#E0F7FA] text-xl font-semibold">
                Explore a world of questions and answers. Share your queries,
                discover recommendations, and connect with others to find the
                best solutions.
              </p>
              <Link to={"/add-queries"}>
                {" "}
                <button className="bg-primary hover:bg-secondary text-color-text hover:text-white transition duration-300 ease-in-out px-4 py-2 rounded-md font-semibold text-xl">
                  Add Your Queries
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyQueries;
