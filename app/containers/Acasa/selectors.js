import { createSelector } from 'reselect';
const selectHome = () => (state) => state.get('acasa');


const getIncidents = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('incidents')
);

const getName = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('name')
);

const getPrenume = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('prenume')
);

const getSelectedCounty = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('selectedCounty')
);

const countyId = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('countyId')
);

const cityId = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('cityId')
);

const map = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('map')
);

const getCities = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('cities')
);

const getPrecints = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('precints')
);

const getDescription = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('description')
);

const getImage = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('img')
);

const getIncidentId = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('incidentId')
);

const getToken = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('token')
);

const getPrecintId = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('precintId')
);

export {
  getIncidents,
  getName,
  getPrenume,
  getSelectedCounty,
  countyId,
  cityId,
  map,
  getCities,
  getPrecints,
  getDescription,
  getImage,
  getIncidentId,
  getToken,
  getPrecintId,
};
