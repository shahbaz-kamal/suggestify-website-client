import React from "react";
import Title from "./Shared/Title";
import CategoryCard from "./CategoryCard";

const SuggestionCategory = () => {
  return (
    <div>
      <Title title={"Suggestion Category"}> </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <CategoryCard
            image={"https://i.ibb.co.com/ZJchq1X/movie.jpg"}
            title={"Cinematic Picks"}
            Subtitle={"Discover movies that match your mood and taste."}
          ></CategoryCard>
        </section>
        <section>
          <CategoryCard
            image={"https://i.ibb.co.com/0Q7FM9c/restaurants.jpg"}
            title={"Dine & Discover"}
            Subtitle={"Find the perfect spot for every craving and occasion."}
          ></CategoryCard>
        </section>
        <section>
          <CategoryCard
            image={"https://i.ibb.co.com/tYgg48q/books.jpg"}
            title={"Literary Escapes"}
            Subtitle={"Uncover stories and adventures waiting to be read."}
          ></CategoryCard>
        </section>
        <section>
          <CategoryCard
            image={"https://i.ibb.co.com/7GTysrs/travel.jpg"}
            title={"Wanderlust Worthy"}
            Subtitle={"Explore destinations tailored to your travel dreams."}
          ></CategoryCard>
        </section>
      </div>
    </div>
  );
};

export default SuggestionCategory;
