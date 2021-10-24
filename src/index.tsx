import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import ko_KR from 'antd/es/locale/ko_KR';
import { ConfigProvider } from 'antd';

import App from './App';
import { saga } from './module';
import store, { history, sagaMiddleware } from './module/store';
import './index.less';
import { ThemeProvider } from 'styled-components';

sagaMiddleware.run(saga);

const theme = {
  mainColor: '#1DA57A'
};

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider locale={ko_KR}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ConfigProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
