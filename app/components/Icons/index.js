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
import IconItBribe from './icons/icon-it_bribe';
import IconItElecTurism from './icons/icon-it_elec_turism';
import IconItElectionDay from './icons/icon-it_election_day';
import IconItMedia from './icons/icon-it_media';
import IconItMultiple from './icons/icon-it_multiple';
import IconItObservers from './icons/icon-it_observers';
import IconItOffices from './icons/icon-it_offices';
import IconItOther from './icons/icon-it_other';
import IconItPublicFunds from './icons/icon-it_public_funds';
import IconCode from './icons/icon-code';
import IconGithub from './icons/icon-github';
import IconTwitter from './icons/icon-twitter';
import IconFacebook from './icons/icon-facebook';
import IconLinkedin from './icons/icon-linkedin';

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
  it_bribe: <IconItBribe />,
  it_counting: <IconItOffices />,
  it_election_day: <IconItElectionDay />,
  it_elec_turism: <IconItElecTurism />,
  it_media: <IconItMedia />,
  it_multiple: <IconItMultiple />,
  it_observers: <IconItObservers />,
  it_offices: <IconItOffices />,
  it_opening: <IconItOffices />,
  it_other: <IconItOther />,
  it_public_founds: <IconItPublicFunds />,
  code4: <IconCode />,
  github: <IconGithub />,
  twitter: <IconTwitter />,
  facebook: <IconFacebook />,
  linkedin: <IconLinkedin />,
};

const Icon = styled.i`
  display: inline-block;
  width: 40px;
  height: 40px;
`;

function Icons(props) {
  return <Icon className="svg-icon">{iconList[props.icon]}</Icon>;
}

Icons.propTypes = {
  icon: React.PropTypes.string,
};

export default Icons;
