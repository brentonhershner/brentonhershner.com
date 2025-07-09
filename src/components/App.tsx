import { useSystemDarkMode } from "../lib/helpers";
import Copyright from "./Copyright";
import Title from "./Title";
// import AboutMe from './AboutMe';
// import Projects from './Projects';
import React from 'react';

const App = () => {
  const isDarkMode = useSystemDarkMode();

  // const toggleDarkMode = () => {
  //   const newDarkMode = !darkMode;
  //   localStorage.setItem("darkMode", newDarkMode);
  //   setDarkMode(newDarkMode);
  // };

  // Apply dark class to html element
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div
      className="flex flex-col h-screen w-screen min-w-[310px] overflow-x-hidden"
    >
      {/* <DarkToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      <Title />
      {/* <AboutMe /> */}
      {/* <Projects /> */}
      <Copyright />
    </div>
  );
};

export default App;
