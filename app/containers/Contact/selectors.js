import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contact state domain
 */

const selectContactDomain = state => state.contact || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Contact
 */

const makeSelectContact = () =>
  createSelector(
    selectContactDomain,
    substate => substate,
  );

export default makeSelectContact;
export { selectContactDomain };
