import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import Title from "../Components/Shared/Title";
import { format } from "date-fns";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyRecommendations = () => {
  const [myRecommendations, setQueryRecommendations] = useState([]);
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const fetchMyRecommendation = async () => {
    try {
      const response = await axiosSecure.get(
        `my-recommendation?email=${user?.email}`
      );
      console.log(response.data);
      setQueryRecommendations(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchMyRecommendation();
  }, []);

  const handleDelete = (id, queryId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`my-recommendation?id=${id}&queryId=${queryId}`)
          .then((res) => {
            if (res.data.deletedCount) {
              fetchMyRecommendation();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `err.message`,
            });
          });
      }
    });
  };
  return (
    <div>
      <Title title={"My Recommendation"}></Title>
      {/* table starts */}

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Questioner Name</th>
              <th>Questioner Email</th>
              <th>Product Name</th>
              <th>Recommendation Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myRecommendations.map((rec, index) => (
              <tr key={rec._id}>
                <th>{index + 1}</th>
                <td>{rec.questionerName}</td>
                <td>{rec.questionerEmail}</td>
                <td>{rec.productName}</td>
                <td>
                  {format(new Date(rec.recommendationDateAndTime), "PPp")}
                </td>
                <td>
                  {
                    <div
                      onClick={() => handleDelete(rec._id, rec.queryId)}
                      className=""
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Delete "
                      data-tooltip-place="left"
                    >
                      <MdDelete size={30} color="#ff0000" />
                    </div>
                  }
                </td>
              </tr>
            ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
