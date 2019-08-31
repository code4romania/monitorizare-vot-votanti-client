import React from 'react';
import styled from 'styled-components';

const ButtonBackground = styled.div`
	display: inline-block;
	margin: 10px;
	border-radius: 2px;
	background: #E5E5E5;
	text-align: center;
	width: 100%;
`;

const ButtonText = styled.div`
	font-family: Open Sans;
	padding: 10px;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 19px;
	display: inline-block;
	align-items: center;
	text-align: center;

	color: #5F288D; 
`;

export class Button extends React.Component {
	
	constructor(props) {
        super(props);
  }

	render() {
		return (
				<ButtonBackground onClick={this.props.onClick} 
						style={{backgroundColor: this.props.backgroundColor}}>
					<ButtonText style={{color: this.props.textColor}}>
							{this.props.children}
					</ButtonText>
				</ButtonBackground>
		);
	}
}