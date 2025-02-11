import React, { useEffect, useState } from "react";
import AddQueries from "./AddQueries";
import Title from "../Components/Shared/Title";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseAuth from "../Hooks/UseAuth";
import MyQueriesCard from "../Components/MyQueriesCard";

const MyQueries = () => {
  const { user } = UseAuth();
  const [myQueries, setMyQueries] = useState([]);
  const axiosSecure = UseAxiosSecure();

  const refresh = async () => {
    try {
      const response = await axiosSecure.get(`/my-queries/${user?.email}`);
      setMyQueries(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    axiosSecure
      .get(`/my-queries/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setMyQueries(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="px-2 md:px-0 space-y-6 md:space-y-8 lg:space-y-10 pt-32 container mx-auto">
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
    
      {/* My queries */}
      <section>
        <Title title={"My queries"}></Title>
        <div className="mb-6">
          {myQueries.length ? (
            ""
          ) : (
            <h1 className="text-center text-color-text text-lg md:text-xl ">
              You haven't added any queries yet. Please add a query to see your
              queries here
            </h1>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myQueries.map((myQuery) => (
            <MyQueriesCard
              key={myQuery._id}
              myQuery={myQuery}
              setMyQueries={setMyQueries}
              myQueries={myQueries}
              refresh={refresh}
            ></MyQueriesCard>
          ))}
        </div>
      </section>
     
    </div>
  );
};

export default MyQueries;
