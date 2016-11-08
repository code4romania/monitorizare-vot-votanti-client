/**
 * Created by dcorde on 08.11.2016.
 */
import React from 'react';
import LeftContainer from './components/LeftContainer/index';
import RightContainer from './components/RightContainer/index';

export function MainContainer() { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="row centerContainer">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

export default MainContainer;

