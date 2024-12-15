import React from 'react';
import { Grid, Typography, Button, Card, Box } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useNavigate } from 'react-router-dom';

const Organized = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Header with "Back To Home" Button */}
      <header style={styles.header}>
        <Typography variant="h3" style={styles.headerText}>
          tripstory
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          style={styles.backButton}
        >
          Back To Home
        </Button>
      </header>

      {/* Main Content */}
      <Box style={styles.contentBox}>
        <Grid container spacing={2}>
          {/* Timeline Section */}
          <Grid item xs={12} md={7} style={styles.timelineSection}>
            {/* Day 1 */}
            <Box style={styles.dayContainer}>
              <Box style={styles.dayCircle} />
              <Typography variant="h6" style={styles.dayTitle}>
                DAY 1
              </Typography>
              <Box style={styles.eventList}>
                {renderEvent('Destination 1', '09:00 am - 10:00 am')}
                {renderEvent('Breakfast', '10:00 am - 11:00 am')}
                {renderEvent('Destination 2', '11:30 am - 12:30 pm')}
                {renderEvent('Lunch', '01:00 pm - 02:00 pm')}
                {renderEvent('Destination 3', '02:30 pm - 04:30 pm')}
                {renderEvent('Destination 4', '05:00 pm - 06:30 pm')}
              </Box>
              <ArrowDownwardIcon style={styles.arrow} />
            </Box>

            {/* Day 2 */}
            <Box style={styles.dayContainer}>
              <Box style={styles.dayCircle} />
              <Typography variant="h6" style={styles.dayTitle}>
                DAY 2
              </Typography>
              <Box style={styles.eventList}>
                {renderEvent('Breakfast', '09:00 am - 10:00 am')}
                {renderEvent('Destination 5', '10:30 am - 12:00 pm')}
                {renderEvent('Lunch', '12:30 pm - 01:30 pm')}
                {renderEvent('Destination 6', '02:00 pm - 04:00 pm')}
                {renderEvent('Destination 7', '04:30 pm - 06:00 pm')}
                {renderEvent('Dinner', '06:30 pm - 08:00 pm')}
                {renderEvent('Destination 8', '08:30 pm - 10:00 pm')}
              </Box>
            </Box>
          </Grid>

          {/* Map Section */}
          <Grid item xs={12} md={5}>
            <Card style={styles.mapCard}>
              {/* Map Placeholder */}
              <img
                src="https://via.placeholder.com/400x300"
                alt="Map"
                style={styles.mapImage}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

// Render Event Function
const renderEvent = (name, time) => (
  <Typography key={name} style={styles.eventText}>
    • <b>{name}</b> <span style={styles.timeText}>{time}</span>
  </Typography>
);

// Styles
const styles = {
  container: {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#2f1e55',
    padding: '20px 0',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  headerText: {
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: '20px',
  },
  backButton: {
    backgroundColor: '#4b4b4b',
    color: '#fff',
    borderRadius: '20px',
    padding: '10px 30px',
  },
  contentBox: {
    padding: '30px',
    display: 'flex',
    justifyContent: 'center',
  },
  dayContainer: {
    position: 'relative',
    marginBottom: '30px',
  },
  dayCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#d9d9d9',
    position: 'absolute',
    left: '-20px',
    top: '10px',
  },
  dayTitle: {
    marginLeft: '30px',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  eventList: {
    marginLeft: '30px',
    marginTop: '10px',
  },
  eventText: {
    marginBottom: '10px',
    color: '#333',
  },
  timeText: {
    marginLeft: '10px',
    fontSize: '14px',
    color: '#555',
  },
  arrow: {
    marginLeft: '15px',
    color: '#888',
  },
  timelineSection: {
    paddingRight: '30px',
  },
  mapCard: {
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
};

export default Organized;
