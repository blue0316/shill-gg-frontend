import React, { useEffect, useRef } from "react";

const PRICE_CHART_ID = "price-chart-widget-container";

const TokenPriceChart = ({ token }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadWidget = () => {
      if (typeof window.createMyWidget === "function") {
        window.createMyWidget(PRICE_CHART_ID, {
          autoSize: true,
          chainId: "solana",
          tokenAddress: token,
          defaultInterval: "1D",
          timeZone:
            Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Etc/UTC",
          theme: "dark",
          locale: "en",
          hideLeftToolbar: true,
          hideTopToolbar: false,
          hideBottomToolbar: false,
        });
      } else {
        console.error("createMyWidget function is not defined.");
      }
    };

    if (!document.getElementById("moralis-chart-widget")) {
      const script = document.createElement("script");
      script.id = "moralis-chart-widget";
      script.src = "https://moralis.com/static/embed/chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = loadWidget;
      script.onerror = () => {
        console.error("Failed to load the chart widget script.");
      };
      document.body.appendChild(script);
    } else {
      loadWidget();
    }
  }, [token]);

  return (
    <div style={{ width: "100%", height: "calc(100% + 20px)" }}>
      <div
        id={PRICE_CHART_ID}
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default TokenPriceChart;
