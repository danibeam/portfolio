/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';
export const common = 'app.common';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Resource not found',
  },
  message: {
    id: `${scope}.message`,
    defaultMessage: 'Oops! You may try something different...',
  },
  go_home: {
    id: `${common}.go_home`,
    defaultMessage: 'Go Home',
  },
});
