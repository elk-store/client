import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import logoSrc from 'common/assets/logo.svg';

const Logo = styled.img`
  height: 200px;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  vertical-align: top;
  padding: 0 1.5rem !important;
  min-width: 45% !important;

  @media (max-width: 767px) {
    width: 65%;
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`;

const Core: React.FC = ({ children }) => {
  return (
    <>
      <Grid container style={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          sm={7}
          md={5}
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Logo src={logoSrc} />

          <Content>{children}</Content>
        </Grid>
        <Grid
          item
          sm={5}
          md={7}
          style={{ background: 'var(--color-primary)' }}
        />
      </Grid>
    </>
  );
};

export { Core };
