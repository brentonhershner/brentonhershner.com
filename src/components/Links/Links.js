import React from 'react';
import Resume from './Resume';
import LinkedIn from './LinkedIn';
import Github from './Github';
import Twitter from './Twitter';
import Instagram from './Instagram';

const Links = () => {
  return (
    <React.Fragment>
      {/* <Email /> */}
      <Resume />
      <LinkedIn />
      <Github />
      <Twitter />
      <Instagram />
    </React.Fragment>
  )
}

export default Links;
