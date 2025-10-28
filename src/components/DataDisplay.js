import React from "react";

function DataDisplay({ data }) {
  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <div
      style={{
        padding: "20px",
        margin: "20px auto",
        width: "90%",
        maxWidth: "600px",
        background: "#fff8e1",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>
        {data.district} District — {data.state}
      </h2>
      <p>
        <b>Total Households:</b> {data.total_households}
      </p>
      <p>
        <b>Work Days:</b> {data.work_days}
      </p>
      <p>
        <b>Wage Spent:</b> ₹{data.wage_spent}
      </p>
      <p>
        <b>Month:</b> {data.month}
      </p>
      <p>
        <b>Last Updated:</b>{" "}
        {data.last_updated
          ? new Date(data.last_updated).toLocaleDateString()
          : "N/A"}
      </p>
    </div>
  );
}

export default DataDisplay;
