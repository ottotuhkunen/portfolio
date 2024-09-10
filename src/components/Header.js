import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  text-align: center;
  padding: 150px 20px;
  background-image: ${({ theme }) => theme.headerImage};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.headerBackground};
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.titleText};
  text-shadow: ${({ theme }) => theme.headerShadow};
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const Header = ({ theme }) => {
  const [key, setKey] = useState(0);

  // Reset animation key on theme change
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [theme]);

  return (
    <HeroSection>
      <Title
        key={`title-${key}`} // Ensure animation resets on theme change
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Otto Tuhkunen
      </Title>
      <Subtitle
        key={`subtitle-${key}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Web App Developer | React | Map-based Apps | Aviation Tools
      </Subtitle>
    </HeroSection>
  );
};

export default Header;
