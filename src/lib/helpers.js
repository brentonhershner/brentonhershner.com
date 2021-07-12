const isBrowser = typeof window !== 'undefined'

const stringToBool = (str) => {
  if (str === true || str === 'true') { return true; }
  if (str === false || str === 'false') { return false; }
  return undefined;
}

const darkModeStored = isBrowser ?
  stringToBool(localStorage.getItem('darkMode')) : null;

const darkModePreference = isBrowser ?
  (window.matchMedia('(prefers-color-scheme: dark)').matches ?
  'dark' : 'light') : null;

export const previousOrPreferredTheme = darkModeStored ??
  darkModePreference ?? 'light';
