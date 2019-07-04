import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import UserIcon from './user_icon.svg';

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

const RightSide = styled.div`
  float: right;
`;

const UserLogo = styled.img`
  display: inline-block;
`;

const UserName = styled.p`
  display: inline-block;
  padding: 5px;
  padding-left: 10px;
`;

const Admin = ({ menuItems, path }) => (
  <MenuList id="menu-list">
    <MenuItem id={menuItems.MESSAGES.path}>
      <MenuLink to={menuItems.MESSAGES.path} className={path === menuItems.MESSAGES.path ? 'selected' : ''}>{menuItems.MESSAGES.title}</MenuLink>
    </MenuItem>
    <MenuItem id={menuItems.USERS.path}>
      <MenuLink to={menuItems.USERS.path} className={path === menuItems.USERS.path ? 'selected' : ''}>{menuItems.USERS.title}</MenuLink>
    </MenuItem>
    <MenuItem id={menuItems.FORMS.path}>
      <MenuLink to={menuItems.FORMS.path} className={path === menuItems.FORMS.path ? 'selected' : ''}>{menuItems.FORMS.title}</MenuLink>
    </MenuItem>
    <MenuItem id={menuItems.PAGES.path}>
      <MenuLink to={menuItems.PAGES.path} className={path === menuItems.PAGES.path ? 'selected' : ''}>{menuItems.PAGES.title}</MenuLink>
    </MenuItem>
    <RightSide>
      <UserLogo src={UserIcon} alt="User icon" />
      <UserName>Admin user</UserName>
    </RightSide>
  </MenuList>
);

Admin.propTypes = {
  menuItems: React.PropTypes.object,
  path: React.PropTypes.string,
};

export default Admin;
