import React from 'react';
import ItemCounts from './item-counts';
import * as _ from 'lodash';

export default function LeftColumn(props) {
  return (
    <div>
      <h1>{props.stats.incidentsByCounty.length} sesizari de la votanti</h1>
      <h2>Cele mai multe sesizari sunt in:</h2>
      <ItemCounts counts={_.slice(_.sortBy(props.stats.incidentsByCounty, [(county) => county.incidentsCount]), 0, 5)} />
      <h2>Cele mai putine sesizari sunt in:</h2>
      <ItemCounts counts={_.slice(_.reverse(_.sortBy(props.stats.incidentsByCounty, [(county) => county.incidentsCount])), 0, 5)} />
    </div>
  );
}

LeftColumn.propTypes = {
  stats: React.PropTypes.object,
};
