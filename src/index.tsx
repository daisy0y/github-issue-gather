import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* body,
    html {
      max-width: 750px;  
      margin: 0 auto;
      &::-webkit-scrollbar {
        display: none !important;
      }
    } */
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
