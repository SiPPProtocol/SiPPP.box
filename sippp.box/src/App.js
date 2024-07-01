import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'SiPPP: the Simple Photo Provenance Protocol';
  }, []);

  const actionUrl = "https://warpcast.com/~/add-cast-action?actionType=post&name=Verify%20with%20SiPPP&icon=verified&postUrl=https%3A%2F%2Fsi-ppp-action.vercel.app%2Fapi%2Faction"

  return (
    <div id="sippp">
      <div className="container">
        <img src="https://www.sippp.box/sippp-logo-transparent.png" className="logo" alt="logo" />
        <h1>
          Sippp, or it didn't happen.
        </h1>
        <div className="button-container">
          <Link to="/about" className="button">
            Learn More
          </Link>
          <a
            className="button disabled"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Download APK
          </a>
          <a
            className="button"
            href={actionUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Farcaster Action
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
