import React from 'react';

const App = () => {
  const googleWebAppUrl = 'https://script.google.com/macros/s/AKfycbwrMPkfpOaA0xgHrb5iWEerIK9GRNJFpSMwbZ4-htN_0M-OnoXSTmhSVwdXUzYveZI2VQ/exec';

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
      <iframe
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
