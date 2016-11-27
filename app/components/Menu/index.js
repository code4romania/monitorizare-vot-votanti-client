import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';


const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  float: right;
`;

const MenuItem = styled.li`
  display: inline;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
  line-height: 20px;
  padding: 10px 20px;
  color: #5F288D;
  font-weight: 700;

  &:active,
  &:focus {
    color: #5F288D;
  }

  &.selected {
    background: #5F288D;
    color: #fff;
  }
`;

export default class Menu extends React.PureComponent {
  componentDidMount() {
    const path = this.props.pathname.split('/');
    const getLocation = path[1] || path[0];
    // TODO: use class name toggle here
    document.getElementById(getLocation).firstElementChild.classList.add('selected');
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
