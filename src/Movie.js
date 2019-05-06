import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w154';
  // eslint-disable-next-line react/prop-types
  const { movie } = props;
  return (
    <div>
      <Link to={`${movie.id}`}>
        <img src={`${BACKDROP_PATH}${movie.poster_path}`} alt={movie.title} />
      </Link>
    </div>
  );
};

Movie.propTyoes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default Movie;
