import { SHORT_INCIDENTS, SHORT_INCIDENTS_LODADED } from './constants';
import * as _ from 'lodash';

export function getIncidentsAction() {
  return {
    type: SHORT_INCIDENTS,
  };
}

export function incidentsLoaded(incidents) {
  return {
    type: SHORT_INCIDENTS_LODADED,
    incidents: _.slice(incidents.data, 0, 8),
  };
}
