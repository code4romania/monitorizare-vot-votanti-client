/* eslint-disable react/no-multi-comp */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { Lightbox } from 'react-modal-image';

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
const Thumbnail = styled.img`
max-height: 100px;
width: auto;
cursor: pointer;
`;

export default class MessagesList extends React.Component {
  static get propTypes() {
    return {
      incidents: PropTypes.any,
      hasMoreIncidents: PropTypes.bool,
      loader: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      messagesType: 1,
      lightboxImage: null,
    };

    this.provideIncidentComponents = this.provideIncidentComponents.bind(this);
    this.setLightboxImage = this.setLightboxImage.bind(this);
  }

  setLightboxImage(img) {
    this.setState({ lightboxImage: img });
  }

  provideIncidentComponents() {
    return this.props.incidents.map((value) =>
      <MessageInformation key={value.id} data={value} setLightboxImage={this.setLightboxImage} />
    );
  }

  render() {
    const incidentComponents = this.provideIncidentComponents();

    let buttonLoadMore = <div></div>;
    if (this.props.hasMoreIncidents) {
      buttonLoadMore = (
        <div className="row">
          <Button
            backgroundColor="#969590"
            textColor="#FFFFFF"
            onClick={this.props.loader}
          >Load more</Button>
        </div>);
    }
    return (
      <div>
        <div className="row">
          {incidentComponents}
        </div>

        {buttonLoadMore}
        { this.state.lightboxImage && (
        <Lightbox
          small={this.state.lightboxImage}
          large={this.state.lightboxImage}
          onClose={() => this.setLightboxImage(null)}
          alt="Imaginea atasata sesizarii"
        />
        ) }

      </div>
    );
  }
}

class MessageInformation extends React.Component {
  static get propTypes() {
    return {
      data: PropTypes.any,
      setLightboxImage: PropTypes.func,
    };
  }

  createButtons() {
    return (<ButtonsColumn>
      <Button backgroundColor="#27AE60" textColor={'#FFFFFF'}>Accept</Button>
      <Button backgroundColor="#EB5757" textColor={'#FFFFFF'}>Reject</Button>
    </ButtonsColumn>);
  }

  render() {
    const { data, setLightboxImage } = this.props;
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
            <TextLine className="row">
              <LabelTextStyle>Imagine:</LabelTextStyle>
              { data.image &&
                <Thumbnail src={data.image} onClick={() => setLightboxImage(data.image)} />
              }
            </TextLine>
          </BigColumn>
        </InfoCard>

        {buttons}
      </MessageContainer>
    );
  }
}

export class RejectedMessagesList extends MessagesList {
  provideIncidentComponents() {
    return this.props.incidents.map((value) =>
      <RejectedMessageInformation key={value.id} data={value} />);
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
  provideIncidentComponents() {
    return this.props.incidents.map((value) =>
      <ApprovedMessageInformation key={value.id} data={value} />);
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
