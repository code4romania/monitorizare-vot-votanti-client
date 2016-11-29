import React from 'react';
import StyledGridItem from './gridTile';
import StyledIcon from './icon';
import TileTitle from './tile-title';

const active = {
  background: '#352245',
  fontWeight: 'bold',
  color: 'white',
};

function Tile(props) {
  return (
    <StyledGridItem
      id={props.id}
      style={props.activeTab === props.id ? active : {}}
      onClick={props.selectItem}
    >
      <StyledIcon className={`fa fa-${props.icon}`} aria-hidden="true"></StyledIcon>
      <TileTitle>{props.titlu}</TileTitle>
    </StyledGridItem>
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
