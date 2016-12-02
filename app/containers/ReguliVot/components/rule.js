import React from 'react';
// import createFragment from 'react-addons-create-fragment';
// import styled from 'styled-components';

// import StyledGridItem from './gridTile';
// import TileTitle from './tile-title';

import IconBox from './icons/icon-box';
import IconBuilding from './icons/icon-building';
import IconClock from './icons/icon-clock';
import IconInfo from './icons/icon-info';
import IconLocation from './icons/icon-location';
import IconPolice from './icons/icon-police';
import IconSystem from './icons/icon-system';
import IconVote from './icons/icon-vote';

// const Icons = createFragment({
//   box: <IconBox />,
//   building: <IconBuilding />,
//   clock: <IconClock />,
//   info: <IconInfo />,
//   location: <IconLocation />,
//   police: <IconPolice />,
//   system: <IconSystem />,
//   vote: <IconVote />,
// });

const active = {
  background: '#5F288D',
  color: '#ffffff',
};

function Rule(props) {
  return (
    <div>
      <IconBox />
      <IconBuilding />
      <IconClock />
      <IconInfo />
      <IconLocation />
      <IconPolice />
      <IconSystem />
      <IconVote />
      <div
        id={props.id}
        style={props.activeTab === props.id ? active : {}}
        onTouchTap={props.selectItem}
      >
        {props.icon}
        <div>{props.titlu}</div>
      </div>
    </div>
  );
}

Rule.propTypes = {
  id: React.PropTypes.number,
  activeTab: React.PropTypes.number,
  titlu: React.PropTypes.string,
  icon: React.PropTypes.string,
  selectItem: React.PropTypes.func,
};

export default Rule;
