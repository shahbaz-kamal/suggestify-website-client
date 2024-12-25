import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Title from "../Components/Shared/Title";
import { format } from "date-fns";
import Loading from "../Components/Loading";
import UseAuth from "../Hooks/UseAuth";

const QueryDetails = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { id } = useParams();
  const [query, setQuery] = useState([]);

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
  }, []);

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

    // try {
    //   const response = axiosSecure.post(
    //     `add-recommendation`,
    //     newRecommendation
    //   );
    //   console.log(response);
    //   if (response.insertedId) {
    //     Swal.fire({
    //       title: "Recommendation added",
    //       icon: "success",
    //       draggable: true,
    //     });
    //     if (response.response.data) {
    //       alert("wrong");
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: `${response.response.data}`,
    //       });
    //     }
    //   }
    // } catch (err) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: `${err.message}`,
    //   });
    //   alert("wrong");
    //   console.log(err);
    // }
  };

  return (
    <div className="px-2 md:px-0">
      <Title title={"Query Details"}></Title>
      <div className="flex flex-col p-6 rounded-lg shadow-sm border border-stroke">
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
      <section className="mt-6 md:mt-8 lg:mt-10">
        <Title title={"Recommmend"}></Title>
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
                placeholder="Enter Query Title"
                className="input input-bordered"
                required
              />
            </div>
            {/* <div className="form-control mt-0 pt-0 md:col-span-2">
              <label className="label">
                <span className="label-text">Boycotting reason </span>
              </label>
              <input
                name="boycottingReason"
                type="text"
                placeholder="Enter Why You Don't Want this Product?"
                className="input input-bordered"
                required
              />
            </div> */}

            <div className="form-control mt-6 md:col-span-2">
              <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
                Add Recommendation
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default QueryDetails;
