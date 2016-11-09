import React from 'react';

const styles = {
  textAlign: 'center',
  marginTop: '10px',
};

const removeHrefStyle = {
  color: 'black',
  textDecoration: 'none',
};

export default function Footer() {
  return (
    <div style={styles}>
      <div>Email: <a href="mailto:youremailaddress" style={removeHrefStyle}>test@test.com</a></div>
      <h5>Monitorizare vot @2016</h5>
    </div>
  );
}
