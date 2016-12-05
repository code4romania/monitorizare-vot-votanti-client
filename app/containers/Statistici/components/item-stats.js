import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const RowWrapper = styled.div`
  background: #fdda44;
  color: #5F288D;
  padding: 15px;
  height: 100%;
  display: flex;
  position: relative;

  &.primary {
    background: #5F288D;
    color: #fff;
  }
`;

const TextWrapper = styled.div`
  align-self: center;
  margin-right: 15px;
`;

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
  font-weight: 300;
  opacity: 0.7;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 48em) {
    font-size: 16px;
  }
`;

export default function ItemStats(props) {
  return (
    <Wrapper className={props.columns}>
      <RowWrapper className={props.primary ? 'primary' : ''}>
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

ItemStats.propTypes = {
  title: React.PropTypes.number,
  subtitle: React.PropTypes.string,
  columns: React.PropTypes.string,
  primary: React.PropTypes.bool,
};
