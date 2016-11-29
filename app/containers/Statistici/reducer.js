/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';
// import {
//   CHANGE_LOCALE,
// } from './constants';
import {
  DEFAULT_LOCALE,
} from '../App/constants'; // eslint-disable-line

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

function StatsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default StatsReducer;
