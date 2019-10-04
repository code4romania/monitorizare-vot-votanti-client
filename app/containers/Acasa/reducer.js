import { fromJS } from 'immutable';
import { SET_PRESENCE, RESET_FORM, SET_PRECINT_ID, SET_CAPTCHA_KEY, GET_PRECINTS_SUCCESS, SET_IMAGE, SET_INCIDENT_ID, SET_DESCRIPTION, SHORT_INCIDENTS_LODADED, SET_NUME, SET_PRENUME, SET_MAP, SET_COUNTY, SET_CITIES, SET_CITY, RESET_CITY } from './constants';

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
  img: {},
  incidentId: '',
  token: undefined,
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
    case SET_INCIDENT_ID:
      return state
        .set('incidentId', action.id);
    case SET_CITY:
      return state
        .set('cityId', action.id);
    case SET_CITIES:
      return state
        .set('cities', action.cities);
    case GET_PRECINTS_SUCCESS:
      return state
        .set('precints', action.precints);
    case SET_PRESENCE:
      return state
        .set('inside', action.active);
    case SET_DESCRIPTION:
      return state
        .set('description', action.description);
    case SET_CAPTCHA_KEY:
      return state
        .set('token', action.key);
    case SET_IMAGE:
      return state
        .set('img', action.image);
    case RESET_CITY:
      return state
        .set('cityId', null);
    case SET_PRECINT_ID:
      return state
        .set('precintId', action.id);
    case RESET_FORM:
      return state
        .set('incidents', [])
        .set('name', '')
        .set('prenume', '')
        .set('countyId', '')
        .set('cityId', '')
        .set('cities', [])
        .set('incidentId', '')
        .set('description', '')
        .set('img', {})
        .set('token', undefined)
        .set('map', 'country')
        .set('precints', []);
    default:
      return state;
  }
}

export default acasaReducer;
