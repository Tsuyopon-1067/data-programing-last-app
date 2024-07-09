import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  fontColor: string;
  borderColor: string;
  tabFontColor: string;
  selectedTabFontColor: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const DarkThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const fontColor = isDarkMode ? "#E7E9EA" : "#0F1419";
  const borderColor = isDarkMode ? "#2F3336" : "#e1e8ed";
  const tabFontColor = isDarkMode ? "#71767B" : "#536471";
  const selectedTabFontColor = isDarkMode ? "#E7E9EA" : "#0F1419";

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchMedia.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    matchMedia.addEventListener("change", handleChange);

    return () => matchMedia.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        fontColor,
        borderColor,
        tabFontColor,
        selectedTabFontColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
