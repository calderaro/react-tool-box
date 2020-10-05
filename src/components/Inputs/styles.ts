// For simple customizations

export const Colors = {
  labelColor: '#666',
  borderColor: '#e4e8f0',
  borderColorFocus: '#e4e8f0'
};

export const Sizes = {
  labelFontSize: '.9em',
  borderRadius: 4
};

export const BaseInput = {
  container: {
    padding: '0 0 0 0',
    width: '100%'
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '2em'
  },
  label: {
    padding: '0',
    color: Colors.labelColor,
    fontSize: Sizes.labelFontSize
  },
  errorContaienr: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '2em'
  },
  error: {
    padding: '0',
    color: 'red',
    fontSize: Sizes.labelFontSize
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    transition: '.2s all ease',
    borderRadius: Sizes.borderRadius
  },
  wrapperFocused: {
    borderColor: '#40a9ff',
    boxShadow: '1px 1px 2px 1px rgba(24, 144, 255, 0.15)'
  },
  input: {
    width: '100%',
    height: '2.7em',
    fontSize: '1em',
    background: '#FEFEFE',
    borderRadius: Sizes.borderRadius,
    padding: '0 0.5em',
    outline: 0,
    borderColor: Colors.borderColor,
    borderWidth: '1px',
    borderStyle: 'solid',
    display: 'block',
    $nest: {
      '&:disabled': {
        background: '#E4E8F0'
      }
    }
  }
};
