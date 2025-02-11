import React, { useEffect, useState } from "react";
import Title from "./Shared/Title";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import HomeQueryCard from "./HomeQueryCard";

const RecentQueries = () => {
  const [queries, setQueries] = useState([]);
  const axiosSecure = UseAxiosSecure();
  // fetch all jobs

  useEffect(() => {
    const fetchAllQueries = async () => {
      try {
        const response = axiosSecure.get(`all-queries`);
        //  .then((res) => {
        //     setQueries(res.data);
        //   })
        const sortedQueries = (await response).data.sort(
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
    </div>
  );
};

export default RecentQueries;
