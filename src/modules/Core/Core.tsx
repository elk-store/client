import React from 'react';

import Header from 'modules/Header';

const Core: React.FC = ({ children }) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};

export { Core };
