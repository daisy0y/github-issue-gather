import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { Spin } from 'antd';

import { routes } from 'routes';
import NotFoundResult from 'components/NotFoundResult';
import {
  getMyBookMarkAction,
  getRecentlySearchListAction
} from 'module/github';
import { StoreState } from './module/index';

const App = () => {
  const { bookMarkList, recentlySearch } = useSelector(
    (state: StoreState) => state.githubState
  );
  const bookMark = localStorage.getItem('bookMark');
  const recently = localStorage.getItem('recentlySearch');
  const dispatch = useDispatch();

  const getBookMarkList = () => {
    if (bookMark && !bookMarkList) dispatch(getMyBookMarkAction());
  };

  const getRecentlySearchList = () => {
    if (recently && !recentlySearch) dispatch(getRecentlySearchListAction());
  };

  useEffect(() => {
    getBookMarkList();
    getRecentlySearchList();
  }, []);

  return (
    <Suspense fallback={<Spin />}>
      <Switch>
        {routes.public.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            component={item.component}
            exact
          />
        ))}
        <Route path="*" component={NotFoundResult} />
      </Switch>
    </Suspense>
  );
};

export default App;
