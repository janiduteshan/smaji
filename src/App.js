import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components

import Home from "./pages/home";
import AboutUsPage from "./pages/about";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </div>
  );
} 

export default App;