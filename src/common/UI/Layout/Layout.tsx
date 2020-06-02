import React from 'react';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body,
    html {
      background-color: ${theme.colors.light};
      font-family: ${theme.settings.fontFamilyBase};
    }

    :root {
      ${({ theme: { colors, fontSizes } }) => css`
        /* Colors */
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-light: ${colors.light};

        --color-black: ${colors.black};
        --color-black-light: ${colors['black-light']};
        --color-black-lighter: ${colors['black-lighter']};
        --color-grey: ${colors.grey};
        --color-white: ${colors.white};
        --color-white-light: ${colors['white-light']};
        --color-white-lighter: ${colors['white-lighter']};

        --color-error: ${colors.error};

        /* Font sizes */
        --size-small: ${fontSizes.small};
        --size-normal: ${fontSizes.normal};
        --size-medium: ${fontSizes.medium};
        --size-heading: ${fontSizes.heading};
        --size-title: ${fontSizes.title};
        --size-huge: ${fontSizes.huge};
      `}
    }
  `}
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export { Layout };
