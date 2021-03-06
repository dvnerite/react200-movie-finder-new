import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

// here you connect the individual components

function mapStoreToProps(store) {
  return {
    // store is where all our state is held. search is from combined reducer, and title is from default state
    input: store.search.input,
    value: store.search.value,
    movies: store.search.movies,
    title: store.search.title
  };
}



export default connect(mapStoreToProps)(MovieSearchContainer);