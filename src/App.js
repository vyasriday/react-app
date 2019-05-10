/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import logo from './logo.svg';
import MovieList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import rootReducer from './reducers/rootReducer';
import Toggle from './components/Toggle';

const middleware = [logger, thunk];
//  instead of {} as initial state we pass load function which checks for initial state in localStorage
const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

const App = () => (
  /*
    * Provider must wrap around our entire App.
    * Provider takes two props, one store and other as children our entire App
  */
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="" />
          </Link>
        </header>
        {/* <Toggle /> */}
        <main>
          <Switch>
            <Route path="/:id" component={MovieDetails} />
            <Route exact path="/" component={MovieList} />
          </Switch>
        </main>
      </div>
    </Router>
  </Provider>
);

export default App;
