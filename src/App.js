import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import Places from './pages/Places';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/:city" element={<Places />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}

export default App;