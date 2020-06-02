import styled, { css } from 'styled-components';

const BREAKPOINTS: Array<{ minWidth: number; width: number }> = [
  { minWidth: 576, width: 540 },
  { minWidth: 767, width: 720 },
  { minWidth: 960, width: 920 },
  { minWidth: 992, width: 960 },
  { minWidth: 1200, width: 1140 },
  { minWidth: 1520, width: 1450 },
];

const Container = styled.div`
  margin: auto;
  padding: 1rem;
  max-width: 100%;

  ${BREAKPOINTS.map(({ minWidth, width }) => {
    return css`
      @media (min-width: ${minWidth}px) {
        width: ${width}px;
      }
    `;
  })}
`;

export { Container };
