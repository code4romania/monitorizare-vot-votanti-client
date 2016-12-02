import React from 'react';
import StatsItem from './StatsItem/index';

export default function RightColumn(props) {
  return (
    <div>
      <h2>Statistici dupa cele {props.stats.incidentsByType.length} tipuri de sesizari</h2>
      <div className="row">
        {props.stats.incidentsByType.map((item, index) =>
          <StatsItem key={index} title={item.count} subtitle={item.type.name} />
        )}
      </div>
    </div>
  );
}

RightColumn.propTypes = {
  stats: React.PropTypes.object,
};
