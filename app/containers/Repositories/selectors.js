import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the repositories state domain
 */

const selectRepositoriesDomain = state => state.repositories || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Repositories
 */

const makeSelectRepositories = () =>
  createSelector(
    selectRepositoriesDomain,
    substate => substate,
  );

export default makeSelectRepositories;
export { selectRepositoriesDomain };
