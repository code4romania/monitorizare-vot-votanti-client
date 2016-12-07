/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { getCountiesAction, getIncidentTypesAction } from './actions';
import { getCounties, getIncidentTypes } from './selectors';

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

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Wrapper>
            <Header {...this.props.location} />
            {React.cloneElement(this.props.children, { counties: this.props.counties, incidentTypes: this.props.incidentTypes })}
            <Footer />
          </Wrapper>
        </div>
      </MuiThemeProvider>
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
