import { fromJS } from 'immutable';
import { INCIDENTS_LODADED } from './constants';

const initialState = fromJS({
  incidents: {},
});

function sesizariReducer(state = initialState, action) {
  switch (action.type) {
    case INCIDENTS_LODADED:
      return state
        .set('incidents', action.incidents);
    default:
      return state;
  }
}

export default sesizariReducer;
