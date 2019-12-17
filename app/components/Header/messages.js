/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';
export const common = 'app.common';

export default defineMessages({
  // header: {
  //   id: `${scope}.header`,
  //   defaultMessage: 'This is the Header component!',
  // },
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
    download_cv: {
      id: `${common}.download_cv`,
      defaultMessage: 'CV',
    },
  },
});
