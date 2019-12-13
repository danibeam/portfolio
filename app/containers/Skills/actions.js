/*
 *
 * Skills actions
 *
 */

import { DEFAULT_ACTION, CHANGE_THEME_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeThemeAction(payload) {
  return {
    type: CHANGE_THEME_ACTION,
    theme: payload,
  };
}
