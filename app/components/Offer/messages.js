/*
 * Offer Messages
 *
 * This contains all the text for the Offer component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.offer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Offer component!',
  },
  dev: {
    id: `${scope}.dev`,
    defaultMessage: 'Dev',
  },
  architecture: {
    id: `${scope}.architecture`,
    defaultMessage: 'Architecture',
  },
  team: {
    id: `${scope}.team`,
    defaultMessage: 'Team',
  },
});
