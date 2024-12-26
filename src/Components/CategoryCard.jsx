import React from "react";

const CategoryCard = ({ image, title, Subtitle }) => {
  return (
    <div
      className="hero rounded-md"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-md"></div>
      <div className="hero-content text-neutral-content text-center rounded-md py-24">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{Subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
