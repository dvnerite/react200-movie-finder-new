require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

// app.get('/movies/:title', (req, res) => {
//   movieTitle = req.params.title;
//   axios.get(`http://www.omdbapi.com/?apikey=8bac8062&s=${req.params.title}`)
//     .then(response => res.send(response.data))
//     .catch(err => console.log(err))
// });

app.get('/movies', (req, res) => {
  let movieTitle = req.query.t;
  console.log('in the route: ', movieTitle)
  axios.get(`http://www.omdbapi.com/?apikey=8bac8062&s=${movieTitle}`)
    .then((response) => {
      console.log(`response: ` , response.data);
      res.status(200).send(response.data);
    })
    .catch(err => console.log(err))
});

app.get('/movie/:id', (req, res) => {
  movieId = req.params.id;
  axios.get(`http://www.omdbapi.com/?apikey=8bac8062&i=${req.params.id}`)
    .then(response => res.send(response.data))
    .catch(err => console.log(err))
});

module.exports = app;