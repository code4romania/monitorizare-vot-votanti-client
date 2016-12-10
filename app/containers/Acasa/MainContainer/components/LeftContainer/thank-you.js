import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f00;
`;

export default function ThankYou(props) {
  return (
    <Wrapper>
      <h1>Multumim {props.name}</h1>
    </Wrapper>
  );
}

ThankYou.propTypes = {
  name: React.PropTypes.string,
};
