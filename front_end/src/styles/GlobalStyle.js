import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color:rgb(27, 27, 27);
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: blue;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 0.75rem;
    border-bottom: 1px solid #ccc;
  }
`;

export default GlobalStyle;