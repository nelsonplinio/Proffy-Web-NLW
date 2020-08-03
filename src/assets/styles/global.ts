import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
      font-size: 60%;
  }
  
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 700px) {
    #root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.colorBackground};
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins ;
  }
`;
