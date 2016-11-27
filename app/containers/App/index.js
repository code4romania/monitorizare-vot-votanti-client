import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Wrapper = styled.div`
  font-family: 'Arimo', sans-serif;

  .page-hero {
    text-align: center;
  }
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Wrapper className="wrap">
        <Header {...this.props.location} />

        <div className="container">
          {React.Children.toArray(this.props.children)}
        </div>

        <Footer />
      </Wrapper>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object,
};
