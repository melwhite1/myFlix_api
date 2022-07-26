const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.static('public'));
app.use(morgan('common'));

let topMovies = [
  {
    title: 'Hot Rod',
    genre: 'Comedy',
    director: 'Akiva Schaffer',
    rating: 'PG-13'
  },
  {
    title: 'The Big Year',
    genre: 'Comedy',
    director: 'David Frankel',
    rating: 'PG'
  },
  {
    title: 'Forgetting Sarah Marshall',
    genre: 'Comedy',
    director: 'Nicholas Stoller',
    rating: 'R'
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    genre: 'Fantasy/Adventure',
    director: 'Alfonso Cuarón',
    rating: 'PG'
  },
  {
    title: 'The Hobbit: An Unexpected Journey',
    genre: 'Fantasy/Adventure',
    director: 'Peter Jackson',
    rating: 'PG-13'
  },
  {
    title: 'Moulin Rouge!',
    genre: 'Musical/Romance',
    director: 'Baz Luhrmann',
    rating: 'PG-13'
  },
  {
    title: 'The Secret Life of Walter Mitty',
    genre: 'Comedy/Adventure',
    director: 'Ben Stiller',
    rating: 'PG'
  },
  {
    title: 'Get Smart',
    genre: 'Comedy/Action',
    director: 'Ben Stiller',
    rating: 'PG'
  },
  {
    title: 'About Time',
    genre: 'Fantasy/Romance',
    director: 'Richard Curtis',
    rating: 'R'
  },
  {
    title: 'Zoolander',
    genre: 'Fantasy/Romance',
    director: 'Richard Curtis',
    rating: 'R'
  },
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something went wrong!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
