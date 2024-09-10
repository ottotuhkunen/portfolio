// src/components/Contact.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaDiscord, FaLinkedin, FaGithub, FaEnvelope, FaLink } from 'react-icons/fa';
import { color } from 'framer-motion';

// Keyframes for wobble effect
const wobble = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(15deg); }
  30% { transform: rotate(-10deg); }
  45% { transform: rotate(5deg); }
  60% { transform: rotate(-5deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
`;

const ContactSection = styled.section`
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 100px 20px;
  background: ${({ theme }) => theme.contactBackground};

  h2 {
    color: ${({ theme }) => theme.sectionTitle};
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Space between icons */
  margin-top: 20px;
`;

const IconWrapper = styled.a`
  color: ${({ theme }) => theme.iconColor};
  font-size: 2.4rem;
  transition: color 0.3s ease-in-out;
  cursor: pointer;
  line-height:0;

  &:hover {
    animation: ${wobble} 1s ease-in-out;
    color: ${({ theme }) => theme.iconHoverColor};
  }
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
  height:20px;
`;

const Contact = () => {
  const [hoveredIcon, setHoveredIcon] = useState('');

  const handleMouseEnter = (mediaName) => {
    setHoveredIcon(
      <>
        <FaLink /> {mediaName}
      </>
    );
  };

  const handleMouseLeave = () => {
    setHoveredIcon('');
  };

  return (
    <ContactSection id="contact">
      <h2>Contact Me! 😉</h2>
      <p>You can reach me by sending a message in one of the medias listed below.</p>
      <IconContainer>
        <IconWrapper
          href="https://discord.com/users/277722172393259009"
          target="_blank"
          aria-label="Discord"
          onMouseEnter={() => handleMouseEnter('Discord')}
          onMouseLeave={handleMouseLeave}
        >
          <FaDiscord />
        </IconWrapper>
        <IconWrapper
          href="https://www.linkedin.com/in/ottotuhkunen/"
          target="_blank"
          aria-label="LinkedIn"
          onMouseEnter={() => handleMouseEnter('LinkedIn')}
          onMouseLeave={handleMouseLeave}
        >
          <FaLinkedin />
        </IconWrapper>
        <IconWrapper
          href="https://github.com/ottotuhkunen"
          target="_blank"
          aria-label="GitHub"
          onMouseEnter={() => handleMouseEnter('GitHub')}
          onMouseLeave={handleMouseLeave}
        >
          <FaGithub />
        </IconWrapper>
        <IconWrapper
          href="mailto:otto.tuhkunen@hotmail.com"
          aria-label="Email"
          onMouseEnter={() => handleMouseEnter('Email')}
          onMouseLeave={handleMouseLeave}
        >
          <FaEnvelope />
        </IconWrapper>
      </IconContainer>
      <InfoText>
        {hoveredIcon}</InfoText>
      <p style={{ marginTop: '20px' }}>© Otto Tuhkunen 2024</p>
    </ContactSection>
  );
};

export default Contact;
