import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Wrapper = styled.div`
  // TODO: fix global styles, these shouldn be on body
  background: #f9f9f9;
  color: #2d2d2d;
  font-family: 'Arimo', sans-serif;
  // ceva e funky aici, n-ar trebui sa fie nevoie de asta
  overflow-x: hidden;

  .page-hero {
    text-align: center;
    padding: 20px 20px 40px;

    p {
      font-size: 16px;
    }
  }

  .form-col {
    background: #ffcc00;
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
