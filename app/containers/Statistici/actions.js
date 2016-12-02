import {
  GET_STATS,
  STATS_LOADED,
} from './constants';

export function getStatsAction() {
  return {
    type: GET_STATS,
  };
}

export function statsLoaded(stats) {
  return {
    type: STATS_LOADED,
    stats,
  };
}
