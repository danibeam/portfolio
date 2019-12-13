/*
 *
 * Repositories reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_REPOS } from './constants';

export const initialState = {
  repos: [],
  loading: true,
};

/* eslint-disable default-case, no-param-reassign */
const repositoriesReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_REPOS:
        return { ...state, repos: action.json, loading: false };
      // break;
      default:
        return state;
    }
  });

export default repositoriesReducer;
