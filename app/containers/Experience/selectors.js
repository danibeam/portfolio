import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the experience state domain
 */

const selectExperienceDomain = state => state.experience || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Experience
 */

const makeSelectExperience = () =>
  createSelector(
    selectExperienceDomain,
    substate => substate,
  );

export default makeSelectExperience;
export { selectExperienceDomain };
