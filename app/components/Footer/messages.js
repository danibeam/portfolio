/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Footer';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Footer component!',
  },
  social_media: {
    id: `${scope}.social_media`,
    defaultMessage: 'This is the social_media!',
  },
  license: {
    id: `${scope}.license`,
    defaultMessage: 'This is the license!',
  },
});
