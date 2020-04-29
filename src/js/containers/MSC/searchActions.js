
import axios from 'axios';


export function updateMovieInput(input) {

  return {
    type: 'UPDATE_MOVIE_INPUT',
    payload: { input }
  };
}

export function getMovie(title) {

  return {
    type: 'GET_MOVIE',
    payload: axios.get(`/movies/${title}`),
  };
}

export function getMovieDetails(id) {
  return {
    type: 'GET_MOVIE_DETAILS',
    payload: axios.get(`/movies/${id}`)
  }};