import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import App from '../components/App';

// const stringToBool = (str) => {
//   if (str === true || str === 'true') { return true; }
//   if (str === false || str === 'false') { return false; }
//   return null;
// }

// const isBrowser = typeof window !== "undefined"

export default function Home() {
  // const darkModeQuery = isBrowser ?
  //   window.matchMedia('(prefers-color-scheme: dark)').matches : null;
  // let darkModeStored = isBrowser ? localStorage.getItem('darkMode') : null;
  // const darkModeContext = stringToBool(darkModeStored) ?? darkModeQuery;

  return (

    <div className='application'>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content="Portfolio page for Brenton Hershner. A Software Engineer with a BS in Mechanical Enginering and MBA." />
        <meta name='keywords' content='Software, Engineer, Developer, JavaScript, Full-stack' />
        <meta name='author' content='Brenton Hershner' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='revised' content='BrentonHershner, 7/11/2021' />
        <title>Brenton Hershner</title>
      </Helmet>

      <App/>
    </div >
  )
}
