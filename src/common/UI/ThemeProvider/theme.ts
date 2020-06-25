/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable @typescript-eslint/no-empty-interface */

export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'light'
  | 'black'
  | 'black-light'
  | 'black-lighter'
  | 'grey'
  | 'white'
  | 'white-light'
  | 'white-lighter'
  | 'error';
export type FontSizeVariant =
  | 'small'
  | 'normal'
  | 'medium'
  | 'heading'
  | 'title'
  | 'huge';

const FONT_SIZE_BASE = 16;
const pxToRem = (px: number): string => `${px / FONT_SIZE_BASE}rem`;

const theme = {
  settings: {
    fontSizeBase: FONT_SIZE_BASE,
    fontFamilyBase: 'Montserrat',
  },
  colors: {
    primary: '#7950f2',
    secondary: '#ca50f2',
    light: '#f9f7ff',
    black: '#000000',
    'black-light': '#00000080',
    'black-lighter': '#00000040',
    grey: '#262525',
    white: '#ffffff',
    'white-light': '#ffffff70',
    'white-lighter': '#ffffff15',
    error: '#b71c1c',
  },
  fontSizes: {
    small: pxToRem(12),
    normal: pxToRem(14),
    medium: pxToRem(16),
    heading: pxToRem(20),
    title: pxToRem(30),
    huge: pxToRem(48),
  },
};

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export { theme, FONT_SIZE_BASE };
