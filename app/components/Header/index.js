import React from 'react';
import { Link } from 'react-router';
import Menu from '../Menu';
import Logo from './logo_monitorizare.png';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  background: #ffcc00;
  padding: 10px 0;

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const LogoType = styled(Link)`
  height: 30px;
  display: block;
  width: auto;
  float: left;
  margin-left: 10px;

  @media (min-width: 768px) {
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    margin-top: 10px;
    height: 40px;
  }

  img {
    width: auto;
    height: 100%;
  }
`;

const Burger = styled.button`
  float: right;
  display: inline-block;
  margin: 0 10px 0 0;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default function Header(props) {
  return (
    <HeaderWrap>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <LogoType to="acasa" className="brand">
              <img src={Logo} role="presentation" />
            </LogoType>
            <Menu {...props} />
            <Burger className="burger">
              <i className="material-icons">&#xE5D2;</i>
            </Burger>
          </div>
        </div>
      </div>
    </HeaderWrap>
  );
}
