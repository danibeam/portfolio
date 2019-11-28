/*
 * Burger Messages
 *
 * This contains all the text for the Burger component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Burger';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Burger component!',
  },
});
