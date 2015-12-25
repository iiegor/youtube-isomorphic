import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation';
import fetch from 'isomorphic-fetch';
import { Provider } from 'react-redux';
import routes from 'routes.jsx';
import configureStore from 'store/configureStore';

const clientConfig = {
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || '3000'
};

/*
 * Our html template file
 * @param {String} renderedContent
 * @param initial state of the store, so that the client can be hydrated with the same state as the server
 * @param head - optional arguments to be placed into the head
 */
function renderFullPage(renderedContent, initialState, head={
  title: 'YouTube',
  description: 'An isomorphic boilerplate',
  meta: '<meta name="viewport" content="width=device-width, initial-scale=1" />',
  link: '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed" type="text/css"/><link type="text/css" rel="stylesheet" href="/assets/styles/main.css"/>'
}) {
  return `
  <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />

      <title>${head.title}</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="${head.description}" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      ${head.link}
    </head>
    <body>
      <div id="app">${renderedContent}</div>

      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
      </script>
      <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
    </body>
    </html>

  `;  
}

/* 
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(req, res) {

  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

      const store = configureStore({
        // reducer: {initialState}
      });
      const initialState = store.getState();

      const renderedContent = renderToStaticMarkup(
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      );

      const renderedPage = renderFullPage(renderedContent, initialState);
      res.status(200).send(renderedPage);

    } else {
      res.status(404).send('Not Found');
    }
    
  });
};
