import React, { useEffect, useState } from "react";
import Title from "./Shared/Title";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import HomeQueryCard from "./HomeQueryCard";
import { Link } from "react-router-dom";

const RecentQueries = () => {
  const [queries, setQueries] = useState([]);
  const axiosSecure = UseAxiosSecure();
  // fetch all jobs

  useEffect(() => {
    const fetchAllQueries = async () => {
      try {
        const response = await axiosSecure.get(`all-queries`);
        //  .then((res) => {
        //     setQueries(res.data);
        //   })
        console.log(response.data);
        const sortedQueries = response.data.sort(
          (a, b) => new Date(b.dateAndTime) - new Date(a.dateAndTime)
        );
        setQueries(sortedQueries);
      } catch (error) {
        console.log("Error in fetching", error);
      }
    };

    fetchAllQueries();
  }, []);

  return (
    <div>
      <Title title={"Recent Queries"}></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {queries.slice(0, 6).map((query) => (
          <HomeQueryCard key={query._id} query={query}></HomeQueryCard>
        ))}
      </div>
      {queries.length > 6 ? (
        <div className="flex items-center justify-center mt-5">
          <Link to={"/queries"}>
            <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
              View All
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RecentQueries;
