import {
  GET_INCIDENTS,
  INCIDENTS_LODADED,
  SET_ACTIVE_MAP,
  FILTER,
  FILTERS_LODADED,
  SET_TYPE,
  RESET_COUNTY,
  RESET_FILTERS,
  APPROVED,
  APPROVED_INCIDENTS_LODADED,
  REJECTED,
  REJECTED_INCIDENTS_LODADED,
  PENDING,
  PENDING_INCIDENTS_LODADED, APPROVE_INCIDENT, REJECT_INCIDENT,
} from './constants';
import { GET_CITIES, GET_INCIDENT_TYPES } from 'containers/App/constants';

export function getIncidentsAction() {
  return {
    type: GET_INCIDENTS,
  };
}

export function getIncidentsByStatusAction(status) {
  return {
    type: GET_INCIDENTS,
    status,
  };
}

export function filterIncidentsAction() {
  return {
    type: FILTER,
  };
}

export function resetAllFiltersAction() {
  return {
    type: RESET_FILTERS,
  };
}

export function resetCountyAction() {
  return {
    type: RESET_COUNTY,
  };
}
export function incidentsLoaded(incidents, status) {
  let type;
  switch (status) {
    case APPROVED:
      type = APPROVED_INCIDENTS_LODADED;
      break;
    case REJECTED:
      type = REJECTED_INCIDENTS_LODADED;
      break;
    case PENDING:
      type = PENDING_INCIDENTS_LODADED;
      break;
    default:
      type = INCIDENTS_LODADED;
  }
  return {
    type,
    incidents: incidents.data,
    pagination: incidents.paginator,
  };
}

export function setTypeAction(value) {
  return {
    type: SET_TYPE,
    value,
  };
}
export function approveIncidentAction(value) {
  return {
    type: APPROVE_INCIDENT,
    id: value,
  };
}
export function rejectIncidentAction(value) {
  return {
    type: REJECT_INCIDENT,
    id: value,
  };
}


export function filtersLoaded(incidents) {
  return {
    type: FILTERS_LODADED,
    incidents: incidents.data,
    pagination: incidents.paginator,
  };
}

export function selectedCountyAction(cityId) {
  return {
    type: GET_CITIES,
    cityId,
  };
}

export function getIncidentTypesAction(cityId) {
  return {
    type: GET_INCIDENT_TYPES,
    cityId,
  };
}

export function setActiveMapAction(map) {
  return {
    type: SET_ACTIVE_MAP,
    map,
  };
}
