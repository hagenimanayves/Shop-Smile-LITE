import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const googleWebAppUrl = 'https://script.google.com/macros/s/AKfycbzwgOxzXttjLHtS1dc2m8068ikQsT3_WjaGg-3qQMbrECWj0lbabjCdtbkOnbl04MzsKw/exec';
  const iframeRef = useRef(null); // Ref to access the iframe element
  const [loading, setLoading] = useState(false); // State to control loader visibility
  const [buttonDisabled, setButtonDisabled] = useState(false); // State to control button disabled state

  const handleHomeClick = () => {
    setLoading(true); // Show the loader
    setButtonDisabled(true); // Disable the button

    // Reload the iframe immediately
    if (iframeRef.current) {
      iframeRef.current.src = googleWebAppUrl; // Reset iframe src to reload the Google Web App
    }

    // Hide the loader after 2.5 seconds
    setTimeout(() => {
      setLoading(false); // Hide the loader
    }, 2500);

    // Enable the button after 4 seconds
    setTimeout(() => {
      setButtonDisabled(false); // Enable the button
    }, 4000);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        backgroundColor: '#ffffff', // Match this with the Google Web App's background
      }}
    >
      {/* Loader */}
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white overlay
            zIndex: 1001,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '4px solid #3498db',
              borderTop: '4px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      )}

      {/* Home Button */}
      <button
        onClick={handleHomeClick}
        disabled={buttonDisabled} // Disable button when `buttonDisabled` is true
        style={{
          position: 'fixed',
          bottom: '20px', // Position at the bottom
          right: '20px', // Position on the right
          zIndex: 1000,
          backgroundColor: buttonDisabled ? '#b0c4de' : '#3498db', // Gray background when disabled
          border: 'none', // No border
          borderRadius: '50%', // Circular shape
          width: '60px', // Slightly larger button
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: buttonDisabled ? 'not-allowed' : 'pointer', // Change cursor when disabled
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
          transition: 'transform 0.2s, box-shadow 0.2s', // Smooth hover effect
        }}
        onMouseEnter={(e) => {
          if (!buttonDisabled) {
            e.target.style.transform = 'scale(1.1)'; // Scale up on hover
            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)'; // Stronger shadow on hover
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'; // Reset scale
          e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'; // Reset shadow
        }}
      >
        <FontAwesomeIcon
          icon={faHome}
          style={{
            fontSize: '30px', // Icon size
            color: 'white', // White icon color for contrast
          }}
        />
      </button>

      {/* iFrame */}
      <iframe
        ref={iframeRef}
        src={googleWebAppUrl}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        scrolling="no"
        title="Google Web App"
      />
    </div>
  );
};

export default App;