import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const DarkThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchMedia.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
