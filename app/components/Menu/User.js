import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

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

const DonateMenuLink = styled(MenuLink)`
  color: #22b968;

  &:active,
  &:focus {
    color: #22b968;
  }
`;

const User = (menuItem) => (
  <MenuList id="menu-list">
    <MenuItem id={menuItem.ACASA.path}>
      <MenuLink to={menuItem.ACASA.path} className="selected">
        {menuItem.ACASA.title}
      </MenuLink>
    </MenuItem>
    <MenuItem id={menuItem.SESIZARI.path}>
      <MenuLink to={menuItem.SESIZARI.path}>{menuItem.SESIZARI.title}</MenuLink>
    </MenuItem>
    <MenuItem id={menuItem.STATISTICI.path}>
      <MenuLink to={menuItem.STATISTICI.path}>{menuItem.STATISTICI.title}</MenuLink>
    </MenuItem>
    <MenuItem id={menuItem.REGULI_VOT.path}>
      <MenuLink to={menuItem.REGULI_VOT.path}>{menuItem.REGULI_VOT.title}</MenuLink>
    </MenuItem>
    <MenuItem id={menuItem.DESPRE_NOI.path}>
      <MenuLink to={menuItem.DESPRE_NOI.path}>{menuItem.DESPRE_NOI.title}</MenuLink>
    </MenuItem>
    <MenuItem id="doneaza">
      <DonateMenuLink href={menuItem.DONEAZA.href} target="_blank">
        {menuItem.DONEAZA.title}
      </DonateMenuLink>
    </MenuItem>
  </MenuList>
);

export default User;
