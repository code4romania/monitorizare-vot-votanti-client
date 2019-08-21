import { createSelector } from 'reselect';
const selectSesizari = () => (state) => state.get('sesizari');


const getIncidents = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('incidents')
);
const getPendingIncidents = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('pendingIncidents')
);
const getApprovedIncidents = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('approvedIncidents')
);
const getRejectedIncidents = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('rejectedIncidents')
);

const getPagination = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('pagination')
);

const getApprovedPagination = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('approvedIncidentsPagination')
);

const getPendingPagination = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('pendingIncidentsPagination')
);

const getRejectedPagination = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('rejectedIncidentsPagination')
);

const getNextPage = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('nextPage')
);

const getApprovedNextPage = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('approvedIncidentsNextPage')
);

const getPendingNextPage = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('pendingIncidentsNextPage')
);

const getRejectedNextPage = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('rejectedIncidentsNextPage')
);

const countyId = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('countyId')
);

const cities = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('cities')
);

const activeMap = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('activeMap')
);

const typeId = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('typeId')
);

const cityId = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('cityId')
);

export {
  getIncidents,
  getApprovedIncidents,
  getPendingIncidents,
  getRejectedIncidents,
  getApprovedNextPage,
  getPendingNextPage,
  getRejectedNextPage,
  getApprovedPagination,
  getPendingPagination,
  getRejectedPagination,
  getPagination,
  getNextPage,
  countyId,
  cities,
  activeMap,
  typeId,
  cityId,
};
