import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ color: "#b45309" }}>
        🏡 MGNREGA Dashboard / एमजीएनआरईजीए डैशबोर्ड
      </h1>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        View live district-wise performance under MGNREGA.
      </p>
      <button
        onClick={() => navigate("/districts")}
        style={{
          marginTop: "30px",
          backgroundColor: "#facc15",
          border: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        📍 Select Your District / अपना जिला चुनें
      </button>
    </div>
  );
}

export default Home;
