import React from 'react';
import styled from 'styled-components';
import LeftColumn from './leftColumn';
import RightColumn from './rightColumn';

const Wrapper = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 300;

    strong {
      font-size: 48px;
      color: #5F288D;
    }
  }
`;

export default function ListStats(props) {
  return (
    <Wrapper className="row">
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
