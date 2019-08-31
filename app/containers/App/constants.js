/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const GET_COUNTIES = 'GET_COUNTIES';
export const GET_COUNTIES_SUCCESS = 'GET_COUNTIES_SUCCESS';
export const GET_CITIES = 'GET_CITIES';
export const GET_INCIDENT_TYPES = 'GET_INCIDENT_TYPES';
export const GET_INCIDENT_TYPES_SUCCESS = 'GET_INCIDENT_TYPES_SUCCESS';
export const LOGIN = 'LOGIN';
