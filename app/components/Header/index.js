import React from 'react';
import Menu from '../Menu';
import Logo from './logo_monitorizare.png';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  background: #ffcc00;
`;

const LogoType = styled.a`
  height: auto;
  display: inline-block;
  width: 230px;

  img {
    width: 100%;
    height: auto;
  }
`;

export default function Header(props) {
  return (
    <HeaderWrap>
      <div className="container">
        <div className="row">
          <LogoType>
            <img src={Logo} role="presentation" />
          </LogoType>
          <Menu {...props} />
        </div>
      </div>
    </HeaderWrap>
  );
}
