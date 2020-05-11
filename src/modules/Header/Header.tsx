import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import { Search } from './Search'
import { HEADER_HEIGHT } from 'common/sizes'
import { Container as BaseContainer, Text } from 'common/UI'

const Background = styled.header`
  background: var(--color-primary);
  width: 100%;
  height: ${HEADER_HEIGHT};
  box-sizing: border-box;
  z-index: 1100;

  position: fixed;
  right: 0;
  top: 0;
  left: auto;
`

const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;

  width: 90%;
  padding-top: 0;
`

const Title = styled(Text)`
  cursor: pointer;

  @media (min-width: 1025px) {
    margin-left: 0.75rem;
    text-align: left;
    position: relative;
  }

  @media (min-width: 768px) {
    margin-right: 0;
    flex: 0 1 auto;
  }
`

const Header: React.FC = () => {
  return (
    <>
      <Background>
        <Container>
          <Link href="/">
            <Title size="heading">elk.</Title>
          </Link>

          <Search />
        </Container>
      </Background>
    </>
  )
}

export { Header }
