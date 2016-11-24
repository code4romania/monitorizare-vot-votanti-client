import { createSelector } from 'reselect';
const selectSesizari = () => (state) => state.get('sesizari');


const getIncidents = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('incidents')
);

export {
  getIncidents,
};
