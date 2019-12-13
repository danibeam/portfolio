/*
 * DownloadCv Messages
 *
 * This contains all the text for the DownloadCv component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.download_cv';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the DownloadCv component!',
  },
  just_cv: {
    id: `app.common.just_cv`,
    defaultMessage: 'Just CV',
  },
  download_cv: {
    id: `app.common.download_cv`,
    defaultMessage: 'Download CV',
  },
});
