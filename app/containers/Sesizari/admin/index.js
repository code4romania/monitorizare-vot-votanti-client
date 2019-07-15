import React from 'react';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { filterIncidentsAction, getIncidentsByStatusAction } from '../actions';
import {
  getApprovedIncidents,
  getPendingIncidents,
  getRejectedIncidents,
  getApprovedPagination,
  getRejectedPagination,
  getPendingPagination,
} from '../selectors';
import { connect } from 'react-redux';
import { APPROVED, PENDING, REJECTED } from '../constants';
import styled from 'styled-components';
import MessageType from '../components/message-type';

const DotColor = styled.span`
  color: purple;
 `;
const TitleFont = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 16px;
 `;
const AllMessages = styled.span`
  color: gray;
`;
const UnreadMessages = styled.span`
  color: black;
`;
const ApprovedMessages = styled.span`
  color: green;
`;
const RejectedMessages = styled.span`
  color: red;
`;

export class Messages extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      activeTab: 1,
    };
  }

  componentDidMount() {
    this.props.dispatchGetIncidents();
  }
  selectItem = (ev) => {
    this.setState({
      activeTab: parseInt(ev.currentTarget.id, 10),
    });
  }

  render() {
    const total = (this.props.pendingIncidentsPagination.total || 0) + (this.props.approvedIncidentsPagination.total || 0) + (this.props.rejectedIncidentsPagination.total || 0);
    return (
      <div>
        <Helmet
          title="Sesizări - Monitorizare Vot"
          meta={[
            { name: 'description', content: 'Sesizări' },
          ]}
        />
        <div className="container">
          <div className="row">
            <TitleFont>
              <AllMessages>{total} messages </AllMessages>
              <DotColor>&#x25cf;</DotColor>
              <UnreadMessages> {this.props.pendingIncidentsPagination.total || 0} unread </UnreadMessages>
              <DotColor>&#x25cf; </DotColor>
              <ApprovedMessages> {this.props.approvedIncidentsPagination.total || 0} approved </ApprovedMessages>
              <DotColor>&#x25cf;</DotColor>
              <RejectedMessages> {this.props.rejectedIncidentsPagination.total || 0} rejected</RejectedMessages>
            </TitleFont>
          </div>
          <div className="row">
            <MessageType title="Unread" activeTab={this.state.activeTab} id={1} selectItem={this.selectItem} />
            <MessageType title="Approved" activeTab={this.state.activeTab} id={2} selectItem={this.selectItem} />
            <MessageType title="Rejected" activeTab={this.state.activeTab} id={3} selectItem={this.selectItem} />
          </div>
        </div>
      </div>
    );
  }
}

Messages.propTypes = {
  // pendingIncidents: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.array,
  // ]),
  // approvedIncidents: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.array,
  // ]),
  // rejectedIncidents: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.array,
  // ]),
  dispatchGetIncidents: React.PropTypes.func,
  pendingIncidentsPagination: React.PropTypes.object,
  approvedIncidentsPagination: React.PropTypes.object,
  rejectedIncidentsPagination: React.PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatchGetIncidents: () => {
      dispatch(getIncidentsByStatusAction(PENDING));
      dispatch(getIncidentsByStatusAction(APPROVED));
      dispatch(getIncidentsByStatusAction(REJECTED));
    },
    filterIncidents: () => dispatch(filterIncidentsAction()),
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

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
