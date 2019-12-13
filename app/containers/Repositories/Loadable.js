/**
 *
 * Asynchronously loads the component for Repositories
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
