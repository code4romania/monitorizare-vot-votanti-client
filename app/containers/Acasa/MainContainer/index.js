/**
 * Created by dcorde on 08.11.2016.
 */
import React from 'react';

import LeftContainer from './components/LeftContainer/index';
import RightContainer from './components/RightContainer/index';

export function MainContainer(props) { // eslint-disable-line react/prefer-stateless-function
  return (

    <section className="container">
      <div className="row">
        <LeftContainer />
        <RightContainer {...props} />
      </div>
    </section>

  );
}

export default MainContainer;

