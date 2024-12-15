import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import TripTypeSelector from './pages/TripTypeSelector';
import Places from './pages/Places';
import DestinationOptions from './pages/DestinationOptions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/:city" element={<Places />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/itinerary" element={<TripTypeSelector />} />
        <Route path="/itinerary/options" element={<DestinationOptions />} />
      </Routes>
    </Router>
  );
}

export default App;