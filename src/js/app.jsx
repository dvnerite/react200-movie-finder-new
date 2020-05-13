import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MSC/MovieSearchContainer';
import MovieDetailContainer from './containers/MDC/MovieDetailContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'> 
          {/* <Route exact path='/' component={ MovieSearchContainer } /> */}
          <Route exact path='/' component={ props => <MovieSearchContainer {...props} /> } />
          <Route path='/movie/:id' component={ props => MovieDetailContainer  } />
        </div>
      </Router>
      )
  }
}

export default App;