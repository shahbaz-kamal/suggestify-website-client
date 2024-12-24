import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="text-center font-bold mb-4 md:mb-6 text-color-text text-2xl md:text-3xl">
        {title}
      </h1>
    </div>
  );
};

export default Title;
