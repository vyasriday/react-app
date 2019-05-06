import React from 'react';
// import the package we installed, It's both P and T capitalized
import PropTypes from 'prop-types';
// props is available as argument to functional component
const Movie = (props) => {
  // eslint-disable-next-line react/prop-types
  const { movie } = props;
  return (
    <div>
      <h4>{movie.title}</h4>
      <p>{movie.overview}</p>
    </div>
  );
};
/*
* this is how props are defined on a functional component.
* Function.propTypes or Function.defaultPropTypes
*/
Movie.propTyoes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default Movie;
