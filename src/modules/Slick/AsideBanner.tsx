import React from 'react'
import styled from 'styled-components'

import { Text } from 'common/UI'

const Card = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.3125rem;
  background-color: var(--color-white);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: 600px) {
    margin-bottom: 0;
  }

  @media (min-width: 1280px) {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1279px) {
    margin: 0 1rem;
    width: calc(50% - 1rem);

    &:nth-child(1) {
      margin-left: 0;
    }

    &:nth-child(2) {
      margin-right: 0;
    }
  }

  @media (max-width: 599px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;

    &:nth-child(1) {
      margin-bottom: 1rem;
    }
  }
`

const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  align-items: center;
  justify-content: flex-end;
  display: flex;
`

const Holder = styled.div`
  width: 45%;
  text-align: center;
  padding-right: 1rem;
  pointer-events: visible;
`

const AsideBanner: React.FC<{
  image: string
  title: string
  description: string
}> = ({ image, title, description }) => {
  return (
    <Card>
      <img src={image} alt="Hello" />

      <Content>
        <Holder>
          <Text size="medium" color="black">
            {title}
          </Text>
          <Text size="heading" color="black" weight="bold">
            {description}
          </Text>
        </Holder>
      </Content>
    </Card>
  )
}

export { AsideBanner }
