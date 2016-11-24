import { createSelector } from 'reselect';
const selectSesizari = () => (state) => state.get('acasa');


const getIncidents = () => createSelector(
  selectSesizari(),
  (sesizariState) => sesizariState.get('incidents')
);

export {
  getIncidents,
};
