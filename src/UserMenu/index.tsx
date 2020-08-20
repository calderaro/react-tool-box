import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { style } from 'typestyle';

interface Props {
  onLogout: () => void;
  open: boolean;
  admin: boolean;
}

const container = style({
  position: 'absolute',
  top: 'calc(100% + 1px)',
  right: '0',
  background: '#fff',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  borderRadius: '6px',
  borderTop: '0',
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0',
  boxShadow: '2px 2px 4px 1px rgba(0, 0, 0, 0.07)',
  padding: '0.65em 1em',
  zIndex: 99
});

const usermenuButton = style({
  display: 'block',
  padding: '0.65em 0',
  width: '9em',
  whiteSpace: 'nowrap',
  textAlign: 'left',
  fontSize: '1em',
  color: '#666',
  minHeight: '16px',
  cursor: 'pointer'
});

const UserMenu: React.FC<Props> = (props: Props) => {
  const { onLogout, open, admin } = props;
  return (
    <div className={container} style={{ display: open ? 'block' : 'none' }}>
      <Link to="/profile" className={usermenuButton}>
        Perfil
      </Link>
      <Link to="/dashboard" className={usermenuButton}>
        Dashboard
      </Link>
      {admin ? (
        <>
          <div className={styles.separator} />
          <Link to="/admin" className={usermenuButton}>
            Admin
          </Link>
        </>
      ) : null}
      <div className={styles.separator} />
      <button onClick={onLogout} className={usermenuButton}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default UserMenu;
