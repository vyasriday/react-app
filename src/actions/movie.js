/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
// this is an action creator
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const EMPTY_MOVIE = 'EMPTY_MOVIE';

export function getMovies() {
  return async function (dispatch) {
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=4e062be51f8b55a66259160103b5f870&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    const movies = await res.json();
    return dispatch({
      type: GET_MOVIES,
      data: movies.results,
    });
  };
}

export function getMovie(id) {
  return async function (dispatch) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e062be51f8b55a66259160103b5f870&language=en-US`);
    const movie = await res.json();
    return dispatch({
      type: GET_MOVIE,
      data: movie,
    });
  };
}

export function resetMovie() {
  return {
    type: EMPTY_MOVIE,
  };
}
