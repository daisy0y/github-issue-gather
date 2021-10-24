export const ROUTE_ROOT = '/github-issue-gather';
export const ROUTE_SEARCH = '/github-issue-gather/search/:query';
export const ROUTE_SEARCH_WITH_QUERY = (query: string) =>
  `/github-issue-gather/search/q=${query}`;
