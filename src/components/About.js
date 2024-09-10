import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import selfie from './images/me.png';

const AboutSection = styled.section`
  color: ${({ theme }) => theme.text};
  padding: 100px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(min-width: 768px) {
    flex-direction: row;
    padding: 100px 50px;
  }

  .about-content {
    flex: 1;
    padding: 20px;
    text-align: center;

    @media(min-width: 768px) {
      text-align: left;
    }
    
    h2 {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.sectionTitle};
      margin-bottom: 20px;
    }
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 15px;
    }
  }

  .about-image {
    flex: 1;
    text-align: center;
    margin-bottom: 30px;

    @media(min-width: 768px) {
      margin-bottom: 0;
      text-align: right;
      padding-right: 50px;
    }

    img {
      width: 100%;
      max-width: 300px;
      height: auto;
      border-radius: 50%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
`;

const About = ({ theme }) => {
  const [key, setKey] = useState(0);

  // Reset image animation on theme change
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [theme]);

  return (
    <AboutSection id="about">
      <motion.div
        className="about-image"
        key={`image-${key}`} // Reset animation on theme change
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }} // Slow fade-in
      >
        <img src={selfie} alt="Otto Tuhkunen" />
      </motion.div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a passionate developer specializing in web apps, especially those using React and map-based tools such as Leaflet and Mapbox.
        </p>
        <p>
          The aviation industry is close to my heart which is why many of my non-profit projects are related to flight operations or Air Traffic Services.
        </p>
        <p>
          I enjoy designing and developing modern User Interfaces, and thus I have gained experience mostly in frontend development.
        </p>
        <p>
          I am about to finish my <em>Business Information Technologies</em> studies at Tampere University of Applied Siences.
        </p>
        <p>Enjoy! 😊</p>
      </div>
    </AboutSection>
  );
};

export default About;
