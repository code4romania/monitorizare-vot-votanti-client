/* eslint-disable react/no-multi-comp */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

const SmallColumn = styled.div`
width: 15%;
display: inline-block;
padding: 15px;
vertical-align: top;
`;

const BigColumn = styled(SmallColumn)`
width: 70%;
`;

const ButtonsColumn = styled(SmallColumn)`
background-color: inherit;
width: 20%;
`;

const InfoCard = styled.div`
background-color: white !important;
border-radius: 8px;
width: 80%;
`;

const TextLine = styled.div`
padding: 5px;
float: left;
display: contents;
`;

const TextStyle = styled.p`
display: block;
text-align: left !important;
font-family: Open Sans;
font-style: normal;
font-size: 14px;
line-height: 19px;
word-break: break-all;
`;

const LabelTextStyle = styled(TextStyle)`
font-weight: bold;
padding: 0px;
padding-right: 10px;
`;

const MessageContainer = styled.div`
margin-bottom: 15px;
width: 100%;
`;

export default class MessagesList extends React.Component {

  static get propTypes() {
    return {
      incidents: PropTypes.any,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      messagesType: 1,
    };
  }

  render() {
    const incidentComponents = this.props.incidents.map((value) =>
      <MessageInformation key={value.id} data={value} />);
    return (
      <div className="row">{incidentComponents}</div>);
  }

}

class MessageInformation extends React.Component {
  static get propTypes() {
    return {
      data: PropTypes.any,
    };
  }

  createButtons() {
    return (<ButtonsColumn>
      <Button backgroundColor="#27AE60" textColor={'#FFFFFF'}>Accept</Button>
      <Button backgroundColor="#EB5757" textColor={'#FFFFFF'}>Reject</Button>
    </ButtonsColumn>);
  }

  render() {
    const data = this.props.data;
    const buttons = this.createButtons();
    return (
      <MessageContainer className="row">
        <InfoCard className="row">
          <SmallColumn>
            <TextLine className="row">
              <LabelTextStyle>Nume:</LabelTextStyle>
              <TextStyle>{data.name}</TextStyle>
            </TextLine>
            <TextLine className="row">
              <LabelTextStyle>Regiune:</LabelTextStyle>
              <TextStyle>{data.county === null ? 'Diaspora' : 'Romania'}</TextStyle>
            </TextLine>
            <TextLine className="row">
              <LabelTextStyle>Judet:</LabelTextStyle>
              <TextStyle>{data.county === null ? '-' : data.county.name}</TextStyle>
            </TextLine>
          </SmallColumn>
          <SmallColumn>
            <TextLine className="row">
              <LabelTextStyle>Oras:</LabelTextStyle>
              <TextStyle>{data.city.name}</TextStyle>
            </TextLine>
            <TextLine className="row">
              <LabelTextStyle>Sectie:</LabelTextStyle>
              <TextStyle>{data.county === null ? 'DI' : data.county.code}{data.precinct.precinctNumber}</TextStyle>
            </TextLine>
            <TextLine className="row">
              <LabelTextStyle>Tipul sesizarii:</LabelTextStyle>
              <TextStyle>{data.incidentType === null ? '-' : data.incidentType.name}</TextStyle>
            </TextLine>
          </SmallColumn>
          <BigColumn>
            <TextLine className="row">
              <LabelTextStyle>Sesizare:</LabelTextStyle>
              <TextStyle>{data.description}</TextStyle>
            </TextLine>
          </BigColumn>
        </InfoCard>{buttons}
      </MessageContainer>
    );
  }
}

export class RejectedMessagesList extends MessagesList {
  render() {
    const incidentComponents = this.props.incidents.map((value) =>
      <RejectedMessageInformation key={value.id} data={value} />
      );
    return (
      <div className="row">{incidentComponents}</div>
    );
  }
}

class RejectedMessageInformation extends MessageInformation {
  createButtons() {
    return (
      <ButtonsColumn>
        <Button backgroundColor="#27AE60" textColor={'#FFFFFF'}>Accept</Button>
      </ButtonsColumn>
    );
  }
}

export class ApprovedMessagesList extends MessagesList {
  render() {
    const incidentComponents = this.props.incidents.map((value) =>
      <ApprovedMessageInformation key={value.id} data={value} />
      );
    return (
      <div className="row">{incidentComponents}</div>
    );
  }
}

class ApprovedMessageInformation extends MessageInformation {
  createButtons() {
    return (
      <ButtonsColumn>
        <Button backgroundColor="#EB5757" textColor={'#FFFFFF'}>Reject</Button>
      </ButtonsColumn>
    );
  }
}

export class PendingMessagesList extends MessagesList {}
