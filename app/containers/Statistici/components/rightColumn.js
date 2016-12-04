import React from 'react';
import ItemStats from './item-stats';

export default function RightColumn(props) {
  return (
    <div>
      <h1>xx sesizari de la observatori</h1>
      <h2>Statistici dupa tipurile de sesizari</h2>
      <div className="row">
        {props.stats.incidentsByType.map((item, index) =>
          <ItemStats key={index} title={item.count} subtitle={item.type.name} />
        )}
      </div>
    </div>
  );
}

RightColumn.propTypes = {
  stats: React.PropTypes.object,
};
