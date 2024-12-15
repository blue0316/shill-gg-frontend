import React, { useState } from "react";
import { Link } from "react-router-dom";

const PumpFunCreatorPage = () => {
  const [pumpUrl, setPumpUrl] = useState("");

  const handleInputChange = (event) => {
    setPumpUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Pump.fun URL or CA submitted:", pumpUrl);
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

        <div className="hero">
          <h1>Pump.fun Website Creator</h1>
          <p>Generate your Pump.fun token's website instantly for free</p>
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
              type="url"
              id="pump-url"
              placeholder="Enter Pump.fun URL or CA"
              value={pumpUrl}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Generate Website</button>
          </form>
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
