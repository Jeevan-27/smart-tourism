import React from 'react';
import NavBar from '../components/NavBar';
import Chatbot from '../components/Chatbot';

const Places = () => {
  return (
    <div style={styles.page}>
      <NavBar />
      <Chatbot />
    </div>
  );
};

const styles = {
  page: {
    marginTop: '150px', // Adjust for navbar
    padding: '20px',
  },
};

export default Places;