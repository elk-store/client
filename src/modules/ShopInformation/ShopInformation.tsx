import React from 'react'
import styled from 'styled-components'

import { Card } from './Card'
import { Container } from 'common/UI'

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-white);
  border-radius: 0.25rem;

  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`

const ShopInformation: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Card
          title="free shipping"
          description="every day / every order"
          conditions="all order over $100"
        />
        <Card
          title="friendly support"
          description="24/7 dedicated support"
          conditions="only in USA"
        />
        <Card
          title="secure"
          description="money back guarantee"
          conditions="conditions apply"
        />
      </Wrapper>
    </Container>
  )
}

export { ShopInformation }
