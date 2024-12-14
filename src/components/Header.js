import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src="/assets/travel-logo-design.jpg" alt="TravelWebsite" style={styles.logoImage} />
        <span style={styles.logoText}>TravelStory</span>
      </div>
      <div style={styles.authButtons}>
        <Link to="/login"><Button variant="outlined" color="primary">Login</Button></Link>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    backdropFilter: 'blur(10px)', // Blur effect
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  logoImage: {
    height: '50px',
    marginRight: '10px',
    transition: 'transform 0.3s ease',
    position: 'relative',
    left: '-15px',
  },
  logoImageHover: {
    transform: 'scale(1.1)',
  },
  authButtons: {
    display: 'flex',
    gap: '15px',
    position: 'relative',
    right: '-15px',
  },
  logoText: {
    transition: 'transform 0.3s ease',
    position: 'relative',
    left: '-23px',
  },
};

export default Header;