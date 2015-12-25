import React from 'react';
import Route from 'react-router';

import App from 'components/App';
import Home from 'components/Home';
import Watch from 'components/Watch';

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/watch/:id" component={Watch} />
  </Route>
);
