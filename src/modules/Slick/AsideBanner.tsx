import React from 'react'
import styled from 'styled-components'

import { Text } from 'common/UI'

const Card = styled.div`
  position: relative;

  border-radius: 0.3125rem;
  background-color: var(--color-white);

  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: 1280px) {
    &:nth-child(1) {
      margin-bottom: 1.2rem;
    }
  }

  @media (max-width: 1279px) {
    display: inline-block;
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
      margin-bottom: 1.5625rem;
    }
  }
`

const ImageWrapper = styled.img`
  width: 100%;
  border-radius: 0.3125rem;
`

const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
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
      <ImageWrapper src={image} alt="Hello" />

      <Content>
        <Holder>
          <div data-cy="slick">
            <Text size="medium" color="black">
              {title}
            </Text>
            <Text size="heading" color="black" weight="bold">
              {description}
            </Text>
          </div>
        </Holder>
      </Content>
    </Card>
  )
}

export { AsideBanner }
