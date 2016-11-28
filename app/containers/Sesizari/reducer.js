import { fromJS } from 'immutable';
import { INCIDENTS_LODADED } from './constants';
import * as _ from 'lodash';

const initialState = fromJS({
  incidents: [],
  pagination: {},
  nextPage: 1,
});

function sesizariReducer(state = initialState, action) {
  switch (action.type) {
    case INCIDENTS_LODADED:
      return state
        .set('incidents', _.concat(state.get('incidents'), action.incidents))
        .set('pagination', action.pagination)
        .set('nextPage', action.pagination.currentPage + 1);
    default:
      return state;
  }
}

export default sesizariReducer;
