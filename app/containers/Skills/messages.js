/*
 * Skills Messages
 *
 * This contains all the text for the Skills container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Skills';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Skills container!',
  },
  core: {
    id: `${scope}.core`,
    defaultMessage: 'Core Skills!',
  },
  headline: {
    id: `${scope}.headline`,
    defaultMessage: 'Skills headline',
  },
});
