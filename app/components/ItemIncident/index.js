/* eslint-disable padded-blocks */

import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import styled from 'styled-components';
import Icons from 'components/Icons';
import RoomIcon from 'material-ui/svg-icons/action/room';
import ZoomIcon from 'material-ui/svg-icons/action/zoom-in';

const IncidentWrap = styled.div`
  .incident-card {
    margin: 0 0 20px;
    display: flex;
  }

  .incident-media {
    max-height: 100px;
    overflow: hidden;
    cursor: pointer;
    background: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      opacity: 0.5;
      width: 100%;
    }
  }

  .incident-subtitle {
    display: flex;
    font-weight: 700;
  }

  .incident-title {
    font-size: 24px;
  }

  .incident-description {
    word-break: break-word;
  }

  .incident-header-icon {
    background: #5F288D;
    padding: 5px;
    border-radius: 50%;
    color: white;
    width: 30px;
    height: 30px;
  }

  .svg-icon {
    color: #5F288D;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

const imageContainerIcon = {
  color: '#5F288D',
  cursor: 'pointer',
  position: 'absolute',
  width: '32px',
  height: '32px',
};

function IncidentItem(props) {

  const Subtitle = (
    <div className="incident-subtitle">
      <RoomIcon style={{ color: 'rgba(45, 45, 45, 0.5)', width: '20px', height: '20px', marginRight: '5px' }} />
      <span>{props.city ? props.city.name : ''}, {props.county ? props.county.name : ''}</span>
    </div>);
  const icon = props.incidentType ? props.incidentType.label.toLowerCase() : '';

  return (
    <IncidentWrap>

      <Card className="incident-card">

        <CardHeader
          title={props.incidentType ? props.incidentType.name : ''}
          avatar={<Icons icon={icon} />}
          textStyle={{ verticalAlign: 'middle' }}
          titleStyle={{ color: '#5F288D' }}
        />

        { props.image ?
          <div className="incident-media">
            <img src={props.image} role="presentation" />
            <ZoomIcon style={imageContainerIcon} />
          </div>
          : null
        }

        { props.precinct && props.precinct.precinctNumber
          ? <CardTitle
            className="incident-title"
            title={`Sectia ${props.precinct.precinctNumber}`}
            subtitle={Subtitle}
            style={{ paddingBottom: 0 }}
          />
          : <CardTitle
            className="incident-title"
            subtitle={Subtitle}
            style={{ paddingBottom: 0 }}
          />
        }

        <CardText className="incident-description">
          {props.description}
        </CardText>

      </Card>
    </IncidentWrap>
  );
}

IncidentItem.propTypes = {
  description: React.PropTypes.string,
  city: React.PropTypes.object,
  name: React.PropTypes.string,
  image: React.PropTypes.string,
  incidentType: React.PropTypes.object,
  county: React.PropTypes.object,
  precinct: React.PropTypes.object,
  precinctNumber: React.PropTypes.number,
};

export default IncidentItem;
