import React, { memo } from "react";

const Dashboard = ({ getData }) => {
  console.log(getData, "getData");

  return <div>Welcome to dashboard</div>;
};

export default memo(Dashboard);
