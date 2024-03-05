import {View} from 'react-native';
import React from 'react';
import {ThemeChangeContext} from '../../context/themeChangeContext';
import {Switch, useTheme} from 'react-native-paper';
import {MyMD3Theme} from '../../style/colors';
import {useStyles} from './style';
const HomeScreen = () => {
  const theme = useTheme() as MyMD3Theme;

  const {isDarkMode, handleDarkMode} = React.useContext(ThemeChangeContext);
  React.useEffect(() => {
    console.log('inside the home screen ', isDarkMode);
  }, [isDarkMode]);
  const styles = useStyles();
  return (
    <View style={styles.mainContainer}>
      <Switch
        value={isDarkMode}
        onChange={() => handleDarkMode()}
        trackColor={theme.colors.switch.trackColor}
      />
    </View>
  );
};

export default HomeScreen;
