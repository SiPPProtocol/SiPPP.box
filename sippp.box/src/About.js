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
        <p>AI is dominating the headlines, it's hard to tell if photos are real, 
            misinformation, bullying, or just something we've never seen before, 
            and many people develop health issues as a result. As we scroll through 
            socials or watch the news, there's no simple way to verify photo provenance, 
            which affects our confidence and our decision making. Impressionable minds 
            will believe absurdity on socials and harm themselves striving to achieve 
            a false standard; Misinformation will subtley work its way as people can't 
            easily differentiate; Real information may be dismissed and rob someone of 
            justice; Unrealistic beauty standards may lead to depression or worse. 
            We need an "at a glance" solution to verify a photo hasn't been altered, 
            to verifying photo provenance.</p>

        <h2>How</h2>
        <p>tktktk</p>
        </div>
    </div>
  );
}

export default About;
