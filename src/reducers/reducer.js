import { GET_MOVIES, GET_MOVIE, EMPTY_MOVIE } from '../actions/movie';
import { TOGGLE_MESSAGE } from '../actions/toggle';
// this is the initial state for this reducer only.
const moviesState = {
  movies: [],
  moviesLoaded: false,
  movie: {},
  movieLoaded: false,
};

const toggleState = {
  messageVisibility: false,
};

export default function (state = moviesState, action) {
  const { type } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.data,
        moviesLoaded: true,
      };
    case GET_MOVIE:
      return {
        movie: action.data,
        movieLoaded: true,
      };
    case EMPTY_MOVIE:
      return {
        movie: {},
        movieLoaded: false,
      };
    default:
      return state;
  }
}


export function toggle(state = toggleState, action) {
  const { type } = action;
  switch (type) {
    case TOGGLE_MESSAGE:
      return {
        messageVisibility: !state.messageVisibility,
      };
    default:
      return state;
  }
}
