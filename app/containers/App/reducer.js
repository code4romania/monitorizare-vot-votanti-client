import { fromJS } from 'immutable';
import { GET_COUNTIES_SUCCESS, GET_INCIDENT_TYPES_SUCCESS } from './constants';

const initialState = fromJS({
  counties: [],
  incidentTypes: [],
  loggedIn: false,
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTIES_SUCCESS:
      return state
        .set('counties', action.counties);
    case GET_INCIDENT_TYPES_SUCCESS:
      return state
        .set('incidentTypes', action.incidentTypes);
    case 'AUTHENTICATION_SUCCESFUL':
      sessionStorage.setItem('jwtToken', action.response.token);
      return state
        .set('loggedIn', true);
    default:
      return state;
  }
}

export default AppReducer;
