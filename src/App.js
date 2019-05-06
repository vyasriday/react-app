import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import MovieList from './MoviesList';

const Test = ({ match }) => (<h3>{match.params.id}</h3>);

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="" />
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/:id" component={Test} />
          <Route exact path="/" component={MovieList} />
        </Switch>
      </main>
    </div>
  </Router>

);


export default App;
