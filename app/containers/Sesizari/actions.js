import { INCIDENTS, INCIDENTS_LODADED } from './constants';
export function getIncidentsAction() {
  return {
    type: INCIDENTS,
  };
}

export function incidentsLoaded(incidents) {
  return {
    type: INCIDENTS_LODADED,
    incidents,
  };
}
