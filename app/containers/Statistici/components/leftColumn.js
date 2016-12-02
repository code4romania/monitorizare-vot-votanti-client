import React from 'react';
import Counts from './counts';
import * as _ from 'lodash';

export default function LeftColumn(props) {
  return (
    <div>
      <h2>{props.stats.incidentsByCounty.length} sesizari de la votanti</h2>
      <Counts counts={_.slice(_.sortBy(props.stats.incidentsByCounty, [(county) => county.incidentsCount]), 0, 5)} title="Cele mai putine sesizari sunt in:" />
      <Counts counts={_.slice(_.reverse(_.sortBy(props.stats.incidentsByCounty, [(county) => county.incidentsCount])), 0, 5)} title="Cele mai multe sesizari sunt in:" />
    </div>
  );
}

LeftColumn.propTypes = {
  stats: React.PropTypes.object,
};
