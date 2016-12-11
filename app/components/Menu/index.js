import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';


const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 10px 0 0;
  float: right;
  display: none;

  @media (min-width: 64em) {
    display: block;
  }
`;

const MenuItem = styled.li`
  display: inline-block;

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
  line-height: 20px;
  padding: 20px;
  color: #5F288D;
  text-transform: uppercase;
  letter-spacing: 1px;
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

    if (this.props.pathname.length > 1 && this.props.pathname !== '/multumim') {
      document.getElementById(getLocation).parentNode.querySelector('.selected').classList.remove('selected');
      document.getElementById(getLocation).firstElementChild.classList.add('selected');
    } else {
      // document.querySelector('#menu-list .selected').classList.remove('selected');
    }
  }

  render() {
    return (
      <MenuList id="menu-list">
        <MenuItem id="acasa"><MenuLink to="acasa" className="selected">Adaugă o sesizare</MenuLink></MenuItem>
        <MenuItem id="sesizari"><MenuLink to="sesizari">Sesizări</MenuLink></MenuItem>
        <MenuItem id="statistici"><MenuLink to="statistici">Statistici</MenuLink></MenuItem>
        <MenuItem id="reguli-vot"><MenuLink to="reguli-vot">Reguli vot</MenuLink></MenuItem>
        <MenuItem id="despre-noi"><MenuLink to="despre-noi">Despre noi</MenuLink></MenuItem>
      </MenuList>
    );
  }
}

Menu.propTypes = {
  pathname: React.PropTypes.string,
};
