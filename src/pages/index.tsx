import React from 'react';

import Core from 'modules/Core';
import Products from 'modules/Products';
import ShopInformation from 'modules/ShopInformation';
import Slick from 'modules/Slick';

const Index: React.FC = () => {
  return (
    <Core>
      <Slick />
      <ShopInformation />

      <Products />
    </Core>
  );
};

export default Index;
