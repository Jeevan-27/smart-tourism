import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
<<<<<<< HEAD
        <Route path="/destination" element={<Destination />} />
        <Route path="/scheduledate" element={<ScheduleDate />} />
        <Route path="/organized" element={<Organized />} />
=======
        <Route path="/itinerary" element={<TripTypeSelector />} />
<<<<<<< HEAD
>>>>>>> 8ce98ac4f9090557544d043425722e06af277d95
=======
        <Route path="/itinerary/options" element={<DestinationOptions />} />
>>>>>>> 91e2b6557633533d2e40208c6d77f0298570f5ec
      </Routes>
    </Router>
  );
}

export default App;
