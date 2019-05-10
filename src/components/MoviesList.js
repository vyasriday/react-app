/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Movie from './Movie';
import { getMovies } from '../actions/movie';


class MovieList extends PureComponent {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { isLoaded, getMovies } = this.props;
    if (!isLoaded) {
      getMovies();
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { movies, isLoaded } = this.props;
    if (!isLoaded) return (<h3>Loading !!!</h3>);
    return (
      /*
        * now here we replace the div with the MovieGrid.
        * Basically this replaces it with a div with the styles we have applied.
      */
      <MovieGrid>
        { movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

// since we are applying this style on a div therefore styled.div
const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
  @media(max-width:900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media(max-width:700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width:550px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width:380px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
