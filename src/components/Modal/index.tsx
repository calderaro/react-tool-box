import * as React from 'react';
import { style } from 'typestyle';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5em 1em',
  background: 'rgba(0, 0, 0, 0.2)',
  zIndex: 99,
  overflowY: 'auto'
});

const modal = style({
  background: '#fff',
  width: 100,
  maxWidth: 600,
  borderRadius: 1,
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  padding: '7em 4em 4em 4em'
});

export const Modal: React.FC<ModalProps> = ({ children, onClose, open }) => {
  if (!open) {
    return null;
  }
  return (
    <div className={container} onClick={onClose}>
      <div className={modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
