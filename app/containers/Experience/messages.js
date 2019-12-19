/*
 * Experience Messages
 *
 * This contains all the text for the Experience container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Experience';
export const common = 'app.common';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Experience',
  },
  present: {
    id: `${scope}.present`,
    defaultMessage: 'Present',
  },
  spain: {
    id: `${scope}.spain`,
    defaultMessage: 'Spain',
  },
  uk: {
    id: `${scope}.uk`,
    defaultMessage: 'UK',
  },
  Accenture: {
    id: `${scope}.Accenture`,
    defaultMessage: 'Accenture',
  },
  Cyient: {
    id: `${scope}.Cyient`,
    defaultMessage: 'Cyient',
  },
  NitsNets: {
    id: `${scope}.NitsNets`,
    defaultMessage: 'NitsNets',
  },
  SEODescription: {
    id: `${common}.description`,
    defaultMessage: 'Experience',
  },
});
