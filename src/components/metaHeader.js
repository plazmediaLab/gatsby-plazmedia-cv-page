import React from 'react';
import { Helmet } from "react-helmet";
import favicon from '../img/isologo.png';

const MetaHeader = () => {
  return (
    <Helmet>
      <title>Plazmedia Briefcase</title>
      <link rel="icon" href={favicon} />
      <meta name="theme-color" content="#191919" />
    </Helmet>
  );
};

export default MetaHeader;