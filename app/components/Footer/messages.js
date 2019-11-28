/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */

/* eslint-disable camelcase */
import { defineMessages } from 'react-intl';

export const scope = 'app.components.Footer';
export const menu_scope = 'app.components.Footer.menu';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Footer component!',
  },
  navigation_home: {
    id: `${scope}.menu.home`,
    defaultMessage: 'Home',
  },
  navigation_experience: {
    id: `${scope}.menu.experience`,
    defaultMessage: 'Experience',
  },
  navigation_contact: {
    id: `${scope}.menu.contact`,
    defaultMessage: 'Contact',
  },
  license: {
    id: `${scope}.license`,
    defaultMessage: 'This is the license!',
  },
});
