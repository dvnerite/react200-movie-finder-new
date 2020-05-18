import React from 'react';
import { connect } from 'react-redux'
import { updateMovieInput, getMovie} from './searchActions';
import { NavLink } from 'react-router-dom';
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
    // console.log(value)
    dispatch(updateMovieInput(value));
  }
  handleClick(event){
    // console.log(this.props);
    event.preventDefault();
    const { dispatch } = this.props;
    const { value } = this.props.state.search;
    // console.log('In click:', this.props.state.search)
    dispatch(getMovie(value));
  }
  render() {
    const { value } = this.props;
    return (
      <div>
          <br></br>
          <br></br>
        <h1 align='center'>Movie Finder!</h1>
          <br></br>
            <div className = "container-fluid">
              <div className = 'row'>
                <div className = "input-group">
                  <input
                    type = "text"
                    className = "form-control glyphicon glyphicon-search"
                    placeholder = "Enter Movie Title Here:"
                    value = { value }
                    onChange = {this.handleSearchInput }/>
                    <div className = "input-group-prepend">
                    <button className = "btn btn-outline-secondary" type="button" id='search-button' onClick={ this.handleClick }>Go!</button>
                    </div>
                    <br></br>
                  {   
                      this.props.state.search.movies.map((movies => {
                        return (
                        <div className="container-fluid">
                          <div className='card'>
                            <div className='card-body'>
                              <img src={movies.Poster} />
                                <h4 key={movies.imdbID}>{ movies.Title }</h4>
                                <h6>{ movies.Year }</h6>
                                <hr/>
                                {/* <Link to={`/movie/:${item.imdbID}`}>
                                    <button className="btn btn-primary">More information</button>
                                    </Link> */}
                            </div>
                          </div>
                        </div>
                        )
                      }))};
              </div>
                        
              </div>
          </div>
        </div>
    )
  }
}
function mapStateToProps(state) {
  return { 
    state: state
  }
}
export default connect(mapStateToProps)(MovieSearchContainer)