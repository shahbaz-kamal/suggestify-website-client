import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="text-center font-bold mb-4 md:mb-6 text-color-text text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h1>
    </div>
  );
};

export default Title;
