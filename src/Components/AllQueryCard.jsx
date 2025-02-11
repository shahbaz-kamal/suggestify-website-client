import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const AllQueryCard = ({ query }) => {
  const {
    _id,
    productName,
    productBrand,
    productImage,
    queryTitle,
    boycottingReason,
    questionerEmail,
    questionerName,
    questionerPhotoURL,
    recommendationCount,
    dateAndTime,
  } = query;
  return (
    <div className="flex flex-col p-6 rounded-lg shadow-md border border-primary-20">
      {/* questioner div */}
      <div className="flex gap-6 items-center ">
        <div className="w-16 h-16 rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src={questionerPhotoURL}
            alt=""
          />
        </div>
        <div className="text-color-text flex flex-col justify-around">
          <h3 className=" font-bold text-xl md:text-2xl">{questionerName}</h3>
          <p>{format(new Date(dateAndTime), "PPp")}</p>
        </div>
      </div>
      <hr className="my-5 border-t-2" />
      <p>
        <span className="font-semibold">Product Name:</span>{" "}
        <span>{productName}</span>
      </p>
      <p className="mb-4">
        <span className="font-semibold">Product Brand:</span>{" "}
        <span>{productBrand}</span>
      </p>
      {/* question */}
      <div className="flex flex-col  gap-4 md:gap-6 lg:gap-8 md:items-center">
        <div className="w-[70%] md:w-[70%] flex justify-center mx-auto md:mx-0">
          <img
            className="h-full w-full object-cover "
            src={productImage}
            alt=""
          />
        </div>
        <div className="space-y-3 ext-color-text">
          <h3 className="t font-bold text-xl md:text-2xl">{queryTitle}</h3>
          <p>
            <span className="font-semibold">Boycotting reason:</span>{" "}
            <span>{boycottingReason}</span>
          </p>
          <p className="">
            <span className="font-semibold">Recommanded by Users:</span>{" "}
            <span>{recommendationCount}</span>
          </p>
          <div>
            <Link to={`/query-details/${_id}`}>
              <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
                Recommend
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQueryCard;
