import React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';
import Loading from 'components/Loading';
import CallToAction from 'components/CallToAction';
import ItemIncident from 'components/ItemIncident';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const IncidentWrap = styled.div`
  padding: 10px 0 60px;
`;

export class RightContainer extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  render() {
    if (_.isArray(this.props.incidents)) {
      return (
        <div className="col-xs-12 col-lg-5">
          <IncidentWrap>
            <div className="row">
              <div className="col-xs-12">
                <h2>Ultimele sesizari</h2>
                { /* TODO: last updated @ time goes here */ }
              </div>
            </div>

            <div className="row">
              {this.props.incidents.map((tile, index) => (
                <div className="col-xs-12 col-sm-6" key={index} >
                  <ItemIncident {...tile} key={index} handleOpen={this.props.handleOpen} />
                </div>
              ))}
            </div>

            <div className="row">
              <div className="col-xs-12">
                <CallToAction
                  label="Vezi toate sesizarile"
                  icon={<ChevronRight />}
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
