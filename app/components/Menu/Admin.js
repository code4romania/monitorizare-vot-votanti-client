import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 10px 0 0;
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
  color: #5f288d;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;

  &:active,
  &:focus {
    color: #5f288d;
  }

  &.selected {
    background: #5f288d;
    color: #fff;
  }
`;

const Admin = ({ menuItems, path }) => (
  <MenuList id="menu-list">
    <MenuItem id={menuItems.SESIZARI.path}>
      <MenuLink to={menuItems.SESIZARI.path} className={path === menuItems.SESIZARI.path ? 'selected' : ''}>{menuItems.SESIZARI.title}</MenuLink>
    </MenuItem>
    <MenuItem id={menuItems.STATISTICI.path}>
      <MenuLink to={menuItems.STATISTICI.path} className={path === menuItems.STATISTICI.path ? 'selected' : ''}>{menuItems.STATISTICI.title}</MenuLink>
    </MenuItem>
  </MenuList>
);

Admin.propTypes = {
  menuItems: React.PropTypes.object,
  path: React.PropTypes.string,
};

export default Admin;
