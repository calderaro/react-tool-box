import * as React from 'react';
import { classes } from 'typestyle';
import { InputError } from '../InputError';
import { InputLabel } from '../InputLabel';
import styles from './styles';

export interface InputNumberFormattedProps {
  marker?: string;
  id?: string;
  value: number;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  containerClassname?: string;
  inputClassname?: string;
  buttonLabel?: string;
  buttonIcon?: React.ComponentType<{ className: string }>;
  error?: string;
  showLabel?: boolean;
  showError?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
  onChange?: (value: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  onHelp?: () => void;
}

export const InputNumberFormatted: React.FC<InputNumberFormattedProps> = (props) => {
  const {
    marker,
    id,
    value,
    label,
    onChange,
    placeholder,
    disabled,
    readOnly,
    containerClassname,
    inputClassname,
    onFocus,
    onBlur,
    onClick,
    buttonLabel,
    buttonIcon: Icon,
    onButtonClick,
    error,
    showLabel,
    showError
  } = props;

  const ref = React.useRef<HTMLInputElement | null>(null);
  const lastValue = React.useRef('');
  const [isFocus, setFocus] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.value = value.toLocaleString('en', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      lastValue.current = value.toLocaleString('en', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }, [marker]);

  return (
    <div className={classes(styles.container, containerClassname)}>
      <InputLabel showLabel={showLabel} label={label} id={id} />
      <div className={classes(styles.wrapper, { [styles.wrapperFocused]: isFocus })}>
        <input
          id={id}
          className={classes(styles.input, inputClassname)}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={(e) => {
            setFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            onBlur?.(e);
          }}
          onClick={onClick}
          autoComplete="off"
          style={{ borderRightWidth: buttonLabel ? 0 : 1 }}
          ref={ref}
          onChange={(e) => {
            const selection = e.target.selectionStart ? e.target.selectionStart : 0;
            const c = e.target.value
              .trim()
              .replace(/\,/g, '')
              .replace(/((?![0-9.,]).)*/g, '');

            const n = Number(c);
            const parts = c.split('.');

            const t = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + (parts.length > 1 ? '.' + parts[1] : '');

            const toAdd = t.length - e.target.value.length;

            if (!isNaN(n)) {
              lastValue.current = t;
              e.target.value = t;
              e.target.setSelectionRange(selection + toAdd, selection + toAdd);
              onChange?.(n, e);
            } else {
              e.target.value = lastValue.current;
            }
          }}
        />
        {onButtonClick ? (
          <button
            className={styles.button}
            onClick={() => onButtonClick?.()}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          >
            {buttonLabel}
            {Icon ? <Icon className={styles.icon} /> : null}
          </button>
        ) : null}
      </div>
      <InputError showError={showError} error={error} />
    </div>
  );
};

InputNumberFormatted.defaultProps = {
  showError: true,
  showLabel: true
};
