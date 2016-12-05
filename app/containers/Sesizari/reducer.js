import { fromJS } from 'immutable';
import { INCIDENTS_LODADED, SET_COUNTY, SET_CITIES } from './constants';
import { GET_CITIES } from 'containers/App/constants';
import * as _ from 'lodash';

const initialState = fromJS({
  incidents: [],
  pagination: {},
  nextPage: 1,
  countyId: null,
  cities: [],
});

function sesizariReducer(state = initialState, action) {
  switch (action.type) {
    case INCIDENTS_LODADED:
      return state
        .set('incidents', _.concat(state.get('incidents'), action.incidents))
        .set('pagination', action.pagination)
        .set('nextPage', action.pagination.currentPage + 1);
    case SET_COUNTY:
      return state
        .set('countyId', action.value);
    case GET_CITIES:
      return state
        .set('countyId', action.cityId);
    case SET_CITIES:
      return state
        .set('cities', action.cities);
    default:
      return state;
  }
}

export default sesizariReducer;
