import React from "react";
import Banner from "../Components/Banner";
import RecentQueries from "../Components/RecentQueries";
import SuggestionCategory from "../Components/SuggestionCategory";
import Faq from "../Components/Faq";
import NewsLetter from "../Components/NewsLetter";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className=" space-y-6 md:space-y-10">
      <Helmet>
        <title>Home || Suggestify</title>
      </Helmet>
      <section className="w-full">
        <Banner></Banner>
      </section>
      <section className="container mx-auto px-2 lg:px-0">
        <RecentQueries></RecentQueries>
      </section>
      <section className="container mx-auto px-2 lg:px-0">
        <SuggestionCategory></SuggestionCategory>
      </section>
      <section className=" px-2 lg:px-0">
        <NewsLetter></NewsLetter>
      </section>
      <section className="container mx-auto px-2 lg:px-0">
        <Faq></Faq>
      </section>
    </div>
  );
};

export default Home;
