import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie, resetMovie } from '../actions/movie';

class MovieDetails extends PureComponent {
  /* eslint-disable */
  movieID = '';
  backdrop_path = 'https://image.tmdb.org/t/p/w1280';

  componentWillMount() {
    this.movieID = this.props.match.params.id;
  }
  
  componentDidMount() {
    const {getMovie, isLoaded} = this.props;
    if(!isLoaded) {
      getMovie(this.movieID);
    }
  }

  componentWillUnmount() {
    const { resetMovie } = this.props;
    resetMovie();
  }
  render() {
    const { movie } = this.props;
    return (
      //  Here we pass backdrop as  a prop which can be accessed down in styles
      <MovieWrapper backdrop={`${this.backdrop_path}/${movie.backdrop_path}`} >
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </MovieWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  isLoaded: state.movies.movieLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovie,
  resetMovie,
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);

// how do we pass our javascript data to our styled in styled components.
const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  height: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center;
  > p {
    text-align: justify;
    color: #fdfdfd;
    font-size: 1rem;
    line-height: 1.5;
    padding: 4px 1rem;
    background: #00000087;
  }
  > h2 {
    font-sie: 3rem;
    letter-spacing: 4px;
    font-weight: bolder;
    background: rgba(0,0,0 0.4);
    padding: 0 2rem; 
  }
`;