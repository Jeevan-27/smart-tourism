import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Chatbot = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      alert('Message sent to chatbot');
    }
  };

  return (
    <div style={styles.chatContainer}>
      {/* Input Field */}
      <TextField
        label="Ask me anything..."
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        InputProps={{
          style: styles.chatInputField,
        }}
      />
      
      {/* Send Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        style={styles.chatButton}
      >
        Send
      </Button>
    </div>
  );
};

const styles = {
  chatContainer: {
    marginTop: '30px',
    maxWidth: '700px',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '25px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  chatInputField: {
    height: '45px',
    borderRadius: '25px',
    fontSize: '16px',
    paddingLeft: '15px',
    paddingRight: '15px',
    backgroundColor: '#ffffff',
  },
  chatButton: {
    height: '45px',
    borderRadius: '25px',
    minWidth: '100px',
    textTransform: 'none',
    fontWeight: 'bold',
    backgroundColor: '#007BFF',
  },
};

export default Chatbot;
