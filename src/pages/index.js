import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';

export default function Home() {
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
