import React from 'react';
import styled from 'styled-components';

import IconBox from './icons/icon-box';
import IconBuilding from './icons/icon-building';
import IconClock from './icons/icon-clock';
import IconInfo from './icons/icon-info';
import IconLocation from './icons/icon-location';
import IconMVCircle from './icons/icon-mv-circle';
import IconPolice from './icons/icon-police';
import IconSystem from './icons/icon-system';
import IconVote from './icons/icon-vote';

const iconList = {
  box: <IconBox />,
  building: <IconBuilding />,
  clock: <IconClock />,
  info: <IconInfo />,
  location: <IconLocation />,
  police: <IconPolice />,
  system: <IconSystem />,
  vote: <IconVote />,
  mvCircle: <IconMVCircle />,
};

const Icon = styled.i`
  display: inline-block;
  width: 48px;
  height: 48px;
`;


function Icons(props) {
  return (
    <Icon className="svg-icon">{iconList[props.icon]}</Icon>
  );
}

Icons.propTypes = {
  icon: React.PropTypes.string,
};

export default Icons;
