import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import PumpFunCreatorPage from "./pages/pump-fun-creator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/pump-fun-creator" element={<PumpFunCreatorPage />} />
    </Routes>
  );
}

export default App;
