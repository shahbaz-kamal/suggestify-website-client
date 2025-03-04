import React from "react";
import Title from "../Components/Shared/Title";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AddQueries = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const handleAddQueries = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const productBrand = e.target.productBrand.value;
    const productImage = e.target.productImage.value;
    const queryTitle = e.target.queryTitle.value;
    const boycottingReason = e.target.boycottingReason.value;
    const dateAndTime = new Date();
    const questionerEmail = user?.email;
    const questionerName = user?.displayName;
    const questionerPhotoURL = user?.photoURL;
    const recommendationCount = 0;

    const newProduct = {
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
    };
    console.log(newProduct);

    axiosSecure
      .post("add-query", newProduct)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "query added successfully!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="pt-32">
      {/* add query section */}
      <section className="text-color-text">
        <Title title={"Add Queries"}></Title>
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <form
            onSubmit={handleAddQueries}
            className="card-body grid grid-cols-1 md:grid-cols-2 "
          >
            <div className="form-control mt-0 pt-0">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
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
                name="boycottingReason"
                type="text"
                placeholder="Enter Why You Don't Want this Product?"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6 md:col-span-2">
              <button className="bg-primary hover:bg-secondary hover:text-white transition duration-300 ease-in-out px-2 py-2 rounded-md font-semibold text-lg">
              Add query
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddQueries;
