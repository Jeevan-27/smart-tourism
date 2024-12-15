import React from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static" style={styles.navbar}>
      <Tabs centered textColor="primary" indicatorColor="primary">
        <Tab label="Places to Visit" style={styles.tab} />
        <Tab label="Hotels" style={styles.tab} />
        <Tab label="Transport" style={styles.tab} />
        <Tab label="Restaurants" style={styles.tab} />
        <Tab label="Holiday Homes" style={styles.tab} />
      </Tabs>
    </AppBar>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#f8f9fa', // Light gray for better aesthetics
    color: '#000', // Black text for better contrast
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for a premium feel
    padding: '10px 30px', // Adjusted padding for better spacing
  },
  tab: {
    fontWeight: 'bold', // Make the tabs more prominent
    fontSize: '1rem', // Larger font for better readability
    textTransform: 'capitalize', // Avoid uppercase for a modern look
    padding: '10px 20px', // Add padding to the tabs for better spacing
  },
};

export default NavBar;
