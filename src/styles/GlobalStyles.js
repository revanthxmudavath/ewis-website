import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #0a0e27;
    color: #ffffff;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const colors = {
  primary: '#0a0e27',
  secondary: '#4A90E2',
  accent: '#7B68EE',
  text: '#ffffff',
  textSecondary: '#b0b8d4',
  border: 'rgba(74, 144, 226, 0.3)',
  cardBg: 'rgba(255,255,255,0.05)',
};
