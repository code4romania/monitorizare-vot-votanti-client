import React from 'react';
import User from './User';
import Admin from './Admin';
import { isLoggedIn } from '../../utils/authUtils';

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
  // REGULI_VOT: {
  //   title: 'Reguli vot',
  //   path: 'reguli-vot',
  // },
  DESPRE_NOI: {
    title: 'Despre noi',
    path: 'despre-noi',
  },
  DONEAZA: {
    title: 'Donează',
    href: 'https://code4.ro/doneaza/',
  },
  MESSAGES: {
    title: 'Messages',
    path: 'messages',
  },
  USERS: {
    title: 'Users',
    path: 'users',
  },
  FORMS: {
    title: 'Forms',
    path: 'forms',
  },
  PAGES: {
    title: 'Pages',
    path: 'pages',
  },
};

const Menu = ({ pathname }) => {
  const currentPath = pathname.replace(/\//, '');

  return (
    (isLoggedIn() ? <Admin menuItems={MENU_ITEMS} path={currentPath} /> : <User menuItems={MENU_ITEMS} path={currentPath} />)
  );
};

Menu.propTypes = {
  pathname: React.PropTypes.string,
};

export default Menu;
