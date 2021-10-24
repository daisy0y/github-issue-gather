import produce from 'immer';

import { createReducer } from 'typesafe-actions';
import {
  addRecentlySearch,
  bookMarkList,
  listIssueReposResponse,
  listUserReposResponse
} from '..';

import {
  addBookMarkAction,
  addRecentlySearchAction,
  getIssueAction,
  getMyBookMarkAction,
  getRecentlySearchListAction,
  getRepositoryAction,
  GihubAction,
  removeBookMarkAction,
  removeRecentlySearchAction,
  resetBookMarkAction,
  resetIssueListAction,
  resetRecentlySearchAction,
  setLoadingAction
} from '../actions/github.action';

export interface GitbubState {
  repositoryList?: listUserReposResponse;
  issueList?: listIssueReposResponse['data'][];
  bookMarkList?: bookMarkList[];
  isLoading: boolean;
  recentlySearch?: addRecentlySearch[];
}

const initialState = {
  repositoryList: undefined,
  bookMarkList: undefined,
  issueList: undefined,
  isLoading: false,
  recentlySearch: undefined
};

export const githubReducer = createReducer<GitbubState, GihubAction>(
  initialState
)
  .handleAction(getRepositoryAction.success, (state, action) =>
    produce(state, draft => {
      const checkFirst = action.payload.url.split('&page=')[1];

      if (!state.repositoryList || checkFirst === '1') {
        draft.repositoryList = { ...action.payload };
      } else {
        if (draft.repositoryList) {
          draft.repositoryList['data']['items'] = [
            ...state.repositoryList.data.items,
            ...action.payload.data.items
          ];
          draft.repositoryList['url'] = action.payload.url;
        }
      }
      draft.isLoading = false;
    })
  )
  .handleAction(getRepositoryAction.failure, state =>
    produce(state, draft => {
      alert('에러가 발생했습니다.\n새로 고침 후 다시 시도해주세요.');
      draft.isLoading = false;
    })
  )
  .handleAction(getIssueAction.success, (state, action) =>
    produce(state, draft => {
      draft.issueList = action.payload;
      draft.isLoading = false;
    })
  )
  .handleAction(getIssueAction.failure, state =>
    produce(state, draft => {
      alert('에러가 발생했습니다.\n새로 고침 후 다시 시도해주세요.');
      draft.isLoading = false;
    })
  )
  .handleAction(getMyBookMarkAction, state =>
    produce(state, draft => {
      const ls = localStorage.getItem('bookMark');
      if (ls) draft.bookMarkList = JSON.parse(ls);
    })
  )
  .handleAction(resetBookMarkAction, state =>
    produce(state, draft => {
      draft.bookMarkList = undefined;
      draft.issueList = undefined;
      localStorage.setItem('bookMark', '');
      alert('북마크가 모두 삭제 되었습니다.');
    })
  )
  .handleAction(resetIssueListAction, state =>
    produce(state, draft => {
      draft.issueList = undefined;
    })
  )
  .handleAction(setLoadingAction, state =>
    produce(state, draft => {
      draft.isLoading = true;
    })
  )
  .handleAction(addBookMarkAction.success, (state, action) =>
    produce(state, draft => {
      const payload = action.payload;

      draft.bookMarkList = payload;
      alert(
        `북마크에 추가 되었습니다.\n현재 ${payload.length}개의 저장소가 북마크 되어있습니다.`
      );
    })
  )
  .handleAction(removeBookMarkAction.success, (state, action) =>
    produce(state, draft => {
      const payload = action.payload;
      draft.issueList = undefined;
      draft.bookMarkList = payload;
      alert(
        `북마크가 제거 되었습니다.\n현재 ${payload.length}개의 저장소가 북마크 되어있습니다.`
      );
    })
  )
  .handleAction(addRecentlySearchAction.success, (state, action) =>
    produce(state, draft => {
      const payload = action.payload;
      draft.recentlySearch = payload;
    })
  )
  .handleAction(removeRecentlySearchAction.success, (state, action) =>
    produce(state, draft => {
      const payload = action.payload;
      draft.recentlySearch = payload;
    })
  )
  .handleAction(resetRecentlySearchAction, state =>
    produce(state, draft => {
      draft.recentlySearch = undefined;
      localStorage.setItem('recentlySearch', '');
      alert('모든 최근 검색어가 제거 되었습니다.');
    })
  )
  .handleAction(getRecentlySearchListAction, state =>
    produce(state, draft => {
      const ls = localStorage.getItem('recentlySearch');
      if (ls) draft.recentlySearch = JSON.parse(ls);
    })
  );
