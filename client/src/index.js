import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import 'bulma/css/bulma.min.css';

import App from './App';
import Search from './components/search/search';

// Apollo client setup
const client = new ApolloClient({
  uri: process.env.NODE_ENV === "production" ? "/api" : "http://localhost:4000/api"
});

const rootApp = (
  <Router>
    <Route
      exact
      path="/"
      component={App} />

    <Route
      path="/search"
      component={(reactRouterProps) => (
        <ApolloProvider client={client}>
          <Search {...reactRouterProps} />
        </ApolloProvider>
      )} />
  </Router>
);

ReactDOM.render(rootApp, document.getElementById('root'));

