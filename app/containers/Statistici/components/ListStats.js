import React from 'react';
import StatsItem from './StatsItem/index';

export default function ListStats(props) {
  return (
    <div className="row">
      {props.stats.map((item, index) =>
        <StatsItem key={index} title={item.title} subtitle={item.subtitle} />
      )}
    </div>
  );
}

ListStats.propTypes = {
  stats: React.PropTypes.array,
};
