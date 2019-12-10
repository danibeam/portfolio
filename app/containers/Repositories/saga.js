import { put, all } from 'redux-saga/effects';
import { GET_REPOS } from './constants';

// Individual exports for testing
export default function* repositoriesSaga() {
  yield all([getRepos()]);
  // yield [takeLatest(GET_REPOS, getRepos)];
}

function* getRepos() {
  const json = yield fetch('https://api.github.com/users/danibeam/repos').then(
    res => res.json(),
    error => console.log('Error fetching repos => ', error),
  );

  yield put({ type: GET_REPOS, json });
}
