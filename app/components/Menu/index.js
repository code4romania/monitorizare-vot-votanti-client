import React from 'react';
import { Link } from 'react-router';

import styled from 'styled-components';

const MenuItem = styled.li`
  display: inline;
  padding: 10px 35px;
  background: #ffcc00;
  font-weight: bold;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
`;

export default class Menu extends React.PureComponent {
  componentDidMount() {
    const path = this.props.pathname.split('/');
    const getLocation = path[1] || path[0];
    // TODO: use class toggle
    document.getElementById(getLocation).style.background = '#352245';
    document.getElementById(getLocation).style.fontWeight = 'bold';
    document.getElementById(getLocation).firstElementChild.style.color = '#FFCC00';
  }

  render() {
    return (
      <MenuList>
        <MenuItem id="acasa"><MenuLink to="acasa">MONITORIZARE</MenuLink></MenuItem>
        <MenuItem id="sesizari"><MenuLink to="sesizari">SESIZARI</MenuLink></MenuItem>
        <MenuItem id="statistici"><MenuLink to="statistici">STATISTICI</MenuLink></MenuItem>
        <MenuItem id="reguli-vot"><MenuLink to="reguli-vot">REGULI VOT</MenuLink></MenuItem>
        <MenuItem id="despre-noi"><MenuLink to="despre-noi">DESPRE NOI</MenuLink></MenuItem>
      </MenuList>
    );
  }
}

Menu.propTypes = {
  pathname: React.PropTypes.string,
};
