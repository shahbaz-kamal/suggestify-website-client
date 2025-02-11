import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import Title from "../Components/Shared/Title";
import { format } from "date-fns";

const ReccomendationsForMe = () => {
  const [recommendationsForMe, setRecommendationsForMe] = useState([]);
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const handleFetchRecommendationsForMe = async () => {
    try {
      const response = await axiosSecure.get(
        `recommendations-for-me/${user?.email}`
      );
      console.log(response.data);
      setRecommendationsForMe(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    handleFetchRecommendationsForMe();
  }, []);
  return (
    <div className="pt-32 container mx-auto">
      <Title title={"Recommendations for me"}></Title>
      {recommendationsForMe.length ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Recommender Name</th>
                <th>Recommender Email</th>
                <th>Query Title</th>
                <th>Product Name</th>
                <th>Recommendation Time</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {recommendationsForMe.map((rec, index) => (
                <tr key={rec._id}>
                  <th>{index + 1}</th>
                  <td>{rec.recommenderName}</td>
                  <td>{rec.recommendarEmail}</td>
                  <td>{rec.queryTitle}</td>
                  <td>{rec.productName}</td>
                  <td>
                    {format(new Date(rec.recommendationDateAndTime), "PPp")}
                  </td>
                </tr>
              ))}

              {/* row 2 */}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="text-center font-semibold text-lg md:text-xl">
          {" "}
          Your queries have not recommendation yet
        </h3>
      )}
    </div>
  );
};

export default ReccomendationsForMe;
