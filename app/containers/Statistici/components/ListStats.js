import React from 'react';
import LeftColumn from './leftColumn';
import RightColumn from './rightColumn';


export default function ListStats(props) {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-6">
        <LeftColumn {...props} />
      </div>
      <div className="col-xs-12 col-md-6">
        <RightColumn {...props} />
      </div>
    </div>
  );
}

ListStats.propTypes = {
  stats: React.PropTypes.object,
};
