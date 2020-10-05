import { stylesheet } from 'typestyle';

export interface ButtonTheme {
  backgroundColor: string;
  backgroundColorHover: string;
  textColor: string;
  textColorHover: string;
  borderColor: string;
  borderColorHover: string;
}

export const defaultColors: ButtonTheme = {
  backgroundColor: '#4b7af3',
  backgroundColorHover: '#5A6EBE',
  textColor: '#fff',
  textColorHover: '#fff',
  borderColor: '#4b7af3',
  borderColorHover: '#4b7af3'
};

export const whiteColors: ButtonTheme = {
  backgroundColor: '#fff',
  backgroundColorHover: '#e4e8f0',
  textColor: '#595b97',
  textColorHover: '#FFF',
  borderColor: '#e4e8f0',
  borderColorHover: '#e4e8f0'
};

export const greenColors: ButtonTheme = {
  backgroundColorHover: '#4b7cf3',
  backgroundColor: '#41b883',
  textColor: '#fff',
  textColorHover: '#fff',
  borderColor: '#41b883',
  borderColorHover: '#41b883'
};

export const grayColors: ButtonTheme = {
  backgroundColor: '#f2f4f8',
  backgroundColorHover: '#dadde3',
  textColor: '#595c97',
  textColorHover: '#fff',
  borderColor: '#f2f4f8',
  borderColorHover: '#f2f4f8'
};

export const lightRedColors: ButtonTheme = {
  backgroundColor: '#FFF',
  backgroundColorHover: '#FFF',
  textColor: '#f5212e',
  textColorHover: '#f5212e',
  borderColor: '#f5212e',
  borderColorHover: '#f5212e'
};

export const clearColors: ButtonTheme = {
  backgroundColor: 'transparent',
  backgroundColorHover: 'transparent',
  textColor: '#595b97',
  textColorHover: '#595b97',
  borderColor: 'transparent',
  borderColorHover: 'transparent'
};

export function applyButtonTheme(theme: ButtonTheme) {
  return {
    color: theme.textColor,
    background: theme.backgroundColor,
    borderWidth: 1,
    boderStyle: 'solid',
    borderColor: theme.borderColor,

    $nest: {
      '&:hover': {
        background: theme.backgroundColorHover,
        borderColor: theme.borderColorHover,
        color: theme.textColorHover
      }
    }
  };
}

const styles = stylesheet({
  buttonContainer: {},
  button: {
    borderRadius: '0.2em',
    color: defaultColors.textColor,
    backgroundColor: defaultColors.backgroundColor,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: defaultColors.borderColor,
    fontSize: '1em',
    minWidth: '10em',
    padding: '0.5em 0.6em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    alignSelf: 'center',
    height: '3em',
    $nest: {
      '&:hover': {
        background: `${defaultColors.backgroundColorHover}`,
        color: defaultColors.textColorHover,
        border: defaultColors.borderColorHover
      }
    }
  },
  buttonSmall: {
    width: 'auto',
    minWidth: 'auto',
    display: 'inline-flex',
    height: '2em'
  },
  iconContainer: {
    width: '1em',
    height: '1em',
    marginRight: '.3em'
  },
  iconImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  buttonWhite: applyButtonTheme(whiteColors),
  buttonGreen: applyButtonTheme(greenColors),
  buttonGray: applyButtonTheme(grayColors),
  buttonLightRed: applyButtonTheme(lightRedColors),
  buttonClear: applyButtonTheme(clearColors)
});

export default styles;
