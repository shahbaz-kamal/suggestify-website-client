import React, { useEffect, useState } from "react";
import Title from "../Components/Shared/Title";
import { TfiLayoutColumn2, TfiLayoutColumn3 } from "react-icons/tfi";
import AllQueryCard from "../Components/AllqueryCard";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const axiosSecure = UseAxiosSecure();

  const [search, setSearch] = useState("");
  const [doubleColumn, setDoubleColumn] = useState(false);
  const [trippleColumn, setTripleColumn] = useState(true);

  const handleTwoColumn = () => {
    setDoubleColumn(true);
    setTripleColumn(false);
  };
  const handleThreeColumn = () => {
    setDoubleColumn(false);
    setTripleColumn(true);
  };

  useEffect(() => {
    const fetchAllQueries = async () => {
      try {
        const response = await axiosSecure.get(
          `queries-for-all-query-page?search=${search}`
        );
        const sortedQueries = await response.data.sort(
          (a, b) => new Date(b.dateAndTime) - new Date(a.dateAndTime)
        );
        setQueries(sortedQueries);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      }
    };
    fetchAllQueries();
  }, [search]);
  console.log(queries);
  console.log(search);

  // handling reseting the parameters

  const handleResetLayout = () => {
    setDoubleColumn(false);
    setTripleColumn(true);
  };

  const handleResetSearch = () => {
    setSearch("");
  };

  return (
    <div className="px-2 md:px-0 pt-32 container mx-auto">
      <Title title={"All Queries"}></Title>
      <div className="flex flex-col gap-3 md:flex-row md:justify-around items-center mb-6 md:mb-8 lg:mb-10">
        <div className="w-full md:w-auto">
          <label className="input input-bordered flex items-center gap-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
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
        <div onClick={handleResetSearch}>
          {" "}
          <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
            Reset Search
          </button>
        </div>
        <div onClick={handleResetLayout}>
          {" "}
          <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg hidden lg:flex">
            Reset Layout
          </button>
        </div>
        <div className=" gap-4 items-center hidden lg:flex">
          <h3 className="text-xl">Select Grid Layout</h3>
          <div
            onClick={handleTwoColumn}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="click to view 2 column layout"
            className="bg-gray-300 p-3 rounded-full"
          >
            <TfiLayoutColumn2 size={30} />
          </div>
          <div
            onClick={handleThreeColumn}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="click to view 3 column layout"
            className="bg-gray-300 p-3 rounded-full"
          >
            <TfiLayoutColumn3 size={30} />
          </div>
        </div>
      </div>
      <div
        className={`grid gap-6 grid-cols-1 md:grid-cols-2  ${
          trippleColumn ? "lg:grid-cols-3" : "lg:grid-cols-2"
        } `}
      >
        {queries.map((query) => (
          <AllQueryCard key={query._id} query={query}></AllQueryCard>
        ))}
      </div>
    </div>
  );
};

export default Queries;
