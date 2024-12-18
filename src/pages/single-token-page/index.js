import React from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as Copy } from "../../assets/copy.svg";
import TokenPriceChart from "../../components/TokenPriceChart";

const SingleTokenPage = () => {
  const location = useLocation();

  const { data } = location.state || {};

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Token contract is copied to clipboard!", {
          delay: 1000,
        });
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const formatMarketCap = (value) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value}`;
  };

  return (
    <div id="single-token-page">
      <main>
        {data && (
          <div id="token-details">
            <div className="card">
              <div className="card-bg" />
              <img
                className="token-avatar"
                src={data.image_uri}
                alt={`${data.name} Avatar`}
                width="160"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <h2 className="chrome">
                {data.name} ({data.symbol})
              </h2>

              <p className="shine description">{data.description}</p>

              {data.mint && (
                <div className="token-address-wrapper">
                  <img
                    src="https://shill-space-dev.s3.eu-central-1.amazonaws.com/chainlogos/solana.svg"
                    alt="solana"
                    class="blockchain-icon"
                  />{" "}
                  {`${data.mint.slice(0, 5)}...${data.mint.slice(-4)}`}
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(data.mint)}
                  >
                    <Copy stroke="white" width={20} height={20} />
                  </button>
                </div>
              )}
            </div>

            <div className="marketcap-wrapper">
              <div className="marketcap">
                <strong>Current Market Cap</strong>
                <div className="price">
                  {formatMarketCap(data.current_market_cap)}
                </div>
              </div>
              <div className="marketcap">
                <strong>Bonding Market Cap</strong>
                <div className="price">
                  {formatMarketCap(data.bonding_market_cap)}
                </div>
              </div>
            </div>

            <div className="price-chart-wrapper">
              <TokenPriceChart token={data.mint} />
            </div>

            <div>
              <strong>Deployed Date:</strong>{" "}
              {new Date(data.deploy_timestamp).toLocaleDateString()}
            </div>

            <div className="social-wrapper">
              <div className="title">Social Links</div>
              {data.twitter && (
                <a className="token-social-link" href={data.twitter}>
                  Twitter
                </a>
              )}
              {data.telegram && (
                <a className="token-social-link" href={data.telegram}>
                  Telegram
                </a>
              )}
              <a
                className="token-social-link"
                href={`https://pump.fun/coin/${data.mint}`}
              >
                Website
              </a>
            </div>
          </div>
        )}
      </main>

      <footer>
        <p>
          Created by Shill.gg | <Link to="#">Privacy Policy</Link> |
          <Link to="#">Terms of Service</Link>
        </p>
      </footer>
    </div>
  );
};

export default SingleTokenPage;
