import React from 'react';
import StatsItem from './StatsItem/index';
import Counts from './counts';
import * as _ from 'lodash';

export default function LeftColumn(props) {
  return (
    <div className="row">
      <StatsItem title={props.stats.incidentsByCounty.length} subtitle="Sesizari de la Left" />
      <Counts counts={_.slice(_.sortBy(props.stats.incidentsByCounty, [(county) => county.incidentsCount]), 0, 5)} />
      <Counts counts={_.slice(_.reverse(_.sortBy(props.stats.incidentsByCounty, [(county) => county.incidentsCount])), 0, 5)} />
    </div>
  );
}

LeftColumn.propTypes = {
  stats: React.PropTypes.object,
};
