import React from 'react';

const isBrowser: boolean = typeof window !== 'undefined';

const stringToBool = (str: string | boolean | null): boolean | undefined => {
  if (str === true || str === 'true') { return true; }
  if (str === false || str === 'false') { return false; }
  return undefined;
};

// For backward compatibility
const darkModeStored: boolean | null = isBrowser ?
  stringToBool(localStorage.getItem('darkMode')) ?? null : null;

const darkModePreference: boolean | null = isBrowser ?
  (window.matchMedia('(prefers-color-scheme: dark)').matches ?
  true : false ) : null;

export const previousOrPreferredTheme: boolean = darkModeStored ??
  darkModePreference ?? false;

// React hook for detecting system dark mode preference
export const useSystemDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (!isBrowser) return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  React.useEffect(() => {
    if (!isBrowser) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    // Add listener for modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return isDarkMode;
}; 