import { GET_COUNTIES, GET_COUNTIES_SUCCESS, GET_INCIDENT_TYPES, GET_INCIDENT_TYPES_SUCCESS } from './constants';
import * as _ from 'lodash';

export function getCountiesAction() {
  return {
    type: GET_COUNTIES,
  };
}

export function getIncidentTypesAction() {
  return {
    type: GET_INCIDENT_TYPES,
  };
}
export function getCountiesSuccess(counties) {
  const newArray = [];
  _.each(counties, (county) => {
    const newCounty = {
      text: county.name,
      incidents: county.incidents,
      id: county.id,
      value: county.id,
      code: county.code,
    };
    newArray.push(newCounty);
  });
  return {
    type: GET_COUNTIES_SUCCESS,
    counties: newArray,
  };
}


export function getIncidentTypesSuccess(incidentTypes) {
  return {
    type: GET_INCIDENT_TYPES_SUCCESS,
    incidentTypes,
  };
}
