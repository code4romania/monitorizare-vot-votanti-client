import React from 'react';
import styled from 'styled-components';

// @TODO: Move each of the following styled components into separate files.
const Title = styled.h1`
  font-size: 26px;
  font-weight: 900;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 48em) {
    font-size: 32px;
  }
`;

const Subtitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 48em) {
    font-size: 16px;
  }
`;

const TextWrapper = styled.div`
  align-self: center;
  margin-right: 15px;
`;

const RowWrapper = styled.div`
  background: #fdda44;
  color: #5F288D;
  padding: 15px;
  height: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

export default function StatsItem(props) {
  return (
    <Wrapper className="col-xs-12 col-sm-6">
      <RowWrapper>
        <TextWrapper className="text-wrap" >
          <Title className="item-title"> {props.title} </Title>
        </TextWrapper>

        <TextWrapper>
          <Subtitle> {props.subtitle} </Subtitle>
        </TextWrapper>
      </RowWrapper>
    </Wrapper>
  );
}

StatsItem.propTypes = {
  title: React.PropTypes.number,
  subtitle: React.PropTypes.string,
};
