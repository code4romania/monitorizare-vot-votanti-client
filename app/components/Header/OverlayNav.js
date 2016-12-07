/* eslint-disable no-confusing-arrow */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const StyledNav = styled.nav`
  top: 0 !important;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  z-index: 999;
  display: ${(props) => props.show ? 'block' : 'none'};

  .menu-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  ul {
    text-align: center;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  display: inline-block;
  line-height: 30px;
  padding: 20px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;

  &:active,
  &:focus {
    color: #5F288D;
  }
`;

export default function OverlayNav(props) {
  return (
    <StyledNav show={props.show}>
      <button onTouchTap={props.handleToggleNav} style={{ float: 'right', color: 'white', width: '60px', height: '60px' }}>icon aici</button>

      <div className="menu-wrapper">
        <ul>
          <li id="acasa"><MenuLink to="acasa">Monitorizare</MenuLink></li>
          <li id="sesizari"><MenuLink to="sesizari">Sesizări</MenuLink></li>
          <li id="statistici"><MenuLink to="statistici">Statistici</MenuLink></li>
          <li id="reguli-vot"><MenuLink to="reguli-vot">Reguli vot</MenuLink></li>
          <li id="despre-noi"><MenuLink to="despre-noi">Despre noi</MenuLink></li>
        </ul>
      </div>
    </StyledNav>
  );
}

OverlayNav.propTypes = {
  show: React.PropTypes.bool,
  handleToggleNav: React.PropTypes.func,
};
