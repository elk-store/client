import React from 'react'
import styled from 'styled-components'

import { Text } from 'common/UI'

const Wrapper = styled.div`
  &:nth-child(1),
  &:nth-child(2) {
    border-right: 2px solid #eee;
  }

  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
  margin: 0;
  box-sizing: border-box;

  @media (min-width: 600px) {
    max-width: ${(1 / 3) * 100}%;
  }

  @media (max-width: 599px) {
    &:nth-child(1),
    &:nth-child(2) {
      border-right: none;
    }
  }
`

const Container = styled.div`
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  padding: 1.25rem;
`

const Title = styled(Text)`
  text-transform: uppercase;
  line-height: 1.75rem;
`

const Description = styled(Text)`
  text-transform: capitalize;
  line-height: 1.5rem;
  margin-bottom: 0.3125rem;
`

const Conditions = styled(Text)`
  text-transform: capitalize;
`

const Card: React.FC<{
  title: string
  description: string
  conditions: string
}> = ({ conditions, description, title }) => {
  return (
    <Wrapper>
      <Container>
        <Title as="h5" color="black" size="small" weight="medium">
          {title}
        </Title>
        <Description as="h6" color="black" size="medium" weight="medium">
          {description}
        </Description>
        <Conditions as="span" color="black-lighter" size="small">
          *{conditions}
        </Conditions>
      </Container>
    </Wrapper>
  )
}

export { Card }
