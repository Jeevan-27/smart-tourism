import React from 'react';
import { Button } from '@mui/material';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';  
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleBuildItinerary = () => {
    navigate('/itinerary'); // Navigate to the itinerary builder page
  };

  return (
    <div>
      <Header />
      <SearchBar />
      <img src="assets/travel-ibk7fgrvtvhs7qzg.jpg" alt="Travel" style={styles.image} />
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleBuildItinerary}
        style={styles.itineraryButton}
      >
        Build Your Own Itinerary
      </Button>
      <Footer />
    </div>
  );
};

const styles = {
  page: {
    position: 'absolute',
    height: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    position: 'relative',
    width: '1000px',
    height: '400px',
    objectFit: 'cover',
    left: '135px',
    marginTop: '80px', // Adjust for fixed header
    borderRadius: '16px',
    filter: 'brightness(0.8)', // Dim the image
  },
  itineraryButton: {
    position: 'relative',
    top: '40px',
    left: '-490px',
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#ff9800',
    color: 'white',
    borderRadius: '5px',
    textTransform: 'none',
  }
};

export default Home;