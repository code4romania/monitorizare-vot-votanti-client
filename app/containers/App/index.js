/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Wrapper = styled.div`
  // ceva e funky aici, n-ar trebui sa fie nevoie de asta
  overflow-x: hidden;
`;

function App(props) {
  return (
    <Wrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <Header {...this.props.location} />
      {React.Children.toArray(props.children)}
      <Footer />
    </Wrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
};

export default App;
