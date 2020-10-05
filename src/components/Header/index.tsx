import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

interface Props {
  brand?: string;
  renderUsermenu?: () => JSX.Element;
}

const container = style({
  width: '100%',
  height: '3.8em',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 2em 0 0',
  background: '#fff'
});

const logoContainer = style({
  height: '1.6em',
  margin: '0 1.5em'
});

const logo = style({
  height: '100%'
});

const buttons = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
});

export default function Header(props: Props) {
  const { brand, renderUsermenu } = props;
  return (
    <div className={container}>
      <div className={logoContainer}>
        <Link to="/">{brand ? <img src={brand} className={logo} alt="" /> : null}</Link>
      </div>
      <div className={buttons}>{renderUsermenu?.()}</div>
    </div>
  );
}
