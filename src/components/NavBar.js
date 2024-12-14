import React from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="fixed" style={styles.navbar}>
      <Tabs centered textColor="primary">
        <Tab label="Places to Visit" />
        <Tab label="Hotels" />
        <Tab label="Transport" />
        <Tab label="Restaurants" />
        <Tab label="Holiday Homes" />
      </Tabs>
    </AppBar>
  );
};

const styles = {
  navbar: {
    top: '120px', // Adjust based on header height
    backgroundColor: 'white',
    boxShadow: 'none',
    padding: '0 50px',
  },
};

export default NavBar;