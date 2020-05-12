import React from 'react'
import styled from 'styled-components'

import { Banner } from './Banner'

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  margin-bottom: 0;
  margin-top: 1rem;
`

const Main = styled.div`
  padding: 0 1rem;
  margin: 0;
  box-sizing: border-box;

  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;

  @media (min-width: 1280px) {
    flex-grow: 0;
    max-width: ${(2 / 3) * 100}%;
    flex-basis: ${(2 / 3) * 100}%;
  }
`

const Slick: React.FC = () => {
  return (
    <Wrapper>
      <Main>
        <Banner image="https://embryo-react.theironnetwork.org/static/media/slider-1.da083e8e.jpg" />
      </Main>
    </Wrapper>
  )
}

export { Slick }
