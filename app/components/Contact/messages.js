/*
 * Contact Messages
 *
 * This contains all the text for the Contact component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Contact';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Contact',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Contact component!',
  },
});
