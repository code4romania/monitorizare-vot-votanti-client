import React from 'react';
import styled from 'styled-components';
import LeftColumn from './leftColumn';
import RightColumn from './rightColumn';

const LastUpdate = styled.p`
  font-size: 14px;
  color: #999;
  font-weight: 400;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export default function ListStats(props) {
  return (
    <div className="row">
      <LastUpdate className="col-xs-12">
        Ultima actualizare a fos la 15:34:30 11 Decembrie 2016
      </LastUpdate>
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
