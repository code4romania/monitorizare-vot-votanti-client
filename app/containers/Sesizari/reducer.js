import { fromJS } from 'immutable';
import {
  INCIDENTS_LODADED,
  APPROVED_INCIDENTS_LODADED,
  REJECTED_INCIDENTS_LODADED,
  PENDING_INCIDENTS_LODADED,
  SET_COUNTY,
  SET_ACTIVE_MAP,
  FILTERS_LODADED,
  SET_TYPE,
  RESET_COUNTY,
  RESET_FILTERS,
} from './constants';
import { GET_CITIES } from 'containers/App/constants';
import * as _ from 'lodash';

const initialState = fromJS({
  incidents: [],
  pagination: {},
  nextPage: 1,
  countyId: '',
  activeMap: 'country',
  typeId: '',
  approvedIncidents: [],
  approvedIncidentsPagination: {
    total: 0,
  },
  approvedIncidentsNextPage: 0,
  rejectedIncidents: [],
  rejectedIncidentsPagination: {
    total: 0,
  },
  rejectedIncidentsNextPage: 0,
  pendingIncidents: [],
  pendingIncidentsPagination: {
    total: 0,
  },
  pendingIncidentsNextPage: 0,
});

function sesizariReducer(state = initialState, action) {
  switch (action.type) {
    case INCIDENTS_LODADED:
      return state
        .set('incidents', _.concat(state.get('incidents'), action.incidents))
        .set('pagination', action.pagination)
        .set('nextPage', action.pagination.currentPage + 1);
    case APPROVED_INCIDENTS_LODADED:
      return state
        .set('approvedIncidents', _.concat(state.get('approvedIncidents'), action.incidents))
        .set('approvedIncidentsPagination', action.pagination)
        .set('approvedIncidentsNextPage', action.pagination.currentPage + 1);
    case REJECTED_INCIDENTS_LODADED:
      return state
        .set('rejectedIncidents', _.concat(state.get('rejectedIncidents'), action.incidents))
        .set('rejectedIncidentsPagination', action.pagination)
        .set('rejectedIncidentsNextPage', action.pagination.currentPage + 1);
    case PENDING_INCIDENTS_LODADED:
      return state
        .set('pendingIncidents', _.concat(state.get('pendingIncidents'), action.incidents))
        .set('pendingIncidentsPagination', action.pagination)
        .set('pendingIncidentsNextPage', action.pagination.currentPage + 1);
    case FILTERS_LODADED:
      return state
        .set('incidents', action.incidents)
        .set('pagination', action.pagination);
    case SET_COUNTY:
      return state
        .set('countyId', action.value);
    case GET_CITIES:
      return state
        .set('countyId', action.cityId);
    case SET_TYPE:
      return state
        .set('typeId', action.value);
    case SET_ACTIVE_MAP:
      return state
        .set('activeMap', action.map);
    case RESET_COUNTY:
      return state
        .set('countyId', '')
        .set('cities', []);
    case RESET_FILTERS:
      return state
        .set('typeId', '')
        .set('countyId', '')
        .set('cities', [])
        .set('activeMap', 'country');
    default:
      return state;
  }
}

export default sesizariReducer;
