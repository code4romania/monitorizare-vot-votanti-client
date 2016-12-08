import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getCountiesAction, getIncidentTypesAction } from './actions';
import { getCounties, getIncidentTypes } from './selectors';
import Websocket from 'react-websocket';

const Wrapper = styled.div`
  // ceva e funky aici, n-ar trebui sa fie nevoie de asta
  overflow-x: hidden;
`;

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentWillMount() {
    this.props.dispatchGetCounties();
    this.props.dispatchIncidentTypes();
  }

  handleData = (state) => {
    console.log('state', state);
  }

  render() {
    return (
      <Wrapper className="wrap">
        <Header {...this.props.location} />
        {React.cloneElement(this.props.children, { counties: this.props.counties, incidentTypes: this.props.incidentTypes })}
        <Footer />
        <Websocket
          url="ws://portal-votanti-uat.azurewebsites.net:8889"
          onMessage={this.handleData}
        />
      </Wrapper>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object,
  dispatchGetCounties: React.PropTypes.func,
  dispatchIncidentTypes: React.PropTypes.func,
  counties: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  incidentTypes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
};


export function mapDispatchToProps(dispatch) {
  return {
    dispatchGetCounties: () => dispatch(getCountiesAction()),
    dispatchIncidentTypes: () => dispatch(getIncidentTypesAction()),
  };
}

const mapStateToProps = createStructuredSelector({
  counties: getCounties(),
  incidentTypes: getIncidentTypes(),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
