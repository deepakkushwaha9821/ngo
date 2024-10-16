import React from 'react';
import './Support.css'; // Optional: Create this file for additional styles

function Support() {
  return (
    <div className="form-container">
      <h2>Personal Information</h2>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="exemption">Do you wish to receive the exemption?</label>
          <input type="checkbox" id="exemption" name="exemption" />
        </div>
        <div className="form-group">
          <label htmlFor="referenceCode">Reference Code (if available):</label>
          <input type="text" id="referenceCode" name="referenceCode" />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Minimum Amount:</label>
          <input type="number" id="amount" name="amount" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Support;
