import React from 'react';
import styled from 'styled-components';
import LeftColumn from './leftColumn';
import RightColumn from './rightColumn';

const LastUpdate = styled.p`
  font-size: 14px;
  color: #999;
  font-weight: 400;
  text-align: center;
`;

const Wrapper = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 400;

    strong {
      font-size: 48px;
      color: #5F288D;
    }
  }

  h2 {
    font-weight: 400;
  }
`;

export default function ListStats(props) {
  return (
    <Wrapper className="row">
      <LastUpdate className="col-xs-12">
        Ultima actualizare a fos la 15:34:30 11 Decembrie 2016
      </LastUpdate>
      <div className="col-xs-12 col-md-6">
        <LeftColumn {...props} />
      </div>
      <div className="col-xs-12 col-md-6">
        <RightColumn {...props} />
      </div>
    </Wrapper>
  );
}

ListStats.propTypes = {
  stats: React.PropTypes.object,
};
