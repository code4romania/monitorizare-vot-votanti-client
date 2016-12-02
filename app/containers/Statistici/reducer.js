import { fromJS } from 'immutable';
import {
  STATS_LOADED,
} from './constants';

const initialState = fromJS({
  stats: {},
});

function StatsReducer(state = initialState, action) {
  switch (action.type) {
    case STATS_LOADED:
      return state
      .set('stats', action.stats);
    default:
      return state;
  }
}

export default StatsReducer;
