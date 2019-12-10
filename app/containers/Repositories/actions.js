/*
 *
 * Repositories actions
 *
 */

import { DEFAULT_ACTION, GET_REPOS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getRepos() {
  console.log('getRepos');
  return {
    type: GET_REPOS,
  };
}
