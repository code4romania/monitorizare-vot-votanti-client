import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Wrapper = styled.div`
  // ceva e funky aici, n-ar trebui sa fie nevoie de asta
  overflow-x: hidden;
`;

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Wrapper className="wrap">
        <Header {...this.props.location} />
        {React.cloneElement(this.props.children, { counties: this.props.counties, incidentTypes: this.props.incidentTypes })}
        <Footer />
      </Wrapper>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object,
  counties: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  incidentTypes: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
};

export default App;
