const defaultState = {
    input: '',
    movies: [],
    movieDetails: [],
  };

  export default function SearchReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
  
      case 'UPDATE_MOVIE_INPUT': {
        //  will return an object
        return {
          // will all previous state
          ...state,
          // but overwriting input
          input: payload.input
        };
      }
  
  
      case 'GET_MOVIE_FULFILLED': {
        // movies key is for default state above.
        return {
          ...state,
          movies: payload.data.Search,
        };
      }
      
      case "GET_MOVIE_DETAILS_FULFILLED": {
        return {
          ...state,
          // movie details key is used for default state above. Originally had array brackets around payload.data to get data to show and prevent null return in redux state.
          // removed array brackets from payload.data to get props to show on detail container.
          movieDetails: payload.data,
        };
      }
  
      default: {
        return state;
      }
  
  
    }
  }