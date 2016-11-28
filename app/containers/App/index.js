import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Wrapper = styled.div`
  background: #F9F9F9;
  color: #2d2d2d;
  font-family: 'Arimo', sans-serif;

  .page-hero {
    text-align: center;
    padding: 20px 0 40px;
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
        {React.Children.toArray(this.props.children)}
        <Footer />
      </Wrapper>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object,
};
