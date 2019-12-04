/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';
export const profileScope = 'app.components.Profile';
export const commonsScope = 'app.common';

export default defineMessages({
  loading_portfolio: {
    id: `${commonsScope}.loading_portfolio`,
    defaultMessage: 'loading portfolio',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
  profile: {
    header: {
      id: `${profileScope}.header`,
      defaultMessage: 'Profile header',
    },
    headline: {
      id: `${profileScope}.headline`,
      defaultMessage: 'Profile headline',
    },
    content: {
      id: `${profileScope}.content`,
      defaultMessage: 'Profile content',
    },
  },
  getInTouch: {
    id: `${commonsScope}.get_touch`,
    defaultMessage: 'Get in touch',
  },
});
