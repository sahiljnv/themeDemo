import React, {createContext} from 'react';
type Props = {
  children?: React.ReactNode;
};
export type ThemeChangeContextType = {
  isDarkMode: boolean;
  handleDarkMode: () => void;
};

export const ThemeChangeContext = createContext<ThemeChangeContextType>({
  isDarkMode: false,
  handleDarkMode: () => {},
});
const ThemeChangeContextProvider = ({children}: Props) => {
  const [isDarkMode, setDarkMode] = React.useState<boolean>(false);
  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
    console.log(isDarkMode, 'inside the context');
  };
  const values = {
    isDarkMode,
    handleDarkMode,
  };
  return (
    <ThemeChangeContext.Provider value={values}>
      {children}
    </ThemeChangeContext.Provider>
  );
};

export default ThemeChangeContextProvider;
