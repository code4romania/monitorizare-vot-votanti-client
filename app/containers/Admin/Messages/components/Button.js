/* eslint-disable react/prefer-stateless-function */
import React, { PropTypes } from 'react';
import styled from 'styled-components';

const ButtonBackground = styled.div`
display: inline-block;
margin: 10px;
border-radius: 2px;
background: #E5E5E5;
`;

const ButtonText = styled.div`
font-family: Open Sans;
padding: 10px;
padding-left: 80px;
padding-right: 80px;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

color: #5F288D; 
`;

export class Button extends React.PureComponent {
  static get propTypes() {
    return {
      onClick: PropTypes.onClick,
      backgroundColor: PropTypes.backgroundColor,
      textColor: PropTypes.textColor,
      children: PropTypes.any,
    };
  }
  render() {
    return (
      <ButtonBackground
        onClick={this.props.onClick}
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        <ButtonText style={{ color: this.props.textColor }}>
          {this.props.children}
        </ButtonText>
      </ButtonBackground>
    );
  }
}
