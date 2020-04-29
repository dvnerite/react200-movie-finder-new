import React from 'react';
        
class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Movie Detail Container</h1>

        <p>Viewing movie {this.props.match.params.id}</p>
      </div>
    )
  }
}

export default MovieDetailContainer;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { getMovieDetails } from '../MSC/searchActions';

// // imported getMovieDetails actions into Movie Detail Container

// export default class MovieDetailContainer extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   // using componentDidMount here to make moviedetails axios call upon arrival instead of calling from "more information" button in search container.
//   // componentDidMount() {
//   //   // const { dispatch } = this.props;
//   //   // dispatch(getMovieDetails(this.props.match.params.id));
//   // }

//   render() {
//     // const { movieDetails } = this.props;
//     // movieDetails props being called/used from searchContainer here
//     // console.log(movieDetails)

//     return (
//       <div>
//         <h1 id='container-name'>Movie Detail Container</h1>
//         <div className="row">
//           <NavLink to='/'>
//             <button className="btn btn-info" type='button'>Go Back</button>
//           </NavLink>
//           <br></br>
//           <br></br>
//           <hr />
//         </div>

//         <div className="row">
//           <div className='col-md-6'>
//             <div className='card'>
//               <div className='card-body'>
//                 {/* <img src={movieDetails.Poster} width='100%' /> */}
//               </div>
//             </div>
//           </div>
//           <div className='col-md-6'>
//             <div className='card'>
//               <div className='card-header'>
//                 {/* <h4>{`${movieDetails.Title}`}</h4> */}
//                 <hr />
//                 <span className="badge badge-success">GENRE</span>
//                   {/* <p>{`${movieDetails.Genre}`}</p> */}
//                       <span className="badge badge-danger">RATED</span>
//                   {/* <p>{`${movieDetails.Rated}`}</p> */}
//                   <span className="badge badge-info">RUNTIME</span>
//                   {/* <p>{`${movieDetails.Runtime}`}</p> */}
//                   <span class="badge badge-warning">IMDB</span>
//                   {/* <p>{`${movieDetails.imdbRating}`}</p> */}
//                 <hr />

//                 <div className='card-body'>
//                   {/* <p style={{fontSize:20}}>{`${movieDetails.Plot}`}</p> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }