import * as React from 'react';
import Cross from '../assets/cross.svg';
import { style } from 'typestyle';

export interface ModalHeaderProps {
  onClose: () => void;
}

const header = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%'
});

const closeButton = style({
  background: 'none',
  outline: 'none',
  display: 'block',
  fontSize: '1em',
  padding: '1em',
  cursor: 'pointer'
});

const closeButtonIcon = style({
  width: '1.4em',
  height: '1.4em',
  display: 'block',
  objectFit: 'contain'
});

export const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => (
  <div className={header}>
    <button className={closeButton} onClick={onClose} name="close">
      <Cross className={closeButtonIcon} />
    </button>
  </div>
);
