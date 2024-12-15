import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const TokenCard = ({ item, itemFetcher }) => {
  const shillerHandler = async () => {
    try {
      const response = await axios.post("https://shill-gg-backend.onrender.com/api/shill", {
        ticker: item.ticker,
      });
      console.log("Submitted ticker:", response.data);
      toast.success(`Token ${item.ticker} shilled successfully!`);
      itemFetcher();
    } catch (error) {
      console.error("Error submitting token:", error);
      toast.error(error.response?.data?.error || "An error occurred.");
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <span className="rank">{item.rank}</span>
        <span className="token">{item.ticker}</span>
        <button className="shill-button" onClick={shillerHandler}>
          Shill
        </button>
      </div>
      <p className="card-info">
        Shills: <span>{item.count}</span>
      </p>
    </div>
  );
};

export default TokenCard;
