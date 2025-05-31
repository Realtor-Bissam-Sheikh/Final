import React from 'react';
import { API_BASE_URL } from './config';

const App = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome to VidWink</h1>
      <p>Backend API is located at:</p>
      <code>{API_BASE_URL}</code>
    </div>
  );
};

export default App;