import * as React from 'react';
import { classes, style } from 'typestyle';
import styles from './styles';
import { Colors, BaseInput, Sizes } from '../styles';
import { InputLabel } from '../InputLabel';
import { InputError } from '../InputError';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface InputSelectOption<T> {
  label: string;
  value: T;
}

export interface InputSelectProps<T> {
  id?: string;
  value?: T;
  placeholder?: string;
  password?: boolean;
  options?: InputSelectOption<T>[];
  onChange?: (value: T, id?: string) => void;
  containerClassname?: string;
  label?: string;
  error?: string;
  showError?: boolean;
  showLabel?: boolean;
}

const selectButton = style({
  ...BaseInput.input,
  zIndex: 2,
  borderRadius: Sizes.borderRadius,
  position: 'relative',
  background: 'transparent',
  display: 'block',
  boxSizing: 'border-box',
  color: Colors.labelColor,
  $nest: {
    '&:focus': {
      borderColor: Colors.borderColorFocus,
      $nest: {
        '& > div': {
          borderColor: Colors.borderColorFocus
        }
      }
    }
  }
});

const buttonLabelContainer = style({
  width: '100%',
  display: 'block',
  textAlign: 'left'
});

const arrowIconContainer = style({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  right: 0,
  height: '100%',
  width: '2.7em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderLeftWidth: 1,
  borderLeftStyle: 'solid',
  borderColor: Colors.borderColor
});

export default function InputSelect<T>(props: InputSelectProps<T>) {
  const [focus, setFocus] = React.useState(false);
  const { id, value, label, onChange, options, placeholder, containerClassname, error, showLabel, showError } = props;
  const selectedOption = options?.find((item) => item.value === value);

  return (
    <div className={classes(styles.container, containerClassname)}>
      <InputLabel showLabel={showLabel} label={label} id={id} />
      <div className={styles.selectWrapper}>
        <div style={{ position: 'relative', height: '2.7em' }}>
          <button
            className={selectButton}
            onFocus={() => setFocus(true)}
            onBlur={() => setTimeout(() => setFocus(false), 150)}
            style={{ borderColor: error ? 'red' : '' }}
          >
            <div className={buttonLabelContainer}>
              {value ? (
                <span>{selectedOption?.label || value}</span>
              ) : (
                <span style={{ color: '#888' }}>{placeholder}</span>
              )}
            </div>
            <div className={arrowIconContainer} style={{ borderColor: error ? 'red' : '' }}>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </button>
        </div>

        <div className={styles.options} style={{ display: focus && options?.length ? 'block' : 'none' }}>
          {options?.map((option, index) => (
            <div onClick={() => onChange?.(option.value)} key={option.label + index} className={styles.option}>
              {option.label}
            </div>
          ))}
        </div>
      </div>
      <InputError error={error} showError={showError} />
    </div>
  );
}

InputSelect.defaultProps = {
  showError: true,
  showLabel: true
};
