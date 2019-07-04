import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isLoggedIn } from '../utils/authUtils';


const withAdminWrapper = (WrappedComponent) => {
  const HOC = (props) => (
    isLoggedIn() ? <WrappedComponent
      {...this.props}
    /> : <div>Nu esti autorizat.</div>
  );
  return HOC;
};



export default
  withAdminWrapper
  ;
