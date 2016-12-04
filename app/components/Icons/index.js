import React from 'react';
import styled from 'styled-components';

import IconBox from './icons/icon-box';
import IconBuilding from './icons/icon-building';
import IconClock from './icons/icon-clock';
import IconInfo from './icons/icon-info';
import IconLocation from './icons/icon-location';
import IconMV from './icons/icon-mv';
import IconMVCircle from './icons/icon-mv-circle';
import IconPolice from './icons/icon-police';
import IconSystem from './icons/icon-system';
import IconVote from './icons/icon-vote';
import IconItElecTurism from './icons/icon-it_elec_turism';
import IconItMedia from './icons/icon-it_media';


const iconList = {
  box: <IconBox />,
  building: <IconBuilding />,
  clock: <IconClock />,
  info: <IconInfo />,
  location: <IconLocation />,
  mv: <IconMV />,
  mvCircle: <IconMVCircle />,
  police: <IconPolice />,
  system: <IconSystem />,
  vote: <IconVote />,
  it_elec_turism: <IconItElecTurism />,
  it_media: <IconItMedia />,
  // it_multiple: ,
  // it_other: ,
  // it_offices: ,
  // it_election_day: ,
  // it_observers: ,
  // it_bribe: ,
  // it_opening: ,
  // it_counting: ,
};

const Icon = styled.i`
  display: inline-block;
  width: 40px;
  height: 40px;
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
