import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city) {
      navigate(`/places/${city}`);
    }
  };

  return (
    <div style={styles.searchContainer}>
      {/* Simple TextField Input */}
      <TextField
        label="Where to?"
        variant="outlined"
        size="medium"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        style={styles.searchInput}
      />

      {/* Search Button */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSearch}
        style={styles.searchButton}
      >
        Search
      </Button>
    </div>
  );
};

const styles = {
  searchContainer: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '10px',
    position: 'relative',
    top: '50px',
    borderRadius: '8px',
  },
  searchInput: {
    width: '1000px', // Increased width to 10 times bigger as requested
    borderRadius: '12px',
    backgroundColor: 'white',
  },
  searchButton: {
    height: '56px',
    padding: '0 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  },
};

export default SearchBar;
