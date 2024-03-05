import React from 'react';
import ThemeChangeContextProvider from './src/context/themeChangeContext';
import ThemeScreen from './src/screens/themeScreen';

const App = () => {
  return (
    <ThemeChangeContextProvider>
      <ThemeScreen />
    </ThemeChangeContextProvider>
  );
};

export default App;
