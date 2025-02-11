import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Title from "../Components/Shared/Title";
import { format } from "date-fns";
import Loading from "../Components/Loading";
import UseAuth from "../Hooks/UseAuth";
import AllRecommendationsCard from "../Components/AllRecommendationsCard";

const QueryDetails = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { id } = useParams();
  const [query, setQuery] = useState([]);
  const [queryRecommendations, setQueryRecommendations] = useState([]);

  useEffect(() => {
    const fetchSinglelQuery = async () => {
      try {
        const response = await axiosSecure.get(`query-details/${id}`);

        setQuery(response.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      }
    };
    fetchSinglelQuery();
    // *getting all recommendations for this query

    fetchReccomendations();
  }, [id]);
  const fetchReccomendations = async () => {
    axiosSecure
      .get(`recommandations-for-a-query?id=${id}`)
      .then((res) => {
        setQueryRecommendations(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      });
  };

  if (!query || query.length === 0) {
    return <Loading></Loading>;
  }
  const singleQuery = query[0];
  //   console.log(singleQuery)
  //   console.log(query);

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
  } = singleQuery;
  //   console.log(dateAndTime);
  //   console.log(query);

  const handleAddRecommendation = (e) => {
    e.preventDefault();
    const recommendationTitle = e.target.recommendationTitle.value;
    const recommendedProductName = e.target.recommendedProductName.value;
    const recommendedProductImage = e.target.recommendedProductImage.value;
    const recommendationReason = e.target.recommendationReason.value;
    const recommendationDateAndTime = new Date();
    const recommendarEmail = user?.email;
    const recommenderName = user?.displayName;
    const newRecommendation = {
      queryId: _id,
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
      reccomenderImageURL: user?.photoURL,
    };
    console.log(newRecommendation);

    axiosSecure
      .post(`add-recommendation`, newRecommendation)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Recommendation added Successfully",
            icon: "success",
            draggable: true,
          });
          fetchReccomendations();
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.response.data}`,
        });
      });
  };
  if (user?.email === questionerEmail) {
    Swal.fire({
      title:
        "As this query is posted by you, you cant recommend for this query. You can only view the query details.",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
  }

  // *for getting all recommendations for this query

  return (
    <div className="px-2 md:px-0 pt-32 container mx-auto">
      <Title title={"Query Details"}></Title>
      <div className="flex flex-col p-6 rounded-lg shadow-sm border border-primary-20 mb-6 md:mb-8 lg:mb-10">
        {/* questioner div */}
        <div className="flex gap-6 items-center ">
          <div className="w-16 h-16  rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src={questionerPhotoURL}
              alt=""
            />
          </div>
          <div className="text-color-text flex flex-col justify-around">
            <h3 className=" font-bold text-xl md:text-2xl">{questionerName}</h3>
            <p>{format(new Date(dateAndTime), "PPp")}</p>
            <p>
              {" "}
              <span className="font-semibold">Questioner Email:</span>{" "}
              <span>{questionerEmail}</span>
            </p>
          </div>
        </div>
        <hr className="my-5 border-t-2" />
        {/* question */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 md:items-center">
          <div className="w-[70%] md:w-[30%] flex justify-center mx-auto md:mx-0">
            <img
              className="h-full w-full object-cover "
              src={productImage}
              alt=""
            />
          </div>
          <div className="space-y-3 ext-color-text">
            <p>
              <span className="font-semibold">Product Name:</span>{" "}
              <span>{productName}</span>
            </p>
            <p>
              <span className="font-semibold">Product Brand:</span>{" "}
              <span>{productBrand}</span>
            </p>
            <h3 className="t font-bold text-xl md:text-2xl">{queryTitle}</h3>
            <p>
              <span className="font-semibold">Boycotting reason:</span>{" "}
              <span>{boycottingReason}</span>
            </p>
            <p>
              <span className="font-semibold">Recommanded by Users:</span>{" "}
              <span>{recommendationCount}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Recommend section */}

      <section>
        {" "}
        {user?.email === questionerEmail ? (
          ""
        ) : (
          <section className="my-6 md:my-8 lg:my-10 ">
            <Title title={"Recommmend for this query"}></Title>
            <div className="card bg-base-100 w-full lg:w-[80%] lg:mx-auto shrink-0 shadow-2xl">
              <form
                onSubmit={handleAddRecommendation}
                className="card-body grid grid-cols-1 md:grid-cols-2 "
              >
                <div className="form-control mt-0 pt-0">
                  <label className="label">
                    <span className="label-text">Recommendation Title</span>
                  </label>
                  <input
                    name="recommendationTitle"
                    type="text"
                    placeholder="Enter recommendation title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-0 pt-0">
                  <label className="label">
                    <span className="label-text">Recommended Product Name</span>
                  </label>
                  <input
                    name="recommendedProductName"
                    type="text"
                    placeholder="Enter recommended product name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-0 pt-0">
                  <label className="label">
                    <span className="label-text">
                      Recommended Product Image URL
                    </span>
                  </label>
                  <input
                    name="recommendedProductImage"
                    type="URL"
                    placeholder="Enter Recommended Product Image URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-0 pt-0">
                  <label className="label">
                    <span className="label-text">Recommendation Reason</span>
                  </label>
                  <input
                    name="recommendationReason"
                    type="text"
                    placeholder="Enter Recommendation Reason"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6 md:col-span-2">
                  <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
                    Add Recommendation
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}
      </section>

      {/* all recomendation section */}
      {queryRecommendations.length ? (
        <section className="mt-6 md:mt-8 lg:mt-10">
          <Title title={"All Recommendations For This Query"}></Title>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {queryRecommendations.map((recommendation) => (
              <AllRecommendationsCard
                key={recommendation._id}
                recommendation={recommendation}
              ></AllRecommendationsCard>
            ))}
          </div>
        </section>
      ) : (
        <section>
          <Title title={"All Recommendation For This Query"}></Title>
          <h3 className="text-lg md:text-xl text-center font-semibold">
            There is no recommendetaion for this query yet
          </h3>
        </section>
      )}
    </div>
  );
};

export default QueryDetails;
