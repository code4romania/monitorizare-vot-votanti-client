import React from 'react';
import * as _ from 'lodash';
import ItemStats from './item-stats';

export default function ItemCounts(props) {
  return (
    <div className="row">
      <ItemStats
        title={_.first(props.counts).incidentsCount}
        subtitle={_.first(props.counts).countyName}
        columns="col-xs-12"
        primary
      />

      {_.tail(props.counts).map((item, index) =>
        <ItemStats
          key={index}
          title={item.incidentsCount}
          subtitle={item.countyName}
          columns="col-xs-6"
        />
      )}
    </div>
  );
}

ItemCounts.propTypes = {
  counts: React.PropTypes.array,
};
