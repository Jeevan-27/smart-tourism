import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.contentContainer}>
        {/* Section 1: Links */}
        <div style={styles.linksContainer}>
          <a href="/about-us" style={styles.link}>About Us</a>
          <a href="/contact-us" style={styles.link}>Contact Us</a>
          <a href="/help-centre" style={styles.link}>Help Centre</a>
          <a href="/travel-articles" style={styles.link}>Travel Articles</a>
          <a href="/travellers-choice" style={styles.link}>Travellers' Choice</a>
        </div>
        
        {/* Section 2: Copyright */}
        <div style={styles.copyright}>
          <p>© 2024 TripStory LLC. All rights reserved.</p>
          <div style={styles.legalLinks}>
            <a href="/terms" style={styles.legalLink}>Terms and Conditions</a>
            <a href="/privacy" style={styles.legalLink}>Privacy and Cookies </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#f9f9f9', // Slightly off-white for differentiation
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for elevation
    borderTop: '1px solid #e0e0e0', // Light border for separation
    color: 'black',
    padding: '30px 50px',
    marginTop: '50px',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  linksContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    fontSize: '16px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#ff9800',
  },
  copyright: {
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '1.6',
    fontWeight: 'bold',
  },
  legalLinks: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  legalLink: {
    textDecoration: 'underline',
    color: 'black',
    fontSize: '14px',
    transition: 'color 0.3s ease',
    fontWeight: 'bold',
  },
};

export default Footer;