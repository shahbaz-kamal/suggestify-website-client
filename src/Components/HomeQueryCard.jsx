import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const HomeQueryCard = ({ query }) => {
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
    // <div className="flex flex-col p-6 rounded-lg shadow-sm border border-primary-20">

    //   <div className="flex gap-6 items-center ">
    //     <div className="w-16 h-16 rounded-full">
    //       <img
    //         className="w-full h-full object-cover rounded-full"
    //         src={questionerPhotoURL}
    //         alt=""
    //       />
    //     </div>
    //     <div className="text-color-text flex flex-col justify-around">
    //       <h3 className=" font-bold text-xl md:text-2xl">{questionerName}</h3>
    //       <p>{format(new Date(dateAndTime), "PPp")}</p>
    //     </div>
    //   </div>
    //   <hr className="my-5 border-t-2" />

    //   <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 md:items-center">
    //     <div className="w-[70%] md:w-[30%] flex justify-center mx-auto md:mx-0">
    //       <img
    //         className="h-full w-full object-cover "
    //         src={productImage}
    //         alt=""
    //       />
    //     </div>
    //     <div className="space-y-3 ext-color-text">
    //       <p>
    //         <span className="font-semibold">Product Name:</span>
    //         <span>{productName}</span>
    //       </p>
    //       <p>
    //         <span className="font-semibold">Product Brand:</span>
    //         <span>{productBrand}</span>
    //       </p>
    //       <h3 className="t font-bold text-xl md:text-2xl">{queryTitle}</h3>
    //       <p>
    //         <span className="font-semibold">Boycotting reason:</span>
    //         <span>{boycottingReason}</span>
    //       </p>
    //       <p>
    //         <span className="font-semibold">Recommanded by Users:</span>
    //         <span>{recommendationCount}</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
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
      <div className="flex justify-between font-semibold">
        <p>{productName}</p>
        <p className="mb-4">{productBrand}</p>
      </div>

      {/* question */}
      <div className="flex flex-col  gap-4 md:gap-6 lg:gap-8 md:items-center flex-grow">
        <div className="w-[70%] md:w-[50%] flex justify-center mx-auto md:mx-0 ">
          <img
            className="h-full w-full object-cover "
            src={productImage}
            alt=""
          />
        </div>
        <div className="flex flex-col space-y-3 text-color-text h-full ">
          <h3 className="font-bold text-xl md:text-2xl flex-grow">
           
          {queryTitle.length > 60 ? (
    <>
      {queryTitle.slice(0, 60)}{" "}
      <Link to={`/query-details/${_id}`}>
        <span className="text-primary font-medium">....View Details</span>
      </Link>
    </>
  ) : (
    queryTitle
  )}
          </h3>
          <p className="">
            <span className="font-semibold">Boycotting reason:</span>{" "}
            <span>
              {boycottingReason.slice(0, 45)}
              <Link to={`/query-details/${_id}`}>
                <span className="text-primary font-medium">
                  ....View Details
                </span>
              </Link>
            </span>
          </p>
          <div className="flex justify-between items-center">
     
            <p className="">
              <span className="font-semibold">Recommanded by Users:</span>{" "}
              <span>{recommendationCount}</span>
            </p>
            <div className="">
              <Link to={`/query-details/${_id}`}>
                <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
                  Recommend
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeQueryCard;
