import React from 'react';
import './App.css';
import logo from './logo.svg';
import Movie from './Movie';

class App extends React.Component { 
  /* eslint-disable */
  state = {
    movies: []
  }
 
  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4e062be51f8b55a66259160103b5f870&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
      const movies = await res.json();
      this.setState({
        movies: movies.results
      })
    } catch(e) {
      throw e;
    } 
  }
  render() {

    console.log(this.state.movies);
    return (
      <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt=""/>
       </header>
       <main>
         {this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
       </main>
      </div>
    );
  }
}

export default App;
