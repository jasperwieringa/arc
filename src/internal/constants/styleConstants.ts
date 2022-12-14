export declare type FontSize =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large'
  | 'xxxx-large';

export declare type FontSpacing = 'dense' | 'normal' | 'loose';

export declare type InputSize = 'small' | 'medium' | 'large';

export declare type ThemePalette = 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export declare type ThemeColor =
  | 'white'
  | 'black'
  | 'blue'
  | 'green'
  | 'grey'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'teal'
  | 'yellow';

export const FONT_SIZES: { [key in FontSize]: FontSize } = {
  'xx-small': 'xx-small',
  'x-small': 'x-small',
  small: 'small',
  medium: 'medium',
  large: 'large',
  'x-large': 'x-large',
  'xx-large': 'xx-large',
  'xxx-large': 'xxx-large',
  'xxxx-large': 'xxxx-large',
};

export const FONT_SPACING: { [key in FontSpacing]: FontSpacing } = {
  dense: 'dense',
  normal: 'normal',
  loose: 'loose',
};

export const INPUT_SIZES: { [key in InputSize]: InputSize } = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export const THEME_PALETTE: { [key in ThemePalette]: ThemePalette } = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
};

export const THEME_COLORS: { [key in ThemeColor]: ThemeColor } = {
  white: 'white',
  black: 'black',
  blue: 'blue',
  green: 'green',
  grey: 'grey',
  orange: 'orange',
  pink: 'pink',
  purple: 'purple',
  red: 'red',
  teal: 'teal',
  yellow: 'yellow',
};
