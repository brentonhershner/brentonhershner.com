import React from 'react';
import Resume from './Resume';
import LinkedIn from './LinkedIn';
import GitHub from './GitHub';
import Twitter from './Twitter';
import Instagram from './Instagram';

const Links = () => {
  return (
    <React.Fragment>
      {/* <Email /> */}
      <Resume />
      <LinkedIn />
      <GitHub />
      <Twitter />
      <Instagram />
    </React.Fragment>
  )
}

export default Links;
