import React from 'react';
import HomeScreen from './home_screen';
import {
  DefaultTheme,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import {ThemeChangeContext} from '../context/themeChangeContext';
import {MyMD3Theme, darkColors, lightColors} from '../style/colors';

const CombinedDefaultTheme: MyMD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...lightColors,
  },
};
const CombinedDarkTheme: MyMD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...darkColors,
  },
};
const ThemeScreen = () => {
  const {isDarkMode} = React.useContext(ThemeChangeContext);

  return (
    <PaperProvider
      theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
      <HomeScreen />
    </PaperProvider>
  );
};

export default ThemeScreen;
