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

export {
  getIncidents,
  getName,
  getPrenume,
  getSelectedCounty,
  countyId,
  getCities,
  getPrecints,
  getDescription,
  getImage,
};
