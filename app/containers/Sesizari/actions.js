import { INCIDENTS, INCIDENTS_LODADED, SET_ACTIVE_MAP, FILTER, FILTERS_LODADED, SET_TYPE, RESET_COUNTY, RESET_FILTERS } from './constants';
import { GET_CITIES, GET_INCIDENT_TYPES } from 'containers/App/constants';

export function getIncidentsAction() {
  return {
    type: INCIDENTS,
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
export function incidentsLoaded(incidents) {
  return {
    type: INCIDENTS_LODADED,
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
