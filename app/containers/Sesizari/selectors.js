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

export {
  getIncidents,
  getPagination,
  getNextPage,
};
