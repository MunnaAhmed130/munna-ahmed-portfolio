import React from "react";
import { useParams } from "react-router";
import SkeletonDetails from "../../Skeletons/SkeletonDetails";
import Detail from "../Detail/Detail";
import Footer from "../Footer/Footer";
import "./Details.css";
import { Data } from "../Data/Data";

const Details = () => {
  const { _id } = useParams();
  const [data] = Data();
  // const { title, project_demo_1, project_demo_2, project_demo_3, github_client_repo, github_server_repo, live_link, p_1, p_2, p_3 } = details;

  return (
    <>
      {data
        .filter((data) => data._id === +_id)
        .map((data) => (
          <div className="details">
            <Detail details={data} key={data._id}></Detail>
          </div>
        ))}
      {!data && <SkeletonDetails></SkeletonDetails>}
      <Footer />
    </>
  );
};

export default Details;
