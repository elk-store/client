import React from 'react'
import styled from 'styled-components'

import { AsideBanner } from './AsideBanner'
import { Banner } from './Banner'

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`

const Main = styled.div`
  padding: 1rem;
  margin: 0;
  box-sizing: border-box;

  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;

  @media (min-width: 1280px) {
    padding-right: 0.35rem;
    max-width: ${(2 / 3) * 100}%;
    flex-basis: ${(2 / 3) * 100}%;
  }
`

const Aside = styled.div`
  padding: 1rem;
  margin: 0;
  box-sizing: border-box;

  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;

  @media (min-width: 1280px) {
    padding-left: 0.65rem;
    max-width: ${(1 / 3) * 100}%;
    flex-basis: ${(1 / 3) * 100}%;
  }

  @media (max-width: 1279px) {
    padding-top: 0rem;
  }
`

const Slick: React.FC = () => {
  return (
    <Wrapper>
      <Main>
        <Banner
          title="Big Sale"
          description="Women's Summer Collection"
          image="https://embryo-react.theironnetwork.org/static/media/slider-1.da083e8e.jpg"
        />
      </Main>

      <Aside>
        <AsideBanner
          title="50% OFF"
          description="Men's Winter Collection"
          image="https://embryo-react.theironnetwork.org/static/media/slider-2.bdc46acc.jpg"
        />
        <AsideBanner
          title="Today's Special"
          description="Sale on Jacket"
          image="https://embryo-react.theironnetwork.org/static/media/slider-3.0fb93455.jpg"
        />
      </Aside>
    </Wrapper>
  )
}

export { Slick }
