import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import registerServiceWorker from './registerServiceWorker';

import Content from './views/Content/Content';

ReactDOM.render(
  <Content/>,
  document.getElementById('root'),
);

registerServiceWorker();
