import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const MENU_ITEMS = {
  ACASA: {
    title: 'Adaugă o sesizare',
    path: 'acasa',
  },
  SESIZARI: {
    title: 'Sesizări',
    path: 'sesizari',
  },
  STATISTICI: {
    title: 'Statistici',
    path: 'statistici',
  },
  REGULI_VOT: {
    title: 'Reguli vot',
    path: 'reguli-vot',
  },
  DESPRE_NOI: {
    title: 'Despre noi',
    path: 'despre-noi',
  },
  DONEAZA: {
    title: 'Donează',
    href: 'https://code4.ro/doneaza/',
  },
};

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
const Menu = ({ pathname }) => {
  const currentPath = pathname.replace(/\//, '');
  return (
    <MenuList>
      <MenuItem>
        <MenuLink to={MENU_ITEMS.ACASA.path} className={MENU_ITEMS.ACASA.path === currentPath && 'selected'}>
          {MENU_ITEMS.ACASA.title}
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={MENU_ITEMS.SESIZARI.path} className={MENU_ITEMS.SESIZARI.path === currentPath && 'selected'}>{MENU_ITEMS.SESIZARI.title}</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={MENU_ITEMS.STATISTICI.path} className={MENU_ITEMS.STATISTICI.path === currentPath && 'selected'}>{MENU_ITEMS.STATISTICI.title}</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={MENU_ITEMS.REGULI_VOT.path} className={MENU_ITEMS.REGULI_VOT.path === currentPath && 'selected'}>{MENU_ITEMS.REGULI_VOT.title}</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={MENU_ITEMS.DESPRE_NOI.path} className={MENU_ITEMS.DESPRE_NOI.path === currentPath && 'selected'}>{MENU_ITEMS.DESPRE_NOI.title}</MenuLink>
      </MenuItem>
      <MenuItem>
        <DonateMenuLink to={MENU_ITEMS.DONEAZA.href} target="_blank">
          {MENU_ITEMS.DONEAZA.title}
        </DonateMenuLink>
      </MenuItem>
    </MenuList>
  );
}


Menu.propTypes = {
  pathname: React.PropTypes.string
};

export default Menu;
