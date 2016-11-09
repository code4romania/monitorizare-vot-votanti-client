import React from 'react';
import StyledGridTile from './gridTile';
import StyledIcon from './icon';
import Title from './title';

const active = {
  background: '#352245',
  fontWeight: 'bold',
  color: 'white',
};

function Tile(props) {
  return (
    <StyledGridTile
      id={props.id}
      style={props.activeTab === props.id ? active : ''}
      onClick={props.selectItem}
    >
      <StyledIcon className={`fa fa-${props.icon}`} aria-hidden="true"></StyledIcon>
      <Title>{props.titlu}</Title>
    </StyledGridTile>
  );
}

Tile.propTypes = {
  id: React.PropTypes.number,
  activeTab: React.PropTypes.number,
  titlu: React.PropTypes.string,
  icon: React.PropTypes.string,
  selectItem: React.PropTypes.func,
};

export default Tile;
