import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DestinationOptions = () => {
  const navigate = useNavigate();

  const handleCustomize = () => {
    navigate('/itinerary/customize'); // Navigate to a customize destinations page
  };

  const handleChoose = () => {
    navigate('/itinerary/choose'); // Navigate to a predefined destinations page
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.heading}>What Would You Like to Do?</h1>
        <div style={styles.buttonContainer}>
          <Button
            variant="outlined"
            size="large"
            onClick={handleCustomize}
            style={styles.button}
          >
            Customize My Destinations
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={handleChoose}
            style={styles.button}
          >
            Choose From Destinations
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
    padding: '20px',
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

export default DestinationOptions;