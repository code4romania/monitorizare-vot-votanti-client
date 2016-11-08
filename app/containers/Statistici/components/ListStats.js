import React from 'react';
import StatsItem from './StatsItem';

export default class ListStats extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="row">
        {this.props.stats.map((item, index) =>
          <StatsItem key={index} title={item.title} subtitle={item.subtitle} />
        )}
      </div>
    );
  }
}

ListStats.propTypes = {
  stats: React.PropTypes.array,
};
