import React from 'react';
import { isLoggedIn } from '../utils/authUtils';


const withAdminWrapper = (WrappedComponent) =>
   () => (
    isLoggedIn() ? <WrappedComponent
      {...this.props}
    /> : <div>Nu esti autorizat.</div>
  )
;


export default
  withAdminWrapper
  ;
