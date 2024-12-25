import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const MyQueriesCard = ({ myQuery }) => {
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
  } = myQuery;
  return (
    <div className="flex flex-col p-6 rounded-lg shadow-md border border-stroke">
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
        <div className="w-[60%] md:w-[50%] flex justify-center mx-auto md:mx-0">
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
            <div className="flex justify-around mb-2">
              <Link to={`/query-details/${_id}`}>
                <button className="bg-teal-500 hover:bg-teal-600 text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
                  View Details
                </button>
              </Link>
              <Link to={`/query-details/${_id}`}>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
                Update
                </button>
              </Link>
              <Link to={`/query-details/${_id}`}>
                <button className="bg-red-500 hover:bg-red-600 text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
               Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueriesCard;
