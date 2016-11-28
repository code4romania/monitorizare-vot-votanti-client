import React from 'react';
// import { GridList } from 'material-ui/GridList';
import IncidentItem from './item';
import * as _ from 'lodash';
import Loading from 'components/Loading';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { browserHistory } from 'react-router';

const buttonStyle = {
  backgroundColor: '#5F288D',
  color: 'white',
  padding: '0 25px',
  height: '50px',
};


export class RightContainer extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  browseToSesizari() {
    browserHistory.push('/sesizari');
  }
  render() {
    if (_.isArray(this.props.incidents)) {
      return (
        <div className="col-xs-12 col-lg-6">
          <div className="row">
            {this.props.incidents.map((tile, index) => (
              <IncidentItem {...tile} key={index} handleOpen={this.props.handleOpen} />
            ))}
            <div>
              <RaisedButton
                label="Vezi toate sesizarile"
                labelPosition="before"
                backgroundColor="#5F288D"
                primary
                icon={<ChevronRight />}
                buttonStyle={buttonStyle}
                onClick={this.browseToSesizari}
              />
            </div>
          </div>
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
