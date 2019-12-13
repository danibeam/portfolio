import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the skills state domain
 */

const selectSkillsDomain = state => state.skills || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Skills
 */

const makeSelectSkills = () =>
  createSelector(
    selectSkillsDomain,
    substate => substate,
  );

export default makeSelectSkills;
export { selectSkillsDomain };
