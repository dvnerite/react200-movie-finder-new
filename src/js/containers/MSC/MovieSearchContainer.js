import React from 'react';
import { updateMovieInput, getMovie, ge} from './searchActions';
import { NavLink } from 'react-router-dom';

export class MovieSearchContainer extends React.Component {
  constructor(props) {
  super(props);

  }
    render() {
      return (
        <div>
          <div className="container-fluid">
            <div className='row'>
              <div className="input-group mb-3">
                <input type="text"
                className="form-control glyphicon glyphicon-search"
                placeholder="Enter Movie Title Here:"
                 // value= { input }
                onChange={this.handleSearchInput}/>
                <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" id='search-button' onClick={this.handleClick}>Go!</button>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              
      )
    }
  }
        
        export default MovieSearchContainer;