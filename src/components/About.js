import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import fssImage from './images/fss.png';

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

  .banner-image {
    flex: 1;
    text-align: center;

    @media(min-width: 768px) {
      margin-bottom: 0;
      text-align: right;
      padding-right: 50px;
    }

    img {
      width: 100%;
      max-width: 540px;
      height: auto;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
`;

const About = ({ theme }) => {
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [theme]);

  return (
    <AboutSection id="about">
      <div className="banner-image">
        <img src={fssImage} alt="Event banner" />
      </div>
      <div className="about-content">
        <p>
        VATSIM Scandinavia invites you to take part in a journey to the home of the original Santa Claus, just in time for the Christmas holiday.
        </p>
        <p>
        Fly and See Santa, the largest annual Christmas event in VATSIM skies, takes place at three airports in the northernmost reaches of Europe. Experience the magic of snow-covered landscapes and icy runways as you arrive at Rovaniemi, Tromsø, and Kiruna—airports nestled in the stunning wilderness of northern Europe. Throughout December, the airspace buzzes with flights full of passengers eager to visit Santa's winter wonderland. We hope you’ll join us for this unforgettable event!
        </p>
      </div>
    </AboutSection>
  );
};

export default About;
