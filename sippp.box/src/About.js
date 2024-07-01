import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function About() {
  useEffect(() => {
    document.title = 'About Us';
  }, []);

  return (
    <div id="sippp">
        <div className="container">
        <Link to="/">
            <img src="https://www.sippp.box/sippp-logo-transparent.png" className="about-logo" alt="logo" />
        </Link>
        <h1>SiPPP: the Simple Photo Provenance Protocol</h1>

        <h2>What</h2>
        <p>This is the About page with some placeholder content. Here, you can provide information about your application or organization.</p>

        <h2>Why</h2>
        <p>tktktk</p>

        <h2>How</h2>
        <p>tktktk</p>
        </div>
    </div>
  );
}

export default About;
