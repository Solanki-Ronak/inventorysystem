import React, { useState } from 'react';
import './BranchFirstPage.css'; // Import CSS file

const BranchFirstPage1 = ({ branchName }) => {
  const [showContent, setShowContent] = useState(true);

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      // Redirect to authentication page or logout logic
      // For now, just reload the page
      window.location.reload();
    }
  };

  const handleButtonClick = () => {
    // Handle button click action here
    // For now, just toggle showContent state
    setShowContent(!showContent);
  };

  return (
    <div>
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div>
        <img src="/pics/logo.jpeg" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
   </div>
        {/* Branch Name */}
        <div>{branchName}</div>
        {/* Logout button */}
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Border */}
      <div style={{ border: '1px solid black', marginTop: '20px', display: 'flex' }}>
        {/* Left column */}
        <div style={{ flex: 1, borderRight: '1px solid black' }}>
          <button onClick={handleButtonClick}>SELL</button>
          <button onClick={handleButtonClick}>PURCHASE FROM HQ</button>
          <button onClick={handleButtonClick}>SALES REPORT</button>
          <button onClick={handleButtonClick}>STOCK REPORT</button>
        </div>
        {/* Right column */}
        <div style={{ flex: 3, padding: '10px' }}>
          {showContent && <p>Welcome to {branchName}</p>}
          {/* Content for right column */}
        </div>
      </div>
    </div>
  );
};

export default BranchFirstPage1;
