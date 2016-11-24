import React from 'react';
import Menu from '../Menu';
import Logo from './logo_monitorizare.png';

const styles = {
  background: '#FFCC00',
};

export default function Header(props) {
  return (
    <div style={styles}>
      <img width={320} src={Logo} className="logo" role="presentation" />
      <Menu {...props} />
    </div>
  );
}
