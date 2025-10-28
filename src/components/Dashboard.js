import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DataDisplay from "./DataDisplay";

function Dashboard() {
  const { district } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/districts/${district}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching district data:", err));
  }, [district]);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>
        {district} Dashboard / {district} डैशबोर्ड
      </h1>
      {data ? (
        <>
          <DataDisplay data={data} />
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              cursor: "pointer",
              background: "#facc15",
              border: "none",
              borderRadius: "8px",
            }}
            onClick={() =>
              speak(
                `District ${district} has ${data.total_households} households, ${data.work_days} work days, and total wage expenditure of ₹${data.wage_spent}`
              )
            }
          >
            🔊 Voice Summary / आवाज सारांश
          </button>
        </>
      ) : (
        <p>Loading data / डेटा लोड हो रहा है...</p>
      )}
    </div>
  );
}

export default Dashboard;
