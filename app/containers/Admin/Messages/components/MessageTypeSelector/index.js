import React from 'react';
import styled from 'styled-components';
import { PendingMessagesList, ApprovedMessagesList, RejectedMessagesList } from '../MessagesList';
import { Button } from '../Button';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getIncidentsByStatusAction } from '../../../../Sesizari/actions';
import { getApprovedIncidents,
  getPendingIncidents,
  getRejectedIncidents,
  getApprovedPagination,
  getRejectedPagination,
  getPendingPagination } from '../../../../Sesizari/selectors';
import { APPROVED, PENDING, REJECTED } from '../../../../Sesizari/constants';

const ButtonContainer = styled.div`
width: 10%
margin-right: 20px`;

export class MessageTypeSelector extends React.Component {
  static get propTypes() {
    return {
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      tabSelected: [true, false, false],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  options = [
    {
      text: 'Unread',
      valuesName: 'pendingIncidents',
      componentCreator: this.createPendingListComponent,
      parentComponent: this,
    },
    {
      text: 'Accepted',
      valuesName: 'approvedIncidents',
      componentCreator: this.createApprovedListComponent,
      parentComponent: this,
    },
    {
      text: 'Rejected',
      valuesName: 'rejectedIncidents',
      componentCreator: this.createRejectedListComponent,
      parentComponent: this,
    },
  ];

  handleClick(index) {
    const newTabSelected = [false, false, false];
    newTabSelected[index] = true;
    this.setState({ tabSelected: newTabSelected });
  }

  createApprovedListComponent(incidents) {
    const paginationInfo = this.parentComponent.props.approvedIncidentsPagination;
    const hasMoreIncidents = paginationInfo.currentPage !== paginationInfo.lastPage;
    return (
      <ApprovedMessagesList
        incidents={incidents}
        loader={this.parentComponent.props.dispatchGetApprovedIncidents}
        hasMoreIncidents={hasMoreIncidents}
      />);
  }

  createRejectedListComponent(incidents) {
    const paginationInfo = this.parentComponent.props.rejectedIncidentsPagination;
    const hasMoreIncidents = paginationInfo.currentPage !== paginationInfo.lastPage;
    return (
      <RejectedMessagesList
        incidents={incidents}
        loader={this.parentComponent.props.dispatchGetRejectedIncidents}
        hasMoreIncidents={hasMoreIncidents}
      />);
  }

  createPendingListComponent(incidents) {
    const paginationInfo = this.parentComponent.props.pendingIncidentsPagination;
    const hasMoreIncidents = paginationInfo.currentPage !== paginationInfo.lastPage;
    return (
      <PendingMessagesList
        incidents={incidents}
        loader={this.parentComponent.props.dispatchGetPendingIncidents}
        hasMoreIncidents={hasMoreIncidents}
      />);
  }

  render() {
    const buttons = this.options
      .map((value) => value.text)
      .map((value, index) =>
        <ButtonContainer key={value}>
          <Button
            backgroundColor={this.state.tabSelected[index] ? '#FFFFFF' : '#E5E5E5'}
            textColor={'#5F288D'}
            onClick={() => this.handleClick(index)}
          >{value}</Button>
        </ButtonContainer>);

    const targetTab = this.state.tabSelected.indexOf(true);
    const incidents = this.props[this.options[targetTab].valuesName];
    const wellDescribedIncidents = incidents
      .filter((incident) => incident)
      .filter((incident) => incident.name)
      .filter((incident) => incident.city)
  .filter((incident) => incident.precinct);
    return (
      <div >
        <div className="row">
          {buttons}
        </div>
        {this.options[targetTab].componentCreator(wellDescribedIncidents)}
      </div>);
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatchGetPendingIncidents: () => dispatch(getIncidentsByStatusAction(PENDING)),
    dispatchGetApprovedIncidents: () => dispatch(getIncidentsByStatusAction(APPROVED)),
    dispatchGetRejectedIncidents: () => dispatch(getIncidentsByStatusAction(REJECTED)),

  };
}

const mapStateToProps = createStructuredSelector({
  pendingIncidents: getPendingIncidents(),
  approvedIncidents: getApprovedIncidents(),
  rejectedIncidents: getRejectedIncidents(),
  approvedIncidentsPagination: getApprovedPagination(),
  rejectedIncidentsPagination: getRejectedPagination(),
  pendingIncidentsPagination: getPendingPagination(),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageTypeSelector);
