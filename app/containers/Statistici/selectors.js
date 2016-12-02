import { createSelector } from 'reselect';
const statsSelector = () => (state) => state.get('statistici');

const getStatsData = () => createSelector(
  statsSelector(),
  (statsState) => statsState.get('stats')
);

export {
  getStatsData,
};
