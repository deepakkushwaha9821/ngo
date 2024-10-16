import React from 'react';
import './Home.css'; // Ensure this file exists for styling
import { FaHome } from 'react-icons/fa'; // Import the home icon from react-icons
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
  const donationLink = "your-donation-link-here"; // Replace with your actual donation link

  const copyDonationLink = () => {
    navigator.clipboard.writeText(donationLink)
      .then(() => {
        alert('Donation link copied to clipboard!'); // Show alert on success
      })
      .catch((err) => {
        console.error('Failed to copy: ', err); // Log error if copying fails
      });
  };

  const shareOnWhatsApp = () => {
    const message = `Check out this donation link: ${donationLink}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Open WhatsApp in a new tab
  };

  return (
    <>
      {/* First Section */}
      <div className="section first-section">
        <div className="container">
          {/* Notification Section */}
          <div className="notification">
            <p>GET THE LATEST UPDATES FROM US</p>
            <p>Click on Allow to get notifications</p>
            <button id="allow-btn">Allow</button>
            <button id="later-btn">Later</button>
          </div>

          {/* Dashboard Header with Breadcrumb */}
          <div className="dashboard-nar">
            <div className="heada">
              <h1>Dashboard</h1>
            </div>
            <div className="breadcrumb">
              <a href="#" className="home-icon"><FaHome /></a>
              <span className="separator">/</span>
              <a href="#" className="breadcrumb-item">General</a>
              <span className="separator">/</span>
              <a href="#" className="breadcrumb-item">Dashboard</a>
            </div>
          </div>

          {/* Background Section */}
          <div className="background-container">
            <div className="background-image"></div> {/* Background image */}
            <div className="welcome-message">
              <h2>Hello Prashant Shukla,</h2>
              <p>Initial push is the toughest! Go through the learning modules, or reach out to your fundraising manager to level up.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="section second-section">
        <div className="home-container">
          <div className="star">
            <div className="left-section">
              <div className="goal-section">
                <div className="progress-circle">
                  <div className="goal-achieved">Goal Achieved</div>
                  <div className="goal-value">10</div>
                </div>
                <div className="total-goal">Total Goal ₹30000</div>
              </div>
            </div>

            <div className="right-section">
              <div className="level">
                <p>Level Achieved: Star</p>
              </div>
              <div className='line'></div>
              <div className="buttons">
                <button className="btn btn-rewards">Rewards</button>
                <button className="btn btn-copy" onClick={copyDonationLink}>Copy Donation Link</button>
              </div>
              <div className="next-level-info">
                <p>Unlock Ninja Level at 5000</p>
              </div>
              <div className="time-left">
                <p>Time Left: <span style={{ color: 'red' }}>Campaign Expired</span></p>
              </div>
              <div className='bn'>
                <button className="btn btn-extend">Extend Now</button>
              </div>
              <div className="reference-code">
                Reference Code: <span>pra7432</span>
              </div>
              <div className='ref'>
                <Link to="/support" className="btn btn-start">Start Here</Link> {/* Navigate to Support page */}
              </div>
            </div>
          </div>

          {/* Bottom WhatsApp Share */}
          <div className="whatsapp-share">
            <button className="btn-share" onClick={shareOnWhatsApp}>
              Share on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
