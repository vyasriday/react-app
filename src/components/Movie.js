import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Movie = (props) => {
  const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w154';
  // eslint-disable-next-line react/prop-types
  const { movie } = props;
  return (
    <Link to={`${movie.id}`}>
      <Poster src={`${BACKDROP_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
  );
};

Movie.propTyoes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default Movie;

// we can even export our styled components
const Poster = styled.img`
  box-shadow: 0 0 35px black;
  margin: 20px auto;
`;
