import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

export interface UserMenuButton {
  label: string;
  to: string;
}

export interface UserMenuProps {
  onLogout: () => void;
  open: boolean;
  buttons: UserMenuButton[];
}

const usermenu = style({
  position: 'absolute',
  top: 'calc(100% + 0.9em)',
  right: 0,
  background: '#fff',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  borderRadius: 6,
  borderTop: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  boxShadow: '2px 2px 4px 1px rgba(0, 0, 0, 0.07)',
  padding: '0.65em 1em'
});

const usermenuButton = style({
  display: 'block',
  padding: '0.65em 0',
  width: '9em',
  whiteSpace: 'nowrap',
  textAlign: 'left',
  fontSize: '1em',
  color: '#666',
  minHeight: 16,
  cursor: 'pointer',
  background: 'none',
  outline: 'none',
  border: 'none',
  textDecoration: 'none',
  $nest: {
    '&:hover': {
      fontWeight: 500
    }
  }
});

const separator = style({
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  margin: '0.65em 0'
});

export const UserMenu: React.FC<UserMenuProps> = (props: UserMenuProps) => {
  const { onLogout, open, buttons } = props;
  return (
    <div className={usermenu} style={{ display: open ? 'block' : 'none' }}>
      {buttons.map(({ label, to }, index) => (
        <Link key={to + index} to={to} className={usermenuButton}>
          {label}
        </Link>
      ))}
      <div className={separator} />
      {onLogout ? (
        <button onClick={onLogout} className={usermenuButton}>
          Cerrar sesión
        </button>
      ) : null}
    </div>
  );
};
