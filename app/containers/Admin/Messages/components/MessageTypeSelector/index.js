import React from 'react';
import styled from 'styled-components';

const ButtonBackground = styled.div`
	display: inline-block;
	margin: 10px;
	border-radius: 2px;
	background: #E5E5E5;
`;

const ClickedButtonBackground = styled(ButtonBackground)`
	background: #FFFFFF;
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

export class MessageTypeSelector extends React.Component {
	options = ["Unread", "Accepted", "Rejected"];

	constructor(props) {
    super(props);

    this.state = {
        tabSelected: [true, false, false]
    };

    this.handleClick = this.handleClick.bind(this);
  }

	handleClick(index) {
		const newTabSelected = [false, false, false];
		newTabSelected[index] = true;
		this.setState({tabSelected: newTabSelected});
	}

	render() {
		const buttons = this.options.map((value, index) => 
					<Button key={index} isSelected={this.state.tabSelected[index]}
							onClick={() => this.handleClick(index)}>
								{value}
					</Button>);
		return (
			<div className="row">
				{buttons}
			</div>
		);
	}
}

class Button extends React.Component {
	
	constructor(props) {
        super(props);
  }

	render() {
		if (this.props.isSelected) {
			return (
				<ClickedButtonBackground onClick={this.props.onClick}>
					<ButtonText>{this.props.children}</ButtonText>
				</ClickedButtonBackground>
			);
		}

		return (
				<ButtonBackground onClick={this.props.onClick}>
					<ButtonText>{this.props.children}</ButtonText>
				</ButtonBackground>
		);
	}
}