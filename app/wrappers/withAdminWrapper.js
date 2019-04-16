import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isLoggedIn } from '../containers/App/selectors';

const withAdminWrapper = (WrappedComponent) => {
  const HOC = (props) => (
    sessionStorage.getItem('jwtToken') ? <WrappedComponent
      {...this.props}
    /> : <div>Nu esti autorizat.</div>
  );
  return HOC;
};



export default
  withAdminWrapper
  ;
