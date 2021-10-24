import { RequestError } from '@octokit/types';
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions';
import {
  addRecentlySearch,
  bookMarkList,
  // listIssueParameters,
  listIssueReposResponse,
  listUserReposParameters,
  listUserReposResponse
} from '../models/github.models';

const GET_REPOSITORY_LIST_REQUEST = 'github/GET_REPOSITORY_LIST_REQUEST';
const GET_REPOSITORY_LIST_SUCCESS = 'github/GET_REPOSITORY_LIST_SUCCESS';
const GET_REPOSITORY_LIST_FAILURE = 'github/GET_REPOSITORY_LIST_FAILURE';

const GET_ISSUE_LIST_REQUEST = 'github/GET_ISSUE_LIST_REQUEST';
const GET_ISSUE_LIST_SUCCESS = 'github/GET_ISSUE_LIST_SUCCESS';
const GET_ISSUE_LIST_FAILURE = 'github/GET_ISSUE_LIST_FAILURE';

const ADD_BOOKMARK_REQUEST = 'github/ADD_BOOKMARK_REQUEST';
const ADD_BOOKMARK_SUCCESS = 'github/ADD_BOOKMARK_SUCCESS';
const ADD_BOOKMARK_FAILURE = 'github/ADD_BOOKMARK_FAILURE';

const REMOVE_BOOKMARK_REQUEST = 'github/REMOVE_BOOKMARK_REQUEST';
const REMOVE_BOOKMARK_SUCCESS = 'github/REMOVE_BOOKMARK_SUCCESS';
const REMOVE_BOOKMARK_FAILURE = 'github/REMOVE_BOOKMARK_FAILURE';

const ADD_RECENTLY_SEARCH_REQUEST = 'github/ADD_RECENTLY_SEARCH_REQUEST';
const ADD_RECENTLY_SEARCH_SUCCESS = 'github/ADD_RECENTLY_SEARCH_SUCCESS';
const ADD_RECENTLY_SEARCH_FAILURE = 'github/ADD_RECENTLY_SEARCH_FAILURE';

const REMOVE_RECENTLY_SEARCH_REQUEST = 'github/REMOVE_RECENTLY_SEARCH_REQUEST';
const REMOVE_RECENTLY_SEARCH_SUCCESS = 'github/REMOVE_RECENTLY_SEARCH_SUCCESS';
const REMOVE_RECENTLY_SEARCH_FAILURE = 'github/REMOVE_RECENTLY_SEARCH_FAILURE';

const RESET_BOOKMARK = 'github/RESET_BOOKMARK';
const GET_MY_BOOKMARK = 'github/GET_BOOKMARK';
const SET_LOADING = 'github/SET_LOADING';
const RESET_RECENTLY_SEARCH = 'github/RESET_RECENTLY_SEARCH';
const GET_RECENTLY_SEARCH_LIST = 'github/GET_RECENTLY_SEARCH_LIST';
const RESET_ISSUE_LIST = 'github/RESET_ISSUE_LIST';

export const getRepositoryAction = createAsyncAction(
  GET_REPOSITORY_LIST_REQUEST,
  GET_REPOSITORY_LIST_SUCCESS,
  GET_REPOSITORY_LIST_FAILURE
)<listUserReposParameters, listUserReposResponse, RequestError>();

export const getIssueAction = createAsyncAction(
  GET_ISSUE_LIST_REQUEST,
  GET_ISSUE_LIST_SUCCESS,
  GET_ISSUE_LIST_FAILURE
)<unknown, listIssueReposResponse['data'][], RequestError>();

export const removeBookMarkAction = createAsyncAction(
  REMOVE_BOOKMARK_REQUEST,
  REMOVE_BOOKMARK_SUCCESS,
  REMOVE_BOOKMARK_FAILURE
)<{ id: number }, bookMarkList[], unknown>();

export const addBookMarkAction = createAsyncAction(
  ADD_BOOKMARK_REQUEST,
  ADD_BOOKMARK_SUCCESS,
  ADD_BOOKMARK_FAILURE
)<bookMarkList, bookMarkList[], unknown>();

export const addRecentlySearchAction = createAsyncAction(
  ADD_RECENTLY_SEARCH_REQUEST,
  ADD_RECENTLY_SEARCH_SUCCESS,
  ADD_RECENTLY_SEARCH_FAILURE
)<addRecentlySearch, addRecentlySearch[], unknown>();

export const removeRecentlySearchAction = createAsyncAction(
  REMOVE_RECENTLY_SEARCH_REQUEST,
  REMOVE_RECENTLY_SEARCH_SUCCESS,
  REMOVE_RECENTLY_SEARCH_FAILURE
)<{ id: string }, addRecentlySearch[], unknown>();

export const resetBookMarkAction = createAction(RESET_BOOKMARK)();
export const getMyBookMarkAction = createAction(GET_MY_BOOKMARK)();
export const setLoadingAction = createAction(SET_LOADING)();
export const resetRecentlySearchAction = createAction(RESET_RECENTLY_SEARCH)();
export const resetIssueListAction = createAction(RESET_ISSUE_LIST)();
export const getRecentlySearchListAction = createAction(
  GET_RECENTLY_SEARCH_LIST
)();

const actions = {
  getRepositoryAction,
  getIssueAction,
  addBookMarkAction,
  removeBookMarkAction,
  resetBookMarkAction,
  getMyBookMarkAction,
  setLoadingAction,
  resetRecentlySearchAction,
  getRecentlySearchListAction,
  addRecentlySearchAction,
  removeRecentlySearchAction,
  resetIssueListAction
};

export type GihubAction = ActionType<typeof actions>;
