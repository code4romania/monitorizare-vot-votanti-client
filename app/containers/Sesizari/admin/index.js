import React from 'react';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import {
  approveIncidentAction,
  filterIncidentsAction,
  getIncidentsByStatusAction,
  rejectIncidentAction,
} from '../actions';
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
import { IncidentRow } from '../components/incident-row';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import RaisedButton from 'material-ui/RaisedButton';

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

const buttonStyle = {
  height: '60px',
};

const buttonOverlayStyle = {
  height: '60px',
};

const buttonLabelStyle = {
  lineHeight: '60px',
  fontSize: '16px',
  letterSpacing: '1px',
};

const buttonIconStyle = {
  color: '#ffffff',
};

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
  };

  loadNextIncidents = () => {
    this.props.dispatchGetMoreIncidents();
  };

  render() {
    const total = (this.props.pendingIncidentsPagination.total || 0) + (this.props.approvedIncidentsPagination.total || 0) + (this.props.rejectedIncidentsPagination.total || 0);
    const isLastPage = this.props.pendingIncidentsPagination.currentPage === this.props.pendingIncidentsPagination.lastPage;
    return (
      <div>
        <Helmet
          title="Sesizări - Monitorizare Vot"
          meta={[
            { name: 'description', content: 'Sesizări' },
          ]}
        />
        <div className="container" style={{ marginLeft: '65px' }}>
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
        <div className={'row'}>
          <div className="col-sm-12" style={{ marginTop: '10px', marginLeft: '65px' }}>
            {this.props.pendingIncidents.map((item, index) => (
              item.createdAt ?
                <IncidentRow key={index} incident={item} approveIncident={() => this.props.approveIncident(item.id)} rejectIncident={() => this.props.rejectIncident(item.id)} />
              : null)
            )}
          </div>
        </div>
        <div className="bottom-cta">
          <RaisedButton
            label={isLastPage ? 'Nu mai sunt sesizări' : 'Încarcă mai multe sesizări'}
            buttonStyle={buttonStyle}
            overlayStyle={buttonOverlayStyle}
            labelStyle={buttonLabelStyle}
            labelPosition="after"
            primary
            icon={isLastPage ? '' : <Refresh style={buttonIconStyle} />}
            disabled={isLastPage}
            onClick={this.loadNextIncidents}
          />
        </div>
      </div>
    );
  }
}


Messages.propTypes = {
  pendingIncidents: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  // approvedIncidents: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.array,
  // ]),
  // rejectedIncidents: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.array,
  // ]),
  dispatchGetIncidents: React.PropTypes.func,
  dispatchGetMoreIncidents: React.PropTypes.func,
  pendingIncidentsPagination: React.PropTypes.object,
  approvedIncidentsPagination: React.PropTypes.object,
  rejectedIncidentsPagination: React.PropTypes.object,
  approveIncident: React.PropTypes.func,
  rejectIncident: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatchGetIncidents: () => {
      dispatch(getIncidentsByStatusAction(PENDING));
      dispatch(getIncidentsByStatusAction(APPROVED));
      dispatch(getIncidentsByStatusAction(REJECTED));
    },
    filterIncidents: () => dispatch(filterIncidentsAction()),
    dispatchGetMoreIncidents: () => dispatch(getIncidentsByStatusAction(PENDING)),
    approveIncident: (id) => dispatch(approveIncidentAction(id)),
    rejectIncident: (id) => dispatch(rejectIncidentAction(id)),
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
