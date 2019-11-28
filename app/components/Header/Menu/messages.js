/*
 * Menu Messages
 *
 * This contains all the text for the Menu component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Menu';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Menu component!',
  },
  menu: {
    home: {
      id: `${scope}.menu.home`,
      defaultMessage: 'Home',
    },
    experience: {
      id: `${scope}.menu.experience`,
      defaultMessage: 'Experience',
    },
    contact: {
      id: `${scope}.menu.contact`,
      defaultMessage: 'Contact',
    },
  },
});
