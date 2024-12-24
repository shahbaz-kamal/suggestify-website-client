import React from "react";
import Banner from "../Components/Banner";
import RecentQueries from "../Components/RecentQueries";

const Home = () => {
  return (
    <div className="px-2 lg:px-0 space-y-6 md:space-y-10">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <RecentQueries></RecentQueries>
      </section>
    </div>
  );
};

export default Home;
