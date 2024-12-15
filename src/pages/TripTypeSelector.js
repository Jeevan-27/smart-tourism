import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TripTypeSelector = () => {
  const navigate = useNavigate();

  const handleSelection = (type) => {
    navigate('/itinerary/options'); // Redirect to the common next page
  };

  return (
    <>
    <Header />
    <div style={styles.container}>
      <h1 style={styles.heading}>Plan Your Trip</h1>
      <div style={styles.buttonContainer}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => handleSelection('Solo')}
          style={styles.button}
        >
          Solo Trip
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => handleSelection('Partner')}
          style={styles.button}
        >
          Partner
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => handleSelection('Friends')}
          style={styles.button}
        >
          Friends
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => handleSelection('Family')}
          style={styles.button}
        >
          Family
        </Button>
      </div>
    </div>
    <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    position : 'relative',
    bottom : '-50px'
  },
  heading: {
    marginBottom: '40px',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    padding: '15px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default TripTypeSelector;