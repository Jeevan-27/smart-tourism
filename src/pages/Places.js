import React from 'react';
import NavBar from '../components/NavBar';
import Chatbot from '../components/Chatbot';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const Places = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleNextClick = () => {
    navigate('/destination'); // Navigate to the destination page
  };

  return (
    <div style={styles.page}>
      {/* Top Navbar */}
      <NavBar />

      {/* Main Content */}
      <div style={styles.content}>
        {/* Section: Places to Visit */}
        <h2 style={styles.sectionTitle}>Places to Visit</h2>
        <div style={styles.grid}>
          {placesToDo.map((place, index) => (
            <div key={index} style={styles.card}>
              <img src={place.image} alt={place.name} style={styles.image} />
              <p style={styles.label}>{place.name}</p>
            </div>
          ))}
        </div>

        {/* Section: Hotels */}
        <h2 style={styles.sectionTitle}>Hotels</h2>
        <div style={styles.grid}>
          {hotels.map((hotel, index) => (
            <div key={index} style={styles.card}>
              <img src={hotel.image} alt={hotel.name} style={styles.image} />
              <p style={styles.label}>{hotel.name}</p>
            </div>
          ))}
        </div>

        {/* Section: Restaurants */}
        <h2 style={styles.sectionTitle}>Restaurants</h2>
        <div style={styles.grid}>
          {restaurants.map((restaurant, index) => (
            <div key={index} style={styles.card}>
              <img src={restaurant.image} alt={restaurant.name} style={styles.image} />
              <p style={styles.label}>{restaurant.name}</p>
            </div>
          ))}
        </div>

        {/* Section: Transport */}
        <h2 style={styles.sectionTitle}>Transport</h2>
        <div style={styles.grid}>
          {transport.map((vehicle, index) => (
            <div key={index} style={styles.card}>
              <img src={vehicle.image} alt={vehicle.name} style={styles.image} />
              <p style={styles.label}>{vehicle.name}</p>
            </div>
          ))}
        </div>

        {/* Section: Holiday Homes */}
        <h2 style={styles.sectionTitle}>Holiday Homes</h2>
        <div style={styles.grid}>
          {holidayHomes.map((home, index) => (
            <div key={index} style={styles.card}>
              <img src={home.image} alt={home.name} style={styles.image} />
              <p style={styles.label}>{home.name}</p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <Button
          variant="contained"
          color="primary"
          size="small"  // Make button smaller
          style={styles.nextButton}
          endIcon={<ArrowForwardIcon />}  // Add the arrow icon
          onClick={handleNextClick}  // Navigate to destination.js
        >
          Next
        </Button>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

// Sample Data (as before)
const placesToDo = [
  { name: 'Marina Beach', image: 'https://via.placeholder.com/150' },
  { name: 'Spencer Plaza', image: 'https://via.placeholder.com/150' },
  { name: 'Vadapalani Murugan Temple', image: 'https://via.placeholder.com/150' },
  { name: 'Armenian Church', image: 'https://via.placeholder.com/150' },
];

const hotels = [
  { name: 'Park Hyatt Hotel', image: 'https://via.placeholder.com/150' },
  { name: 'Taj Coromandal', image: 'https://via.placeholder.com/150' },
  { name: 'The Leela Palace', image: 'https://via.placeholder.com/150' },
  { name: 'Radisson Blue Chennai', image: 'https://via.placeholder.com/150' },
];

const restaurants = [
  { name: 'The Table Restaurant', image: 'https://via.placeholder.com/150' },
  { name: 'Sunset Grill', image: 'https://via.placeholder.com/150' },
];

const transport = [
  { name: 'City Taxi', image: 'https://via.placeholder.com/150' },
  { name: 'Metro Rail', image: 'https://via.placeholder.com/150' },
  { name: 'Airport Shuttle', image: 'https://via.placeholder.com/150' },
  { name: 'Local Bus Service', image: 'https://via.placeholder.com/150' },
];

const holidayHomes = [
  { name: 'Beachside Villa', image: 'https://via.placeholder.com/150' },
  { name: 'Mountain Retreat', image: 'https://via.placeholder.com/150' },
  { name: 'Countryside Cottage', image: 'https://via.placeholder.com/150' },
  { name: 'Luxury Lakehouse', image: 'https://via.placeholder.com/150' },
];

const styles = {
  page: {
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '0 50px',
    marginTop: '0px',
  },
  content: {
    marginTop: '50px',
  },
  sectionTitle: {
    color: '#333',
    fontSize: '24px',
    margin: '30px 0 15px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '40px',
  },
  card: {
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  label: {
    fontSize: '16px',
    color: '#555',
    padding: '10px 0',
  },
  nextButton: {
    width: '200px',  // Make the button smaller
    borderRadius: '30px',  // Make the edges rounder
    marginTop: '20px',
    padding: '10px',  // Adjust padding to make it look more compact
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Places;
