import React from "react";
import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROFILES } from "../utils/queries";
import StatsCards from "../components/stats/statsCards";

const QuitPage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="QuitGameDiv">
        <h1 className="quitPageTitle">Thanks for playing!</h1>
        <h2 className="quitPageSubtitle">Your final score:</h2>
        <div className="quitScores">
          <StatsCards />
        </div>
        <div className="startNewGameDiv">
          <Link to="/">
            <button className="startNewGame">Go back to homepage</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuitPage;