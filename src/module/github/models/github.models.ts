import { Endpoints } from '@octokit/types';

export type listUserReposResponse =
  Endpoints['GET /search/repositories']['response'];

export type listUserReposParameters =
  Endpoints['GET /search/repositories']['parameters'];

export type listIssueReposResponse =
  Endpoints['GET /repos/{owner}/{repo}/issues']['response'];

export type listIssueParameters =
  Endpoints['GET /repos/{owner}/{repo}/issues']['parameters'];

export interface handleAddBookMarkProps {
  id: number;
  owner: string;
  repo: string;
  open_issues_count: number;
  full_name: string;
}

export interface bookMarkList {
  id: number;
  owner: string;
  repo: string;
  open_issues_count: number;
  full_name: string;
}

export interface addRecentlySearch {
  id: string;
  full_name: string;
}
