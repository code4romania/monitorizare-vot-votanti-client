import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import Button from '../../../components/Button';
import styled from 'styled-components';

const ButtonSpacer = styled.div`
  color:white;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

// eslint-disable-next-line react/prefer-stateless-function
export class IncidentRow extends React.PureComponent {

  render() {
    return (
      <div className="row">
        <Card className="col-sm-9" style={{ marginBottom: '10px' }}>
          <CardText>
            <div className="row">
              <div className="col-lg-3">
                <div><BoldText>Nume:</BoldText> {this.props.incident.name}</div>
                <div><BoldText>Regiune:</BoldText> {this.props.incident.county.code === 'DI' ? 'Diaspora' : 'Romania'}</div>
                <div><BoldText>Judet:</BoldText> {this.props.incident.county.name}</div>
                <div><BoldText>Oras:</BoldText> {this.props.incident.city.name}</div>
              </div>
              <div className="col-lg-3">
                <div><BoldText>Sectie:</BoldText> {this.props.incident.county.code}{this.props.incident.precinct.precinctNumber}</div>
                <div><BoldText>Tip Incident:</BoldText> {this.props.incident.incidentType.name}</div>
              </div>
              <div className="col-lg-6">
                <div><BoldText>Seziare:</BoldText> {this.props.incident.description}</div>
              </div>
            </div>
          </CardText>
        </Card>
        <div className="col-sm-2">
          <ButtonSpacer>
            <Button disabled={false} text={'Approve'} style={{ background: 'green' }} onClick={this.props.approveIncident} />
          </ButtonSpacer>
          <ButtonSpacer>
            <Button disabled={false} text={'Reject'} style={{ background: 'red' }} onClick={this.props.rejectIncident} />
          </ButtonSpacer>
        </div>
      </div>

    );
  }
}

IncidentRow.propTypes = {
  incident: React.PropTypes.object,
  approveIncident: React.PropTypes.func,
  rejectIncident: React.PropTypes.func,
};

