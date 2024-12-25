import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import Title from "../Components/Shared/Title";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";

const Update = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const [query, setQuery] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axiosSecure
      .get(`update-query?id=${id}`)
      .then((res) => {
        console.log(res.data);
        setQuery(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  if (!query || query.length === 0) {
    return <Loading></Loading>;
  }

  const singleQuery = query[0];
  console.log(singleQuery);

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
  const handleUpdateQuery = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const productBrand = e.target.productBrand.value;
    const productImage = e.target.productImage.value;
    const queryTitle = e.target.queryTitle.value;
    const boycottingReason = e.target.boycottingReason.value;

    const updatedQuery = {
      productName,
      productBrand,
      productImage,
      queryTitle,
      boycottingReason,
      questionerEmail: user?.email,
      id,
    };
    axiosSecure
      .patch(`update-query`, updatedQuery)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "query added successfully!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  return (
    <div>
      {/* add query section */}
      <section className="text-color-text">
        <Title title={"Update Query"}></Title>
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <form
            onSubmit={handleUpdateQuery}
            className="card-body grid grid-cols-1 md:grid-cols-2 "
          >
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                defaultValue={productName}
                name="productName"
                type="text"
                placeholder="Enter product Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">Product Brand</span>
              </label>
              <input
                defaultValue={productBrand}
                name="productBrand"
                type="text"
                placeholder="Enter Product Brand"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">Product Image URL</span>
              </label>
              <input
                defaultValue={productImage}
                name="productImage"
                type="URL"
                placeholder="Enter Product Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">Query Title</span>
              </label>
              <input
                defaultValue={queryTitle}
                name="queryTitle"
                type="text"
                placeholder="Enter Query Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-0 pt-0 md:col-span-2">
              <label className="label">
                <span className="label-text">Boycotting reason </span>
              </label>
              <input
                defaultValue={boycottingReason}
                name="boycottingReason"
                type="text"
                placeholder="Enter Why You Don't Want this Product?"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6 md:col-span-2">
              <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
                Update query
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Update;
