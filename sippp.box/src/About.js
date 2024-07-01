import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function About() {
  useEffect(() => {
    document.title = 'About SiPPP';
  }, []);

  return (
    <div id="sippp">
        <div className="container content">
        <Link to="/">
            <img src="https://www.sippp.box/sippp-logo-transparent.png" className="about-logo" alt="logo" />
        </Link>
        <h1>SiPPP: the Simple Photo Provenance Protocol</h1>

        <h2>What</h2>
        <p>SiPPP, the Simple Photo Provenance Protocol, is a straightforward method 
            for registering unaltered camera photos on the Base blockchain via a mobile app.
            This protocol ensures that anyone viewing the photo can verify its authenticity, 
            confirming it was taken with a camera and not altered or generated by AI.
            Additionally, SiPPP verifies who took the photo and when it was taken, 
            providing an extra layer of credibility.
        </p>
 
        <h2>Why</h2>
        <p>AI is dominating the headlines, it's hard to tell if photos are real, enhanced, 
            misinformation, bullying, or just something we've never seen before. 
            Many people are harmed as a result. As we scroll through 
            socials or watch the news, there's no simple, accessible way to verify 
            photo provenance, 
            which affects our confidence and our decision making. Impressionable minds 
            will believe absurdity on socials and harm themselves striving to achieve 
            a false standard; Misinformation will subtley work its way as people can't 
            easily differentiate; Real information may be dismissed and rob someone of 
            justice; Unrealistic beauty standards may lead to depression or worse. 
            We need an "at a glance" solution to verify a photo hasn't been altered, 
            to verifying photo provenance.
        </p>

        <h2>How</h2>
        <p>SiPPP, the Simple Photo Provenance Protocol, ensures the authenticity and
            integrity of photos registered on the Base blockchain. Here's a
            step-by-step explanation of how it works:
        </p>
        <h3>The Photo</h3>
        <p>
            To prove that a photo is genuine, unaltered, and original, the SiPPP 
            app pins the photo, along with its detailed metadata, to IPFS (InterPlanetary 
            File System). The unique IPFS hash generated from this process is then 
            registered with the SiPPP smart contract, ensuring a permanent and tamper-proof 
            record.
        </p>

        <h3>The User</h3>
        <p>
            Users authenticate through Privy, a secure identity provider. SiPPP creates a 
            wallet on behalf of each authenticated user. This wallet is crucial for 
            signing the transaction that registers the photo with the SiPPP smart contract 
            and for paying the necessary gas fees. This process ensures that the photo is 
            linked to a verified user, adding a layer of trust.
        </p>

        <h3>The App</h3>
        <p>
            Verifying the app is critical because we need to ensure that nobody can
            submit altered photos to the smart contract. The smart contract needs to 
            reject transactions that are not from the app. We achieve this by submitting
            a signature generated from the IPFS hash and a private key. This signature
            mechanism ensures that only photos registered through the official SiPPP
            app are accepted, maintaining the integrity of the protocol.
        </p>

        <h3>The Device</h3>
        <p>
            For further security, the SiPPP app performs several device integrity checks, 
            such as verifying the absence of superuser binaries, root management apps, 
            and abnormal file permissions. If a device fails these checks, the app will 
            not proceed with the photo registration, ensuring that only photos taken on 
            secure, unaltered devices are registered.
        </p>

        <h3>Verification</h3>
        <p>
            Any user can verify a registered photo by comparing the hash of the photo 
            to the hash stored in the SiPPP smart contract. This straightforward 
            verification process confirms that the photo is authentic and has not been 
            tampered with since its registration.
        </p>

        </div>
    </div>
  );
}

export default About;
