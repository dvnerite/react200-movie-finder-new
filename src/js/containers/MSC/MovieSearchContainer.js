import React from 'react';
import { connect } from 'react-redux'
import { updateMovieInput, getMovie} from './searchActions';
// import { NavLink } from 'react-router-dom';
export class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearchInput(event){
    // dispatch was provided by connect()
    const { dispatch } = this.props;
    const { value } = event.target;
    console.log(value)
    dispatch(updateMovieInput(value));
  }

  handleClick(event){
    // console.log(this.props);
    event.preventDefault();
    const { dispatch } = this.props;
    const { input } = this.props;
    dispatch(getMovie(input));
  }

    render() {
      const { input } = this.props;
      return (
        <div>
          <h1 align='center'>Movie Finder!</h1>
          <br></br>
          <div className = "container-fluid">
            <div className = 'row'>
              <div className = "input-group">
                <input 
                  type = "text"
                  className = "form-control glyphicon glyphicon-search"
                  placeholder = "Enter Movie Title Here:"
                  value = { input }
                  onChange = {this.handleSearchInput }/>
                <div className = "input-group-prepend">
                <button className = "btn btn-outline-secondary" type="button" id='search-button' onClick={ this.handleClick }>Go!</button>
                </div>
          <br></br>
              <div className='container-fluid'>
              <div className="row">
                <div className="card mb-4" >
                    <div className="col-md-8">
                      {/* <img src={`${value.Poster}`} width="75%"/> */}
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                          <h5 className="card-title"></h5>
                          <h6>Test</h6>
                          <hr />
                          {/* <NavLink to={`/movie/${movies.imdbID}`}> */}
                          <button className='btn btn-info flex-right' type='button'>More Information</button>
                          {/* onClick={() => this.handleDetails(movies.imdbID) */}
                          {/* </NavLink> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
function mapStateToProps(state) {
  return { movies: state.movies }
}
export default connect(mapStateToProps)(MovieSearchContainer);