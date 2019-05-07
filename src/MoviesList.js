import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MovieList extends PureComponent {
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

    return (
      /* 
        * now here we replace the div with the MovieGrid. 
        * Basically this replaces it with a div with the styles we have applied.
      */
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
      </MovieGrid>
    );
  }
}

export default MovieList;
// since we are applying this style on a div therefore styled.div
const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
`;