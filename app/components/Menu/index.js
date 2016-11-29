import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';


const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 10px 0 0;
  float: right;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const MenuItem = styled.li`
  display: inline-block;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
  line-height: 20px;
  padding: 20px;
  color: #5F288D;
  font-weight: 700;
  text-transform: uppercase;

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

    if (this.props.pathname.length > 1) {
      document.getElementById(getLocation).firstElementChild.classList.add('selected');
    }
  }

  render() {
    return (
      <MenuList>
        <MenuItem id="acasa"><MenuLink to="acasa">Monitorizare</MenuLink></MenuItem>
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
