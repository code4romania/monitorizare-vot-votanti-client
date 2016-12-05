import { createSelector } from 'reselect';
const selectSesizari = () => (state) => state.get('sesizari');


const getIncidents = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('incidents')
);

const getPagination = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('pagination')
);

const getNextPage = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('nextPage')
);

const countyId = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('countyId')
);

const cities = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('cities')
);

export {
  getIncidents,
  getPagination,
  getNextPage,
  countyId,
  cities,
};
