require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movieInfo/:inputValue', (req, res) => {
  console.log(process.env.OMDB)
    axios.get(`http://omdbapi.com/?s=${req.params.inputValue}&apikey=${process.env.OMDB_API_KEY}`,
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    })
  });

app.get('/movie/:id', (req, res) => {
    console.log(req.params.id);
    axios.get(`http://www.omdbapi.com/?i=${req.params.id}&apikey=${process.env.OMDB_API_KEY}`
    )
    .then((response) => {
      console.log(response.data)
        res.send(response.data);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);

});

})
module.exports = app; 
