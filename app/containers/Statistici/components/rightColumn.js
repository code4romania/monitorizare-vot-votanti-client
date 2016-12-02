import React from 'react';
import StatsItem from './StatsItem/index';

export default function RightColumn(props) {
  return (
    <div className="row">
      <StatsItem title={props.stats.incidentsByType.length} subtitle="Sesizari de la ..." />
      {props.stats.incidentsByType.map((item, index) =>
        <StatsItem key={index} title={item.count} subtitle={item.type.name} />
      )}
    </div>
  );
}

RightColumn.propTypes = {
  stats: React.PropTypes.object,
};
