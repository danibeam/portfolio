/*
 * Contact Messages
 *
 * This contains all the text for the Contact component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Contact';
export const common = 'app.common';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Contact',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Contact component!',
  },
  mail: {
    id: `${scope}.mail`,
    defaultMessage: 'Mail',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Phone',
  },
  socialmedia: {
    id: `${scope}.socialmedia`,
    defaultMessage: 'SM',
  },
  copy: {
    id: `${common}.copy`,
    defaultMessage: 'copy',
  },
  copied: {
    id: `${common}.copied`,
    defaultMessage: 'copied',
  },
  SEODescription: {
    id: `${common}.description`,
    defaultMessage: 'Contact',
  },
});
