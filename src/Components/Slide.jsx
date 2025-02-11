import React from "react";

const Slide = ({ imageURL, title, subTitle }) => {
  return (
    <div>
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
        <div className="relative z-10 text-center text-white container mx-auto">
          <h1 className="text-4xl font-bold text-[#E0F7FA] px-2 md:px-0">
            {title}
          </h1>
          <p className="mt-4 text-xl text-[#E0F7FA] px-2 md:px-0">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
