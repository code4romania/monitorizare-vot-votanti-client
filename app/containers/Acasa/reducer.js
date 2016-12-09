import { fromJS } from 'immutable';
import { SET_PRESENCE, SET_DESCRIPTION, SHORT_INCIDENTS_LODADED, SET_NUME, SET_PRENUME, SET_MAP, SET_COUNTY, SET_CITIES, SET_CITY } from './constants';

const initialState = fromJS({
  incidents: [],
  name: '',
  prenume: '',
  countyId: '',
  cityId: '',
  map: 'country',
  cities: [],
  precints: [],
  description: '',
});

function acasaReducer(state = initialState, action) {
  switch (action.type) {
    case SHORT_INCIDENTS_LODADED:
      return state
        .set('incidents', action.incidents);
    case SET_NUME:
      return state
        .set('name', action.name);
    case SET_PRENUME:
      return state
        .set('prenume', action.prenume);
    case SET_MAP:
      return state
        .set('map', action.map);
    case SET_COUNTY:
      return state
        .set('countyId', action.id);
    case SET_CITY:
      return state
        .set('cityId', action.id);
    case SET_CITIES:
      return state
        .set('cities', action.cities);
    case SET_PRESENCE:
      return state
        .set('inside', action.active);
    case SET_DESCRIPTION:
      return state
        .set('description', action.description);
    default:
      return state;
  }
}

export default acasaReducer;
