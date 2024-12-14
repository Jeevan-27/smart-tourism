import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <img src="assets/travel-ibk7fgrvtvhs7qzg.jpg" alt="Travel" style={styles.image} />
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
  }
};

export default Home;