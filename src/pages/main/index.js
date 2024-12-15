import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TokenCard from "../../components/TokenCard";
import { toast } from "react-toastify";

const MainPage = () => {
  const itemsPerPage = 27;

  const [leaderboardItems, setLeaderboardItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState("mostShilled");
  const [tokenInput, setTokenInput] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const fetchLeaderboardData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://shill-gg-backend.onrender.com/api/leaderboard",
        {
          params: {
            sortBy: sortCriteria,
            page: currentPage,
            limit: itemsPerPage,
          },
        }
      );
      setLeaderboardItems(response.data.leaderboard);
      setTotalPages(Math.ceil(response.data.total / itemsPerPage));
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
      toast.error("Failed to fetch leaderboard data.");
    }
  }, [currentPage, sortCriteria]);

  useEffect(() => {
    fetchLeaderboardData();
  }, [currentPage, fetchLeaderboardData, sortCriteria]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleTokenInputChange = (e) => {
    setTokenInput(e.target.value.toUpperCase());
  };

  const handleSubmitToken = async (event) => {
    event.preventDefault();
    const trimmedTokenInput = tokenInput.trim();

    if (trimmedTokenInput) {
      try {
        const response = await axios.post(
          "https://shill-gg-backend.onrender.com/api/shill",
          {
            ticker: trimmedTokenInput,
          }
        );
        console.log("Submitted ticker:", response.data);
        toast.success(`Token ${trimmedTokenInput} shilled successfully!`);
        setTokenInput("");
        fetchLeaderboardData();
      } catch (error) {
        console.error("Error submitting token:", error);
        toast.error(error.response?.data?.error || "An error occurred.");
      }
    } else {
      toast.error("Please enter a valid ticker!");
    }
  };

  return (
    <div id="main-page" className="App">
      <header>
        <div className="top-bar">
          <nav>
            <Link to="/pump-fun-creator">[pump.fun website creator]</Link>
            <Link to="#">[twitter]</Link>
            <Link to="#">[support]</Link>
            <Link to="#">[telegram]</Link>
            <Link to="#">[how it works]</Link>
          </nav>
        </div>
        <div className="hero">
          <h1>
            Shill.<span style={{ color: "#4caf50" }}>gg</span>
          </h1>
          <p>- under maintenance -</p>
        </div>
      </header>

      <main>
        <section id="submit-token">
          <h2>Shill Your Token:</h2>
          <form id="add-token-form" onSubmit={handleSubmitToken}>
            <div className="ticker-input-container">
              <span className="ticker-prefix">$</span>
              <input
                type="text"
                name="tokenInput"
                placeholder="Enter Ticker (e.g., DOGE)"
                value={tokenInput}
                onChange={handleTokenInputChange}
                required
              />
            </div>
            <button type="submit">SHILL</button>
          </form>
        </section>

        <section id="leaderboard">
          <h2>Daily Top Shills</h2>
          <div className="sort-options">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
            >
              <option value="leastShilled">Low to High</option>
              <option value="mostShilled">High to Low</option>
              <option value="newlyShilled">Newly Shilled</option>
            </select>
          </div>
          <div className="leaderboard-grid">
            {leaderboardItems.map((item) => (
              <TokenCard
                key={item.rank}
                item={item}
                itemFetcher={fetchLeaderboardData}
              />
            ))}
          </div>

          {totalPages > 0 && (
            <div className="pagination">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
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

export default MainPage;
