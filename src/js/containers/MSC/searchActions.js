import axios from 'axios';

export const GET_MOVIE = 'GET_MOVIE';
export const UPDATE_MOVIE_INPUT = 'UPDATE_MOVIE_INPUT';

export function updateMovieInput(value) {
  return {
    type: 'UPDATE_MOVIE_INPUT',
    payload: value 
  };
}

export function getMovie(value) {
  return {
    type: 'GET_MOVIE_FULFILLED',
    payload: axios.get(`/movies/${value}`)
    // .then(res => {
    //   // console.log(res.data);
    //   ({data: res.data})
    //   // you'll want to do more than 
    //   // just console.log in here but 
    //   // this will at least show you 
    //   // what youre getting back
    //   // console.log(title)

    //   // console.log("res" , res);
    // })
    // .catch(err => console.log(err)),
    };
}

export function getMovieDetails(id) {
  return {
    type: 'GET_MOVIE_DETAILS',
    payload: axios.get(`/movie/${id}`)
    .then((res) => {
    //     // console.log(res)
    //   // you'll want to do more than 
    //   // just console.log in here but 
    //   // this will at least show you 
    //   // what youre getting back
    //   // console.log(title)

    //   // console.log("res" , res);
    })
    .catch(err => console.log(err)),
  }};