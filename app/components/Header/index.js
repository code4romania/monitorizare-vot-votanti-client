import React from 'react';
import Menu from '../Menu';

const styles = {
  paddingTop: '3%',
};

export default function Header(props) {
  return (
    <div style={styles}>
      <img width={120} src="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fwww.code4.ro%2Fwp-content%2Fuploads%2F2016%2F07%2Fmonitorizare_vot.png" className="logo" role="presentation" />
      <Menu {...props} />
    </div>
  );
}
