import React from 'react';
import styled from 'styled-components';

import { AsideBanner } from './AsideBanner';
import { Banner } from './Banner';
import { Container } from 'common/UI';

const Wrapper = styled.div`
  padding: 3rem 0;
`;

const Flex = styled.div`
  width: calc(100% + 2rem);
  margin: -1rem;

  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const Main = styled.div`
  padding: 0 1rem;
  margin: 0;
  margin-bottom: 1.5625rem;
  box-sizing: border-box;

  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;

  @media (min-width: 1280px) {
    margin-bottom: 0;
    max-width: ${(2 / 3) * 100}%;
    flex-basis: ${(2 / 3) * 100}%;
  }
`;

const Aside = styled.div`
  padding: 0 1rem;
  margin: 0;
  box-sizing: border-box;

  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;

  @media (min-width: 600px) {
    display: flex;
  }

  @media (min-width: 960px) {
    display: block;
  }

  @media (min-width: 1280px) {
    margin-bottom: 0;
    max-width: ${(1 / 3) * 100}%;
    flex-basis: ${(1 / 3) * 100}%;
  }
`;

const Slick: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Flex>
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
        </Flex>
      </Container>
    </Wrapper>
  );
};

export { Slick };
