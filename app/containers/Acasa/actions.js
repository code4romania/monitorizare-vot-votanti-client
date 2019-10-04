import { RESET_CITY, SHORT_INCIDENTS, RESET_FORM, SET_PRECINT_ID, SET_CAPTCHA_KEY, GET_PRECINTS_SUCCESS, SET_INCIDENT_ID, SUBMIT_FORM, SET_IMAGE, SET_DESCRIPTION, SHORT_INCIDENTS_LODADED, SET_NUME, SET_PRESENCE, SET_PRENUME, SET_CITY, SET_MAP, RESET_COUNTY, GET_PRECINTS, SET_COUNTY, GET_CITIES, SET_CITIES } from './constants';
import * as _ from 'lodash';

export function getIncidentsAction() {
  return {
    type: SHORT_INCIDENTS,
  };
}

export function incidentsLoaded(incidents) {
  return {
    type: SHORT_INCIDENTS_LODADED,
    incidents: _.slice(incidents.data, 0, 6),
  };
}

export function setNumeAction(name) {
  return {
    type: SET_NUME,
    name,
  };
}

export function setActiveMapAction(map) {
  return {
    type: SET_MAP,
    map,
  };
}

export function setPrenumeAction(prenume) {
  return {
    type: SET_PRENUME,
    prenume,
  };
}

export function resetCountyAction() {
  return {
    type: RESET_COUNTY,
  };
}

export function resetCityAction() {
  return {
    type: RESET_CITY,
  };
}

export function setCountyAction(id) {
  return {
    type: SET_COUNTY,
    id,
  };
}

export function setCityAction(id) {
  return {
    type: SET_CITY,
    id,
  };
}

export function getCitiesAction() {
  return {
    type: GET_CITIES,
  };
}

export function getPrecintsAction() {
  return {
    type: GET_PRECINTS,
  };
}

export function setPrecintIdAction(id) {
  return {
    type: SET_PRECINT_ID,
    id,
  };
}

export function getPrecintsSuccess(precints) {
  const newPrecints = [];
  _.each(precints, (precint) => {
    const newPrecint = {
      id: precint.id,
      value: precint.id,
      county: precint.county,
      precinctNo: precint.precinctNo,
      text: `Sectia Nr: ${precint.precinctNo}`,
    };
    newPrecints.push(newPrecint);
  });
  return {
    type: GET_PRECINTS_SUCCESS,
    precints: newPrecints,
  };
}

export function setPresenceAction(active) {
  return {
    type: SET_PRESENCE,
    active,
  };
}

export function setValidationKeyAction(key) {
  return {
    type: SET_CAPTCHA_KEY,
    key,
  };
}

export function setDescriptionAction(description) {
  return {
    type: SET_DESCRIPTION,
    description,
  };
}

export function resetFormAction() {
  return {
    type: RESET_FORM,
  };
}

export function uploadImageAction(image) {
  return {
    type: SET_IMAGE,
    image,
  };
}

export function submitFormAction() {
  return {
    type: SUBMIT_FORM,
  };
}

export function setIncidentIdAction(id) {
  return {
    type: SET_INCIDENT_ID,
    id,
  };
}

export function getCitiesSuccess(cities) {
  const newCities = [];
  _.each(cities, (city) => {
    const newCounty = {
      id: city.id,
      value: city.id,
      county: {
        id: city.county.id,
        name: city.county.name,
        code: city.county.code,
      },
      name: city.name,
      text: city.name,
      sirutaCode: city.sirutaCode,
      electoralCircleCode: city.electoralCircleCode,
    };
    newCities.push(newCounty);
  });
  return {
    type: SET_CITIES,
    cities: newCities,
  };
}
