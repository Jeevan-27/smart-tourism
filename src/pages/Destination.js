import React, { useState } from 'react';
import { Button, Grid, Card, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useNavigate } from 'react-router-dom';

const Destination = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(''); // Selected destination option
  const [selectedRange, setSelectedRange] = useState({ from: undefined, to: undefined }); // Date range

  // Get the current date
  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // Remove time from date

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Handle date range selection
  const handleDateRangeSelect = (range) => {
    setSelectedRange(range);
  };

  // Handle confirm button click
  const handleConfirm = () => {
    if (!selectedOption) {
      alert('Please select a destination option.');
      return;
    }
    if (!selectedRange.from || !selectedRange.to) {
      alert('Please select a date range (From and To dates).');
      return;
    }

    // Navigate to the organized page
    navigate('/organized');
  };

  return (
    <div style={styles.container}>
      {/* Title */}
      <header style={styles.header}>
        <Typography variant="h3" style={styles.headerText}>
          Tripstory
        </Typography>
      </header>

      {/* Content Section */}
      <div style={styles.content}>
        {/* Destination Options */}
        <RadioGroup value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={5}>
              <Card
                style={{
                  ...styles.card,
                  border: selectedOption === 'customize' ? '3px solid #3a3a3a' : 'none',
                }}
                onClick={() => handleOptionSelect('customize')}
              >
                <FormControlLabel
                  value="customize"
                  control={<Radio color="primary" />}
                  label="Customize My Destinations"
                  style={styles.radioLabel}
                />
              </Card>
            </Grid>

            <Grid item xs={12} sm={5}>
              <Card
                style={{
                  ...styles.card,
                  border: selectedOption === 'choose' ? '3px solid #3a3a3a' : 'none',
                }}
                onClick={() => handleOptionSelect('choose')}
              >
                <FormControlLabel
                  value="choose"
                  control={<Radio color="primary" />}
                  label="Choose from Destinations"
                  style={styles.radioLabel}
                />
              </Card>
            </Grid>
          </Grid>
        </RadioGroup>

        {/* Calendar Section */}
        <div style={styles.calendarContainer}>
          <Typography variant="h6" style={styles.calendarTitle}>
            Select Your Date Range:
          </Typography>
          <DayPicker
            mode="range"
            selected={selectedRange}
            onSelect={handleDateRangeSelect}
            fromDate={todayDate}  // Disable past dates
          />
          {selectedRange.from && selectedRange.to && (
            <Typography style={styles.selectedDateText}>
              Selected Range: {selectedRange.from.toLocaleDateString()} to{' '}
              {selectedRange.to.toLocaleDateString()}
            </Typography>
          )}
        </div>

        {/* Confirm Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={styles.confirmButton}
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
  },
  header: {
    backgroundColor: '#3a3a3a',
    width: '100%',
    padding: '20px 0',
    textAlign: 'center',
  },
  headerText: {
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  },
  content: {
    marginTop: '30px',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    padding: '20px',
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  calendarContainer: {
    marginTop: '40px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
  },
  calendarTitle: {
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#3a3a3a',
  },
  selectedDateText: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#555',
  },
  confirmButton: {
    marginTop: '30px',
    borderRadius: '30px',
    padding: '10px 30px',
    fontSize: '18px',
    backgroundColor: '#3a3a3a',
    color: '#fff',
  },
};

export default Destination;
