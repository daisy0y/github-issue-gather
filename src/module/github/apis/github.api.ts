import { Octokit } from '@octokit/core';

import {
  listIssueParameters,
  listUserReposParameters
} from '../models/github.models';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_AUTH
});

export const githubAPI = {
  getRepositoryList: (data: listUserReposParameters) =>
    octokit.request('GET /search/repositories', data).then(res => res),
  getIssueList: (data: listIssueParameters) =>
    octokit
      .request('GET /repos/{owner}/{repo}/issues', data)
      .then(res => res.data)
};
