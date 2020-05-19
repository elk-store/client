import React from 'react'

import Core from 'modules/Core'
import ShopInformation from 'modules/ShopInformation'
import Slick from 'modules/Slick'

const Index: React.FC = () => {
  return (
    <Core>
      <Slick />
      <ShopInformation />
    </Core>
  )
}

export default Index
