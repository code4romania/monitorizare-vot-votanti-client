import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { getIncidentsByStatusAction } from '../../../../Sesizari/actions';
import { getApprovedIncidents, getPendingIncidents, getRejectedIncidents } from '../../../../Sesizari/selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { APPROVED, PENDING, REJECTED } from '../../../../Sesizari/constants';

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

export class MessagesStats extends React.Component {
  static get propTypes() {
    return {
      dispatchGetPendingIncidents: PropTypes.func,
      dispatchGetApprovedIncidents: PropTypes.func,
      dispatchGetRejectedIncidents: PropTypes.func,
      rejectedIncidents: PropTypes.array,
      pendingIncidents: PropTypes.array,
      approvedIncidents: PropTypes.array,
    };
  }
  componentDidMount() {
    this.props.dispatchGetPendingIncidents();
    this.props.dispatchGetApprovedIncidents();
    this.props.dispatchGetRejectedIncidents();
  }

  render() {
    const pendingCount = this.props.pendingIncidents.length;
    const approvedCount = this.props.approvedIncidents.length;
    const rejectedCount = this.props.rejectedIncidents.length;
    const totalCount = pendingCount + approvedCount + rejectedCount;

    return (
      <div className="row">
        <GrayMessageStatText>{totalCount} messages</GrayMessageStatText>
        <Ellipse />
        <MessageStatText>{pendingCount} unread</MessageStatText>
        <Ellipse />
        <GreenMessageStatText>{approvedCount} approved</GreenMessageStatText>
        <Ellipse />
        <RedMessageStatText>{rejectedCount} rejected</RedMessageStatText>
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
  rejectedIncidents: getRejectedIncidents(),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesStats);
