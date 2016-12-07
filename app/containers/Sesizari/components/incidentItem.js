import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import styled from 'styled-components';
import Icons from 'components/Icons';

const IncidentWrap = styled.div`
  .incident-card {
    margin: 0 0 20px;
  }

  .incident-media {
    height: 100px;
    overflow: hidden;
    cursor: pointer;
    background: #000;
    opacity: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .incident-subtitle {
    display: flex;
  }

  .incident-title {
    padding: 16px;
    font-size: 24px;
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

// const imageContainerIcon = {
//   color: '#fff',
//   cursor: 'pointer',
//   opacity: '0.7',
// };


function IncidentItem(props) {
  const Subtitle = (
    <div className="incident-subtitle">
      icon here
      <span>{props.city.name}, {props.county.name}</span>
    </div>);

  const icon = props.incidentType.label.toLowerCase();

  return (
    <IncidentWrap>
      <Card className="incident-card">

        <CardHeader
          title={props.incidentType.name}
          avatar={<Icons icon={icon} />}
          textStyle={{ verticalAlign: 'middle' }}
          titleStyle={{ color: '#5F288D' }}
        />

        <div onTouchTap={props.handleOpen} className="incident-media">
          icon here
        </div>

        <CardTitle
          className="incident-title"
          title={`Sectia ${props.precinct.precinctNumber}`}
          subtitle={Subtitle}
        />

        <CardText>
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
  incidentType: React.PropTypes.object,
  county: React.PropTypes.object,
  handleOpen: React.PropTypes.func,
  precinct: React.PropTypes.object,
  precinctNumber: React.PropTypes.number,
};

export default IncidentItem;
