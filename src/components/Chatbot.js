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
      <TextField
        label="Ask me anything"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={styles.chatInput}
      />
      <Button variant="contained" color="primary" onClick={handleSend} style={styles.chatButton}>
        Send
      </Button>
    </div>
  );
};

const styles = {
  chatContainer: {
    marginTop: '50px',
    maxWidth: '600px',
    margin: 'auto',
  },
  chatInput: {
    marginBottom: '15px',
  },
  chatButton: {
    width: '100%',
  }
};

export default Chatbot;