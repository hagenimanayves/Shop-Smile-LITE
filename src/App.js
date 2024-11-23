import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const googleWebAppUrl = 'https://script.google.com/macros/s/AKfycbyVazz7CYM31Ig1Vi1sCFDrNol02ZnOZ54Tzhao8h6w_fy5vHE5vb1HkES0TNnZSY2KOw/exec';
  const iframeRef = useRef(null); // Ref to access the iframe element

  const handleHomeClick = () => {
    if (iframeRef.current) {
      iframeRef.current.src = googleWebAppUrl; // Reset iframe src to reload the Google Web App
    }
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
{/* Home Button */}
<button
  onClick={handleHomeClick}
  style={{
    position: 'fixed',
    bottom: '20px', // Position at the bottom
    right: '20px', // Position on the right
    zIndex: 1000,
    backgroundColor: '#3498db', // Beautiful blue background
    border: 'none', // No border
    borderRadius: '50%', // Circular shape
    width: '60px', // Slightly larger button
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
    transition: 'transform 0.2s, box-shadow 0.2s', // Smooth hover effect
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'scale(1.1)'; // Scale up on hover
    e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)'; // Stronger shadow on hover
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
