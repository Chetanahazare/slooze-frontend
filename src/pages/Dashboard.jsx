import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = ({ theme }) => {
  const { user } = useContext(AuthContext);

  if (user?.role !== "Manager") {
    return <p>Access Denied</p>;
  }

  return (
    <div className={`dashboard-container ${theme}`}>
      <h1>Commodities Overview</h1>
      <div className="card">
        <p><strong>Total Commodities:</strong> 2</p>
        <p><strong>Last Updated:</strong> 6/11/2025, 2:30:54 PM</p>
      </div>
    </div>
  );
};

export default Dashboard;