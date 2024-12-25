import { format } from "date-fns";
import React from "react";
import { FaRegThumbsUp, FaReply } from "react-icons/fa";

const AllRecommendationsCard = ({ recommendation }) => {
  const {
    _id,
    queryId,
    recommendationTitle,
    recommendedProductName,
    recommendedProductImage,
    recommendationReason,
    queryTitle,
    productName,
    questionerEmail,
    questionerName,
    recommendarEmail,
    recommenderName,
    recommendationDateAndTime,
    reccomenderImageURL,
  } = recommendation;

  return (
    <div className="flex flex-col p-6 rounded-lg shadow-md border border-stroke">
      {/* questioner div */}
      <div className="flex gap-6 items-center ">
        <div className="w-16 h-16 rounded-full">
          <img
            className="w-full h-full object-cover rounded-full"
            src={reccomenderImageURL}
            alt=""
          />
        </div>
        <div className="text-color-text flex flex-col justify-around">
          <h3 className=" font-bold text-xl md:text-2xl">{recommenderName}</h3>
          <p>{format(new Date(recommendationDateAndTime), "PPp")}</p>
          <p>
            <span className="font-semibold">Product Name:</span>{" "}
            <span>{recommendedProductName}</span>
          </p>
        </div>
      </div>
      <hr className="my-5 border-t-2" />

      {/* <p className="mb-4">
    <span className="font-semibold">Product Brand:</span>{" "}
    <span>{productBrand}</span>
  </p> */}
      {/* question */}
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="w-[80%] md:w-[70%] lg:w-[30%] flex  justify-center  mx-auto md:mx-0">
          <img
            className=" w-full object-cover "
            src={recommendedProductImage}
            alt=""
          />
        </div>
        <div className="space-y-3 text-color-text md:w-full lg:w-[65%]">
          <h3 className="t font-bold text-xl md:text-2xl">{queryTitle}</h3>
          <p>
            <span className="font-semibold">Recommendation Reason:</span>{" "}
            <span>{recommendationReason}</span>
          </p>
          {/* <p className="">
        <span className="font-semibold">Recommanded by Users:</span>{" "}
        <span>{recommendationCount}</span>
      </p> */}
          <div className="flex justify-center ">
            {" "}
            <div className="flex gap-2 mt-2">
              <FaRegThumbsUp size={30} />
              <FaReply size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRecommendationsCard;
