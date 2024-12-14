import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    let inputValue = e.target.value;

    if (inputValue.includes('@') && !inputValue.includes('@hedwig.com')) {
      inputValue = inputValue.split('@')[0] + '@hedwig.com';
    }

    setEmail(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const password = e.target.password.value;
    const confirmPassword = isLogin ? null : e.target.confirmPassword?.value;

    // Mock validation logic
    if (!email.includes('@hedwig.com') || email.indexOf('@') < 3) {
      setError('Email must have at least 3 characters before "@hedwig.com".');
      setLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    alert(isLogin ? 'Logged in successfully!' : 'Registered successfully!');
    setLoading(false);
  };

  return (
    <div className="login-register-container">
      <div className="form-wrapper">
        <h2>{isLogin ? 'Login to Your Account' : 'Create a New Account'}</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="form">
          {!isLogin && (
            <>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
            </>
          )}

          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />

          {!isLogin && (
            <>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
              />

              <label htmlFor="phoneNumber">Mobile Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </>
          )}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Processing...' : isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="toggle-message">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', color: 'blue' }}>
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;