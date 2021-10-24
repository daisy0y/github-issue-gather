import * as paths from './const';
import * as pages from 'pages';
export * as paths from './const';

interface Routes {
  public: RoutesOption[];
}

interface RoutesOption {
  path: string;
  component: React.FunctionComponent;
}

export const routes: Routes = {
  public: [
    {
      path: paths.ROUTE_ROOT,
      component: pages.LazyHome
    },
    {
      path: paths.ROUTE_SEARCH,
      component: pages.LazySearchPage
    }
  ]
};
