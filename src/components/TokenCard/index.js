import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ReactComponent as Spinner } from "../../assets/tadpole-white-36.svg";

const TokenCard = ({ item, itemFetcher }) => {
  const [loading, setLoading] = useState(false);

  const shillerHandler = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_HOST}/api/shill`,
        {
          ticker: item.ticker,
        }
      );
      console.log("Submitted ticker:", response.data);
      toast.success(`Token ${item.ticker} shilled successfully!`);
      itemFetcher();
    } catch (error) {
      console.error("Error submitting token:", error);
      toast.error(error.response?.data?.error || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const displayTicker =
    item.ticker.length > 6 ? `${item.ticker.slice(0, 3)}...${item.ticker.slice(-2)}` : item.ticker;

  return (
    <div className="card">
      <div className="card-header">
        <span className="rank">{item.rank}</span>
        <span className="token">{displayTicker}</span>
        <button
          className="shill-button"
          onClick={shillerHandler}
          disabled={loading}
        >
          {loading ? <Spinner width={10} height={10} /> : "Shill"}
        </button>
      </div>
      <p className="card-info">
        Shills: <span>{item.count}</span>
      </p>
    </div>
  );
};

export default TokenCard;
