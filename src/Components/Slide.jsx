import React from "react";

const Slide = ({ imageURL, title, subTitle }) => {
  return (
    <div>
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center rounded-xl"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold text-[#E0F7FA] ">
            {title}
          </h1>
          <p className="mt-4 text-xl text-[#E0F7FA]">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
