import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // Import DayPicker styles

const ScheduledDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Navigate to the confirmation page
  const handleNextClick = () => {
    if (selectedDate) {
      navigate('/confirmation');
    } else {
      alert('Please select a date first!');
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.headerText}>Select Your Trip Date</h2>
      </header>

      <div style={styles.content}>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={handleDateChange}
        />

        <Button
          variant="contained"
          color="primary"
          style={styles.nextButton}
          onClick={handleNextClick}
        >
          Confirm Date
        </Button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
  },
  header: {
    marginBottom: '20px',
  },
  headerText: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    textAlign: 'center',
    marginTop: '30px',
  },
  nextButton: {
    marginTop: '40px',
    padding: '12px 30px',
    backgroundColor: '#3a3a3a',
    color: '#fff',
    borderRadius: '30px',
  },
};

export default ScheduledDate;
