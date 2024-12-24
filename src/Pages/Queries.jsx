import React from "react";
import Title from "../Components/Shared/Title";
import { TfiLayoutColumn2, TfiLayoutColumn3 } from "react-icons/tfi";

const Queries = () => {
  return (
    <div className="px-2 md:px-0 ">
      <Title title={"All Queries"}></Title>
      <div className="flex flex-col gap-3 md:flex-row md:justify-around items-center mb-6 md:mb-8 lg:mb-10">
        <div className="w-full md:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow w-full md:w-96"
              placeholder="Search by Product Name"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex gap-4 items-center">
          <h3 className="text-xl">Select Grid Layout</h3>
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content="click to view 2 column layout"
            className="bg-gray-300 p-3 rounded-full"
          >
            <TfiLayoutColumn2 size={30} />
          </div>
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content="click to view 3 column layout"
            className="bg-gray-300 p-3 rounded-full"
          >
            <TfiLayoutColumn3 size={30} />
          </div>
        </div>
      </div>
      <div>
        card
      </div>
    </div>
  );
};

export default Queries;
