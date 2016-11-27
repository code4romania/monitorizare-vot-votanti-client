import React from 'react';
import { Link } from 'react-router';
import Menu from '../Menu';
import Logo from './logo_monitorizare.png';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  background: #ffcc00;
`;

const LogoType = styled(Link)`
  height: auto;
  display: block;
  width: 230px;
  float: left;

  @media (min-width: 1024px) {
    margin-top: 20px;
  }

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
          <div className="col-xs-12">
            <LogoType to="acasa">
              <img src={Logo} role="presentation" />
            </LogoType>
            <Menu {...props} />
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
}
