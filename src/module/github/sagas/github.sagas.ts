import { RequestError } from '@octokit/types';
import { call, delay, put, takeLatest } from 'redux-saga/effects';

import { ActionType } from 'typesafe-actions';
import {
  addRecentlySearch,
  bookMarkList,
  listIssueReposResponse,
  listUserReposResponse
} from '..';

import * as Actions from '../actions/github.action';

import { githubAPI } from '../apis/github.api';

import { push } from 'connected-react-router';
import { ROUTE_SEARCH_WITH_QUERY } from 'routes/const';

function* getRepositorySaga(
  action: ActionType<typeof Actions.getRepositoryAction.request>
) {
  try {
    const payload = action.payload;
    const data: listUserReposResponse = yield call(
      githubAPI.getRepositoryList,
      payload
    );
    const checkFirst = data.url.split('&page=')[1];
    if (checkFirst === '1') {
      yield put(push(ROUTE_SEARCH_WITH_QUERY(payload.q)));
    }

    yield put(Actions.getRepositoryAction.success({ ...data }));
  } catch (error) {
    yield put(Actions.getRepositoryAction.failure(error as RequestError));
  }
}
function* getIssueSaga(
  action: ActionType<typeof Actions.getIssueAction.request>
) {
  try {
    const payload = action.payload;

    const list: listIssueReposResponse['data'][] = [];
    const default_page_num = 100;
    const default_page = 1;

    for (let i = 0; i < payload.length; i++) {
      if (payload[i].open_issues_count / default_page_num > default_page) {
        const count = Math.ceil(
          payload[i].open_issues_count / default_page_num
        );

        for (let q = 0; q < count; q++) {
          yield delay(300);
          const data: listIssueReposResponse['data'][] = yield call(
            githubAPI.getIssueList,
            {
              owner: payload[i].owner,
              repo: payload[i].repo,
              per_page: default_page_num,
              page: q + 1
            }
          );
          list.push(...data);
        }
      } else {
        const data: listIssueReposResponse['data'][] = yield call(
          githubAPI.getIssueList,
          {
            owner: payload[i].owner,
            repo: payload[i].repo,
            per_page: default_page_num,
            page: default_page
          }
        );

        list.push(...data);
      }
    }

    yield put(Actions.getIssueAction.success(list));
  } catch (error) {
    yield put(Actions.getIssueAction.failure(error as RequestError));
  }
}

function* addBookMarkSaga(
  action: ActionType<typeof Actions.addBookMarkAction.request>
) {
  try {
    const payload = action.payload;
    const ls = localStorage.getItem('bookMark');
    const parse = ls && JSON.parse(ls);
    const limited = 3;
    if (parse) {
      if (parse.length > limited) {
        alert('최대 4개의 북마크를 저장할 수 있습니다.');
        yield put(Actions.addBookMarkAction.failure(new Error('limited')));
        return;
      }
      localStorage.setItem('bookMark', JSON.stringify([...parse, payload]));
    } else {
      localStorage.setItem('bookMark', JSON.stringify([payload]));
    }

    const sync = localStorage.getItem('bookMark');

    yield put(Actions.addBookMarkAction.success(sync && JSON.parse(sync)));
  } catch (error) {
    yield put(Actions.addBookMarkAction.failure(error));
  }
}
function* removeBookMarkSaga(
  action: ActionType<typeof Actions.removeBookMarkAction.request>
) {
  try {
    const payload = action.payload;
    const ls = localStorage.getItem('bookMark');
    const parse = ls && JSON.parse(ls);
    const remove = parse.filter((item: bookMarkList) => item.id !== payload.id);

    localStorage.setItem('bookMark', JSON.stringify(remove));

    yield put(Actions.removeBookMarkAction.success(remove));
  } catch (error) {
    yield put(Actions.removeBookMarkAction.failure(error));
  }
}

function* addRecentlySearchSaga(
  action: ActionType<typeof Actions.addRecentlySearchAction.request>
) {
  try {
    const payload = action.payload;
    const ls = localStorage.getItem('recentlySearch');
    const parse = ls && JSON.parse(ls);
    const limited = 10;

    if (parse) {
      if (
        parse.find(
          (item: addRecentlySearch) => item.full_name === payload.full_name
        )
      )
        return;

      if (parse.length >= limited) {
        const shift = [...parse];
        shift.shift();
        localStorage.setItem(
          'recentlySearch',
          JSON.stringify([...shift, payload])
        );
      } else {
        localStorage.setItem(
          'recentlySearch',
          JSON.stringify([...parse, payload])
        );
      }
    } else {
      localStorage.setItem('recentlySearch', JSON.stringify([payload]));
    }

    const sync = localStorage.getItem('recentlySearch');
    yield put(
      Actions.addRecentlySearchAction.success(sync && JSON.parse(sync))
    );
  } catch (error) {
    yield put(Actions.addRecentlySearchAction.failure(error));
  }
}

function* removeRecentlySearchSaga(
  action: ActionType<typeof Actions.removeRecentlySearchAction.request>
) {
  try {
    const payload = action.payload;
    const ls = localStorage.getItem('recentlySearch');
    const parse = ls && JSON.parse(ls);
    const remove = parse.filter(
      (item: addRecentlySearch) => item.id !== payload.id
    );

    localStorage.setItem('recentlySearch', JSON.stringify(remove));

    yield put(Actions.removeRecentlySearchAction.success(remove));
  } catch (error) {
    yield put(Actions.removeRecentlySearchAction.failure(error));
  }
}

export function* githubSaga() {
  yield takeLatest(Actions.getRepositoryAction.request, getRepositorySaga);
  yield takeLatest(Actions.getIssueAction.request, getIssueSaga);
  yield takeLatest(Actions.addBookMarkAction.request, addBookMarkSaga);
  yield takeLatest(Actions.removeBookMarkAction.request, removeBookMarkSaga);
  yield takeLatest(
    Actions.addRecentlySearchAction.request,
    addRecentlySearchSaga
  );
  yield takeLatest(
    Actions.removeRecentlySearchAction.request,
    removeRecentlySearchSaga
  );
}
