import { style } from 'typestyle';

export interface ButtonTheme {
  button: {
    borderRadius: number | string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number | string;
    borderStyle: string;

    backgroundColorHover: string;
    borderColorHover: string;
    borderWidthHover: number | string;
    borderStyleHover: string;
  };
  label: {
    color: string;
    colorHover: string;
    fontSize: number | string;
  };
}

export const defaultTheme: ButtonTheme = {
  button: {
    borderRadius: 4,
    backgroundColor: '#f2f4f8',
    borderColor: '#f2f4f8',
    borderWidth: 1,
    borderStyle: 'solid',

    backgroundColorHover: '#dadde3',
    borderColorHover: '#f2f4f8',
    borderWidthHover: 1,
    borderStyleHover: 'solid'
  },
  label: {
    color: '#fff',
    colorHover: '#fff',
    fontSize: '.9em'
  }
};

export function applyButtonTheme(theme: ButtonTheme) {
  return {
    borderRadius: theme.button.borderRadius,
    backgroundColor: theme.button.backgroundColor,
    borderColor: theme.button.borderColor,
    borderWidth: theme.button.borderWidth,
    borderStyle: theme.button.borderStyle,
    $nest: {
      '&:hover': {
        background: theme.button.backgroundColorHover,
        borderColor: theme.button.borderColorHover,
        borderWidth: theme.button.borderWidth,
        borderStyle: theme.button.borderStyle,
        $nest: {
          '& > span': {
            color: theme.label.colorHover,
            fontSize: theme.label.fontSize
          }
        }
      },
      '& > span': {
        color: theme.label.color,
        fontSize: theme.label.fontSize
      }
    }
  };
}

export const button = style({
  borderRadius: defaultTheme.button.borderRadius,
  backgroundColor: defaultTheme.button.backgroundColor,
  borderColor: defaultTheme.button.borderColor,
  borderWidth: defaultTheme.button.borderWidth,
  borderStyle: defaultTheme.button.borderStyle,
  fontSize: '1em',
  padding: '0.5em 0.6em',
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      background: defaultTheme.button.backgroundColorHover,
      borderColor: defaultTheme.button.borderColorHover,
      borderWidth: defaultTheme.button.borderWidth,
      borderStyle: defaultTheme.button.borderStyle,
      $nest: {
        '& > span': {
          color: defaultTheme.label.colorHover,
          fontSize: defaultTheme.label.fontSize
        }
      }
    },
    '& > span': {
      color: defaultTheme.label.color,
      fontSize: defaultTheme.label.fontSize
    }
  }
});

export const buttonContainer = style({});

export const buttonSmall = style({
  width: 'auto',
  padding: '.25em .6em'
});
