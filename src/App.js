/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';
import logo from './logo.svg';
import MovieList from './MoviesList';
import MovieDetails from './MovieDetails';
import rootReducer from './rootReducer';
import Toggle from './Toggle';


const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(),
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
        <Toggle />
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
