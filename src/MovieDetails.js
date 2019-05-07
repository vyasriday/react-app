import React from 'react';

class MovieDetails extends React.Component {
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
      <div>
        <img src={`${this.backdrop_path}/${movie.backdrop_path}`}/>
        <h4>{movie.title}</h4>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetails;
