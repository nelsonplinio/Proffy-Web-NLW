import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/global';
import { lightTheme } from './assets/themes/light';

import { Landing } from './pages/Landing';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Landing />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
