import React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

// @TODO: Move each of the following styled components into separate files.
const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  opacity: 0.7;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextWrapper = styled.div`
  align-self: center;
  margin-right: 15px;
`;

const RowWrapper = styled.div`
  background: #FFCC00;
  color: #5F288D;
  padding: 25px;
  height: 100%;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  box-sizing: border-box;

  &:nth-child(-n+1) > .row-wrap {
    background: #5F288D;
    color: #FFF;
    > .text-wrap > .item-title {
      font-size: 50px;
    }
  }
`;

export default function CountsItem(props) {
  return (
    <Wrapper className="col-md-12 col-xs-12">
      <RowWrapper className="row row-wrap">
        <TextWrapper className="text-wrap" >
          <Title className="item-title"> {_.first(props.counts).incidentsCount} </Title>
        </TextWrapper>

        <TextWrapper>
          <Subtitle> {_.first(props.counts).countyName} </Subtitle>
          <ul style={{ listStyleType: 'none', display: 'flex' }}>
            {_.tail(props.counts).map((item, index) =>
              <li key={index}>
                <span>{item.countyName}, </span>
                <span>( {item.incidentsCount} )</span>
              </li>
            )}
          </ul>
        </TextWrapper>
      </RowWrapper>
    </Wrapper>
  );
}

CountsItem.propTypes = {
  counts: React.PropTypes.array,
};
