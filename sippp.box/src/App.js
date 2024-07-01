import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <div id="sipp">
      <Helmet>
        <title>SiPPP: the Simple Photo Provenance Protocol</title>
      </Helmet>
      <div className="container">
        <img src="https://www.sippp.box/sippp-logo-transparent.png" className="logo" alt="logo" />
        <p>
          Sippp, or it didn't happen.
        </p>
        <div className="button-container">
          <a
            className="button"
            href="https://github.com/SiPPProtocol"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
          <a
            className="button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Download APK
          </a>
          <a
            className="button"
            href="https://example.com/install-farcaster-action"
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
