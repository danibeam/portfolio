/*
 * CareerInNumbers Messages
 *
 * This contains all the text for the CareerInNumbers component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CareerInNumbers';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'This is the CareerInNumbers component!',
  },
  years: {
    id: `${scope}.years`,
    defaultMessage: 'Years',
  },
  companies: {
    id: `${scope}.companies`,
    defaultMessage: 'Companies',
  },
  projects: {
    id: `${scope}.projects`,
    defaultMessage: 'Projects',
  },
});
