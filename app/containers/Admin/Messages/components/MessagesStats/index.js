import React from 'react';
import styled from 'styled-components';

const MessageStatText = styled.p`
  display: inline-block;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
	font-family: Open Sans;
	font-style: normal;
	font-weight: 600;
	float:left;
`;

const GrayMessageStatText = styled(MessageStatText)`
	color: rgba(0, 0, 0, 0.56)
`;

const GreenMessageStatText = styled(MessageStatText)`
	color: #27AE60;
`;

const RedMessageStatText = styled(MessageStatText)`
	color: #EB5757;
`;

const Ellipse = styled.div`
  display: inline-block;
	width: 10px;
	height: 10px;
	margin-top: 12.5px;
	border-radius: 50%;
	background: #5F288D;
	float: left;
`;

export function MessagesStats() {
	return (
		<div className="row"> 
			<GrayMessageStatText>1298 messages</GrayMessageStatText>
			<Ellipse />
			<MessageStatText>325 unread</MessageStatText>
			<Ellipse />
			<GreenMessageStatText>600 approved</GreenMessageStatText>
			<Ellipse />
			<RedMessageStatText>373 rejected</RedMessageStatText>
		</div>
	);
}