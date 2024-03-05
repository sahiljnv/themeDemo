import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {MyMD3Theme} from '../../style/colors';

export const useStyles = () => {
  const theme = useTheme() as MyMD3Theme;
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return styles;
};
