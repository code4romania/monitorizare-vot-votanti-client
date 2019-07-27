import React from 'react';
import styled from 'styled-components';
import { PendingMessagesList, ApprovedMessagesList, RejectedMessagesList } from '../MessagesList';
import { Button } from '../Button';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getIncidentsAction, getIncidentsByStatusAction } from '../../../../Sesizari/actions';
import { getApprovedIncidents, getPendingIncidents, getRejectedIncidents } from '../../../../Sesizari/selectors';
import { APPROVED, PENDING, REJECTED } from '../../../../Sesizari/constants';

export class MessageTypeSelector extends React.Component {
	options = [
		{
			text: 'Unread', 
			valuesName: 'pendingIncidents',
			prepareFunctionName: 'dispatchGetPendingIncidents',
			componentCreator: this.createPendingListComponent
		}, 
		{
			text: 'Accepted',
			valuesName: 'approvedIncidents',
			prepareFunctionName: 'dispatchGetApprovedIncidents',
			componentCreator: this.createApprovedListComponent
		}, 
		{
			text: 'Rejected',
			valuesName: 'rejectedIncidents',
			prepareFunctionName: 'dispatchGetRejectedIncidents',
			componentCreator: this.createRejectedListComponent
		}
	];

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
		this.props[this.options[index].prepareFunctionName]();
		this.setState({tabSelected: newTabSelected});
	}

  componentDidMount() {
    this.props.dispatchGetPendingIncidents();
  }

  createApprovedListComponent(incidents) {
  	return (
				<ApprovedMessagesList incidents={incidents} />
		);
  }

  createRejectedListComponent(incidents) {
		return (
				<RejectedMessagesList incidents={incidents} />
		);
  }

  createPendingListComponent(incidents) {
		return (
				<PendingMessagesList incidents={incidents} />
		);
  }

	render() {
		const buttons = this.options
			.map(value => value.text)
			.map((value, index) => 
					<Button key={index} 
							backgroundColor={this.state.tabSelected[index] ? '#FFFFFF' : '#E5E5E5'}
							textColor={'#5F288D'}
							onClick={() => this.handleClick(index)}>
								{value}
					</Button>);

		const targetTab = this.state.tabSelected.indexOf(true);	
		const incidents = this.props[this.options[targetTab].valuesName];
		const wellDescribedIncidents = incidents
			.filter(incident => incident)
			.filter(incident => incident.name)
			.filter(incident => incident.city)
			.filter(incident => incident.precinct);
		return (
			<div >
				<div className="row">
					{buttons}
				</div>

				{this.options[targetTab].componentCreator(wellDescribedIncidents)}
			</div>
		);
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
  rejectedIncidents: getRejectedIncidents() 
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageTypeSelector);