import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { all, fork } from 'redux-saga/effects';
import { GitbubState, githubReducer, githubSaga } from './github';

export interface StoreState {
  router: RouterState;
  githubState: GitbubState;
}

export function* saga() {
  yield all([fork(githubSaga)]);
}

const reducer = (history: History) =>
  combineReducers<StoreState>({
    router: connectRouter(history),
    githubState: githubReducer
  });

export default reducer;
