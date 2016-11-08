import React from 'react';
import MenuList from './MenuListStyle';
import MenuItem from './MenuListItem';
import StyledLink from './Link';

export default class Menu extends React.PureComponent {
  componentDidMount() {
    const path = this.props.pathname.split('/');
    const getLocation = path[1] || path[0];
    document.getElementById(getLocation).style.background = '#352245';
    document.getElementById(getLocation).style.fontWeight = 'bold';
    document.getElementById(getLocation).firstElementChild.style.color = '#FFCC00';
  }

  render() {
    return (
      <MenuList>
        <MenuItem id="acasa"><StyledLink to="acasa">ADAUGA SESIZARE/ACASA</StyledLink></MenuItem>
        <MenuItem id="statistici"><StyledLink to="statistici">LIVE STATS</StyledLink></MenuItem>
        <MenuItem id="sesizari"><StyledLink to="sesizari">SESIZARI</StyledLink></MenuItem>
        <MenuItem id="reguli-vot"><StyledLink to="reguli-vot">REGULI VOT</StyledLink></MenuItem>
        <MenuItem id="despre-noi"><StyledLink to="despre-noi">DESPRE NOI</StyledLink></MenuItem>
      </MenuList>
    );
  }
}

Menu.propTypes = {
  pathname: React.PropTypes.string,
};
