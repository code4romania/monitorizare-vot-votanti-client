import React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';
import { browserHistory } from 'react-router';
import Loading from 'components/Loading';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

import IncidentItem from './item';

const IncidentWrap = styled.div`
  padding: 10px 20px 60px;
`;


export class RightContainer extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  browseToSesizari() {
    browserHistory.push('/sesizari');
  }
  render() {
    if (_.isArray(this.props.incidents)) {
      return (
        <div className="col-xs-12 col-lg-6">
          <IncidentWrap>
            <div className="row">
              <div className="col-xs-12">
                <h2>Ultimele sesizari</h2>
                { /* TODO: last updated @ time goes here */ }
              </div>
            </div>

            <div className="row">
              {this.props.incidents.map((tile, index) => (
                <IncidentItem {...tile} key={index} handleOpen={this.props.handleOpen} />
              ))}
            </div>

            <div className="row">
              <div className="col-xs-12">
                <RaisedButton
                  label="Vezi toate sesizarile"
                  labelPosition="before"
                  primary
                  className="button"
                  icon={<ChevronRight />}
                  onClick={this.browseToSesizari}
                />
              </div>
            </div>
          </IncidentWrap>
        </div>
      );
    }
    return <Loading />;
  }
}

RightContainer.propTypes = {
  incidents: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  handleOpen: React.PropTypes.func,
};

export default RightContainer;
