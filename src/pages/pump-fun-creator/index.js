import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Spinner } from "../../assets/tadpole-white-36.svg";
import { ReactComponent as Copy } from "../../assets/copy.svg";
import { toast } from "react-toastify";
import TokenPriceChart from "../../components/TokenPriceChart";

const PumpFunCreatorPage = () => {
  const [pumpUrl, setPumpUrl] = useState("");
  const [tokenMetadata, setTokenMetadata] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setPumpUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_HOST}/api/token-metadata`,
        {
          token: pumpUrl,
        }
      );
      setTokenMetadata(response.data);
      setError("");
    } catch (err) {
      console.error("Failed to fetch token metadata:", err);
      setError("Failed to fetch token metadata.");
    } finally {
      setLoading(false);
    }
    setPumpUrl("");
  };

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
    <div id="website-creator-page">
      <header>
        <div className="top-bar">
          <nav>
            <Link to="/">[home]</Link>
            <Link to="#">[twitter]</Link>
            <Link to="#">[support]</Link>
            <Link to="#">[telegram]</Link>
            <Link to="#">[how it works]</Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="hero">
          <h1>
            Shill.<span style={{ color: "#4caf50" }}>gg</span>
          </h1>
          <p>- under maintenance -</p>
        </div>

        {tokenMetadata ? (
          <section id="token-details">
            <h2>
              {tokenMetadata.name} ({tokenMetadata.symbol})
            </h2>
            <img
              className="token-avatar"
              src={tokenMetadata.image_uri}
              alt={`${tokenMetadata.name} Avatar`}
              width="160"
            />

            {tokenMetadata.mint && (
              <div className="token-address-wrapper">
                <img
                  src="https://shill-space-dev.s3.eu-central-1.amazonaws.com/chainlogos/solana.svg"
                  alt="solana"
                  class="blockchain-icon"
                />{" "}
                {`${tokenMetadata.mint.slice(
                  0,
                  5
                )}...${tokenMetadata.mint.slice(-4)}`}
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(tokenMetadata.mint)}
                >
                  <Copy stroke="white" />
                </button>
              </div>
            )}

            <p className="description">{tokenMetadata.description}</p>

            <div className="marketcap-wrapper">
              <div className="marketcap">
                <strong>Current Market Cap</strong>
                <div className="price">
                  {formatMarketCap(tokenMetadata.current_market_cap)}
                </div>
              </div>
              <div className="marketcap">
                <strong>Bonding Market Cap</strong>
                <div className="price">
                  {formatMarketCap(tokenMetadata.bonding_market_cap)}
                </div>
              </div>
            </div>

            <div className="price-chart-wrapper">
              <TokenPriceChart token={tokenMetadata.mint} />
            </div>

            <div>
              <strong>Deployed Date:</strong>{" "}
              {new Date(tokenMetadata.deploy_timestamp).toLocaleDateString()}
            </div>

            <div className="social-wrapper">
              <div className="title">Social Links</div>
              {tokenMetadata.twitter && (
                <a className="token-social-link" href={tokenMetadata.twitter}>
                  Twitter
                </a>
              )}
              {tokenMetadata.telegram && (
                <a className="token-social-link" href={tokenMetadata.telegram}>
                  Telegram
                </a>
              )}
              <a
                className="token-social-link"
                href={`https://pump.fun/coin/${tokenMetadata.mint}`}
              >
                Website
              </a>
            </div>
          </section>
        ) : (
          <section id="website-creator">
            <h2>Create Your Pump.fun Project Website</h2>
            <p>
              Our simple tool helps you create a simple website for your
              Pump.fun token. Enter your Pump.fun URL or token contract address
              below to automatically generate your website for free.
            </p>

            <form id="create-website-form" onSubmit={handleSubmit}>
              <input
                id="pump-url"
                placeholder="Enter Pump.fun URL or CA"
                value={pumpUrl}
                onChange={handleInputChange}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? (
                  <Spinner width={16} height={16} />
                ) : (
                  "Generate Website"
                )}
              </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </section>
        )}
      </main>

      <footer>
        <p>
          Powered by Shill.gg | <Link to="#">Privacy Policy</Link> |
          <Link to="#">Terms of Service</Link>
        </p>
      </footer>
    </div>
  );
};

export default PumpFunCreatorPage;
