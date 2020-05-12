import React from 'react'
import styled from 'styled-components'

import { Container as BaseContainer } from 'common/UI'
import Header from 'modules/Header'

const Container = styled(BaseContainer)`
  padding-top: 1rem;
`

const Core: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export { Core }
