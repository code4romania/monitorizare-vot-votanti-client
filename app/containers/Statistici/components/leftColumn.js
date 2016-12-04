import React from 'react';
import * as _ from 'lodash';
import styled from 'styled-components';
import TrendingDown from 'material-ui/svg-icons/action/trending-down';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import Counts from './counts';

const TitleStats = styled.h2`
  svg {
    margin-right: 10px;
  }
`;

const iconStyle = {
  width: '32px',
  height: '32px',
};

export default function LeftColumn(props) {
  return (
    <div>
      <h1><strong>{props.stats.incidentsByCounty.length}</strong> sesizari de la votanti</h1>
      <TitleStats>
        <TrendingUp style={iconStyle} />
        Cele mai multe sesizari
      </TitleStats>
      <Counts counts={_.slice(_.reverse(_.sortBy(props.stats.incidentsByCounty, [(county) => county.incidentsCount])), 0, 5)} />
      <TitleStats>
        <TrendingDown style={iconStyle} />
        Cele mai putine sesizari
      </TitleStats>
      <Counts counts={_.slice(_.sortBy(props.stats.incidentsByCounty, [(county) => county.incidentsCount]), 0, 5)} />
    </div>
  );
}

LeftColumn.propTypes = {
  stats: React.PropTypes.object,
};
