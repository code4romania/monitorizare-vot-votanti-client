import { fromJS } from 'immutable';
import { SHORT_INCIDENTS_LODADED } from './constants';

const initialState = fromJS({
  incidents: [],
});

function acasaReducer(state = initialState, action) {
  switch (action.type) {
    case SHORT_INCIDENTS_LODADED:
      return state
        .set('incidents', action.incidents);
    default:
      return state;
  }
}

export default acasaReducer;
