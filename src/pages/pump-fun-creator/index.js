import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Spinner } from "../../assets/tadpole-white-36.svg";

const PumpFunCreatorPage = () => {
  const navigate = useNavigate();

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

      navigate(`/${response.data.mint}`, {
        state: {
          data: response.data,
        },
      });
    } catch (err) {
      console.error("Failed to fetch token metadata:", err);
      setError("Failed to fetch token metadata.");
    } finally {
      setLoading(false);
    }
    setPumpUrl("");
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

        <section id="website-creator">
          <h2>Create Your Pump.fun Project Website</h2>
          <p>
            Our simple tool helps you create a simple website for your Pump.fun
            token. Enter your Pump.fun URL or token contract address below to
            automatically generate your website for free.
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
