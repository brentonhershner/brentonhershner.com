import React from "react";
import { Button } from "./ui/button";

interface DarkToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const SunIcon: React.FC = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"
    />
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
    />
  </svg>
);

const DarkToggle: React.FC<DarkToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="absolute z-[1000] right-0 m-1">
      <Button
        aria-label="dark mode toggle"
        size="icon"
        variant="ghost"
        onClick={toggleDarkMode}
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
};

export default DarkToggle; 