import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @keyframes gradientAnimation {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.defaultBackground};
    background-size: 400% 400%;
    color: ${({ theme }) => theme.text};
    animation: gradientAnimation 15s ease infinite;
    scroll-behavior: smooth;
    overflow-x: hidden;
    position: relative;
  }

  h1, h2, h3 {
    color: ${({ theme }) => theme.text};
    font-weight: 700;
  }

  h2 {
    font-size: 2.2rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  a {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: none;
  }
  
  a:hover, a:focus {
    color: ${({ theme }) => theme.linkHoverColor};
    text-decoration: underline;
  }

  button {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.text};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  button:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }

  section {
    padding: 100px 20px;
    background: none;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-family: 'Poppins', sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  .projects-section {
    background: ${({ theme }) => theme.sectionThreeBackground};
    background-size: 400% 400%;
    animation: gradientAnimation 20s ease infinite;
  }
`;
