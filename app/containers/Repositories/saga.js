import { put, all } from 'redux-saga/effects';
import { GET_REPOS } from './constants';

const authHeaders = new Headers();

// Individual exports for testing
export default function* repositoriesSaga() {
  yield all([getRepos()]);
  // yield [takeLatest(GET_REPOS, getRepos)];
}

function* getRepos() {
  authHeaders.set(
    'Authorization',
    `Basic ${Buffer.from(
      'danibeam:acbfbd2a99d0a736f77bdec2a9f6dc9f6100deea',
    ).toString('base64')}`,
  );
  const json = yield fetch(
    'https://api.github.com/users/danibeam/repos?visibility=public&sort=created',
    {
      method: 'GET',
      // headers: authHeaders,
    },
  ).then(
    res => res.json(),
    // error => console.log('Error fetching repos => ', error),
  );

  yield put({ type: GET_REPOS, json });
}
