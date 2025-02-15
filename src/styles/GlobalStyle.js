import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #FFE4E1;
    --secondary: #DBA17C;
    --accent: #FFB6C1;
    --text: #4A4A4A;
    --background: #FFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: var(--text);
    background: var(--background);
    line-height: 1.6;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
