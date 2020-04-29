import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

// here you connect the individual components

function mapStoreToProps(store) {
  return {
    // store is where all our state is held. search is from combined reducer, and title is from default state.
    input: store.search.input,
    movies: store.search.movies,
    movieDetails: store.search.movieDetails
  };
}

export default connect(mapStoreToProps)(MovieDetailContainer);