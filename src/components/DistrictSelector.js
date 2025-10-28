import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DistrictSelector = () => {
  const [districts, setDistricts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Use environment variable for API base URL
  const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${API}/api/districts`)
      .then((res) => {
        // Extract district names from the objects
        const districtNames = res.data.map((item) => item.district);
        // Remove duplicates + sort alphabetically
        const uniqueDistricts = [...new Set(districtNames)].sort();
        setDistricts(uniqueDistricts);
      })
      .catch(() => {
        setError("Failed to load districts. Please try again later.");
      });
  }, [API]);

  const handleSelect = (districtName) => {
    if (districtName) {
      navigate(`/dashboard/${districtName}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 to-amber-200 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-amber-700 drop-shadow-md">
        🏡 Select District / जिला चुनें
      </h1>

      {error ? (
        <p className="text-red-500 font-medium">{error}</p>
      ) : (
        <select
          className="mt-4 w-72 p-3 border-2 border-amber-400 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800 bg-white"
          onChange={(e) => handleSelect(e.target.value.toUpperCase())}
          defaultValue=""
        >
          <option value="">-- Choose District --</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default DistrictSelector;
