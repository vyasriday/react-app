import React, { PureComponent } from 'react';
import styled from 'styled-components';

class MovieDetails extends PureComponent {
  /* eslint-disable */
  movieID = '';
  backdrop_path = 'https://image.tmdb.org/t/p/w1280';
  state = {
    movie: {}
  }

  componentWillMount() {
    this.movieID = this.props.match.params.id;
  }
  
  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.movieID}?api_key=4e062be51f8b55a66259160103b5f870&language=en-US`)
      const movie = await res.json();
      this.setState({
        movie,
      })
    } catch(e) {
      throw e;
    }
  }
  render() {
    const { movie } = this.state;
    return (
      //  Here we pass backdrop as  a prop which can be accessed down in styles
      <MovieWrapper backdrop={`${this.backdrop_path}/${movie.backdrop_path}`} >
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </MovieWrapper>
    );
  }
}

export default MovieDetails;
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
    font-size: 1.2rem;
    line-height: 1;
    letter-spacing: 1px;
    padding: 0 1rem;
  }
  > h2 {
    font-sie: 3rem;
    letter-spacing: 4px;
    font-weight: bolder;
    background: rgba(0, 200, 150, 0.2);
    padding: 0 2rem; 
  }
`;