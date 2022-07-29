const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const uuid = require('uuid');
const app = express();


app.use(express.static('public'));
app.use(morgan('common'));
app.use(bodyParser.json());

let users = [
  {
    id: 1,
    name: "Melissa",
    favoriteMovies: []
  },
  {
    id: 2,
    name: "Parker",
    favoriteMovies: ["Hot Rod"]
  },
];

let movies = [
  {
    "Title":"Hot Rod",
    "Description":"The film stars Andy Samberg as amateur stuntman Rod Kimble, whose stepfather, Frank (Ian McShane), continuously mocks and disrespects him. When Frank becomes ill, Rod raises money for his heart operation by executing his largest stunt yet.",
    "Genre": {
      "Name":"Action/Comedy",
      "Description":"A film or television programme which blends comedy with a lively plot and fast-paced action."
    },
    "Director": {
      "Name":"Akiva Schaffer",
      "Bio":"Akiva Schaffer was born on December 1, 1977 in Berkeley, California, USA. He is a writer and director, known for Popstar: Never Stop Never Stopping (2016), Saturday Night Live (1975) and The Lego Movie (2014). He has been married to Liz Cackowski since 2010. They have two children."
    },
    "ImageURL":"https://www.pastposters.com/cw3/assets/product_full/R/hot-rod-cinema-quad-movie-poster-(3).jpg",
    "Year":"2007"
  },
  {
    "Title":"The Big Year",
    "Description":"Two bird enthusiasts try to defeat the cocky, cutthroat world record holder in a year-long bird-spotting competition",
    "Genre": {
      "Name":"Comedy",
      "Description":"Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment."
    },
    "Director": {
      "Name":"David Frankel",
      "Bio":"David Frankel was born on April 2, 1959 in New York City, New York, USA. He is a production manager and producer, known for The Devil Wears Prada (2006), One Chance (2013) and Band of Brothers (2001)."
    },
    "ImageURL":"https://m.media-amazon.com/images/M/MV5BMTc0MzcwMDcyOV5BMl5BanBnXkFtZTcwNTUwMjk1Ng@@._V1_.jpg",
    "Year":"2011"
  },
  {
    "Title":"Forgetting Sarah Marshall",
    "Description":"Peter (Jason Segel) is a struggling musician who finds his world turned upside down when his TV celebrity girlfriend, Sarah Marshall (Kristen Bell), dumps him for a tragically hip rock star. It's the hysterically funny look at how far one man will go to forget a girl – and all the fun he finds along the way!",
    "Genre": {
      "Name":"Comedy",
      "Description":"Comedies are light-hearted dramas, crafted to amuse, entertain, and provoke enjoyment."
    },
    "Director": {
      "Name":"Nicholas Stoller",
      "Bio":"Nicholas Stoller is an English-American screenwriter and director. He is known best for directing the 2008 comedy Forgetting Sarah Marshall, and writing/directing its 2010 spin-off/sequel, Get Him to the Greek. He also wrote The Muppets and directed the Seth Rogen comedy, Neighbors. He is a frequent creative partner of Jason Segel."
    },
    "ImageURL":"https://m.media-amazon.com/images/M/MV5BMTYzODgzMjAyM15BMl5BanBnXkFtZTcwMTI3NzI2MQ@@._V1_FMjpg_UX1000_.jpg",
    "Year":"2008"
  },
  {
    "Title":"Harry Potter and the Prisoner of Azkaban",
    "Description":"The movie follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies.",
    "Genre": {
      "Name":"Fantasy/Adventure",
      "Description":"A type of adventure film where the action takes place in imaginary lands with strange beasts, wizards and witches."
    },
    "Director": {
      "Name":"Alfonso Cuaron",
      "Bio":"Alfonso Cuaron is known for directing films in a variety of genres including the family drama A Little Princess (1995), the romantic drama Great Expectations (1998), the coming of age road film Y tu mamá también (2001), the fantasy film Harry Potter and the Prisoner of Azkaban (2004), and the science fiction films Children of Men (2006) and Gravity (2013), and the semi-autobiographical drama Roma (2018), as well as the 2009 short I Am Autism."
    },
    "ImageURL":"https://static.wikia.nocookie.net/harrypotter/images/a/a8/Harry_Potter_and_the_Prisoner_of_Azkaban_2.jpg/revision/latest?cb=20220721181336",
    "Year":"2004"
  },
  {
    "Title":"The Hobbit: An Unexpected Journey",
    "Description":"An Unexpected Journey tells the tale of Bilbo Baggins (Martin Freeman), who is convinced by the wizard Gandalf (Ian McKellen) to accompany thirteen Dwarves, led by Thorin Oakenshield (Richard Armitage), on a quest to reclaim the Lonely Mountain from the dragon Smaug.",
    "Genre": {
      "Name":"Fantasy/Adventure",
      "Description":"A type of adventure film where the action takes place in imaginary lands with strange beasts, wizards and witches."
    },
    "Director": {
      "Name":"Peter Jackson",
      "Bio":"Sir Peter Robert Jackson (born 31 October 1961) is a New Zealand film director, screenwriter and producer. He is best known as the director, writer and producer of the Lord of the Rings trilogy (2001–2003) and the Hobbit trilogy (2012–2014), both of which are adapted from the novels of the same name by J. R. R. Tolkien."
    },
    "ImageURL":"https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg",
    "Year":"2012"
  },
  {
    "Title":"Moulin Rouge!",
    "Description":"Moulin Rouge!is a 2001 jukebox musical romantic drama film directed, co-produced, and co-written by Baz Luhrmann. It follows a young English poet, Christian, who falls in love with the star of the Moulin Rouge, cabaret actress and courtesan Satine.",
    "Genre": {
      "Name":"Musical/Romance",
      "Description":"A type of romance that features music, singing, and dance."
    },
    "Director": {
      "Name":"Baz Luhrmann",
      "Bio":"Mark Anthony Luhrmann (born 17 September 1962) is an Australian filmmaker and actor with projects spanning film, television, opera, theatre, music and recording industries."
    },
    "ImageURL":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJGi4OnEZ8UbqYpN2E9sPq56PpGDLaQTCqIn9g57RhfrfXKq6k",
    "Year":"2001"
  },
  {
    "Title":"The Secret Life of Walter Mitty",
    "Description":"When both he and a colleague are about to lose their job, Walter takes action by embarking on an adventure more extraordinary than anything he ever imagined.",
    "Genre": {
      "Name":"Comedy/Adventure",
      "Description":"A hybrid of the adventure and comedy genres, blending action, suspense, exotic locales and the heroic journey of the adventure genre with comedic elements."
    },
    "Director": {
      "Name":"Ben Stiller",
      "Bio":"Benjamin Edward Meara Stiller (born November 30, 1965) is an American actor, comedian, producer, director, and screenwriter. He is the son of the comedians and actors Jerry Stiller and Anne Meara."
    },
    "ImageURL":"https://resizing.flixster.com/aB75ycjbdH23m4T-4wggq9csgJY=/206x305/v2/https://flxt.tmsimg.com/assets/p10016880_p_v8_aa.jpg",
    "Year":"2013"
  },
  {
    "Title":"Get Smart",
    "Description":"Maxwell Smart, a highly intellectual but bumbling spy working for the CONTROL agency, is tasked with preventing a terrorist attack from rival spy agency KAOS.",
    "Genre": {
      "Name":"Action/Comedy",
      "Description":"A film or television programme which blends comedy with a lively plot and fast-paced action."
    },
    "Director": {
      "Name":"Peter Segal",
      "Bio":"Peter Segal (born 1962) is an American film director, producer, screenwriter, and actor. Segal has directed the comedic films Tommy Boy (1995), My Fellow Americans (1996), The Nutty Professor II: The Klumps (2000), Anger Management (2003), 50 First Dates (2004), The Longest Yard (2005), Get Smart (2008), Grudge Match (2013), and My Spy (2020)."
    },
    "ImageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBEb-6CNmYKx_K2lNpPErsdq__fJsEZ-XusCDbscvfL-WPadM",
    "Year":"2008"
  },
  {
    "Title":"About Time",
    "Description":"At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
    "Genre": {
      "Name":"Fantasy/Romance",
      "Description":"As a genre, fantasy romance focuses on the love story, while other fantasy fiction may have a love story as a subplot."
    },
    "Director": {
      "Name":"Richard Curtis",
      "Bio":"Richard Curtis was born on November 8, 1956 in Wellington, New Zealand. He is a writer and producer, known for Love Actually (2003), Four Weddings and a Funeral (1994) and About Time (2013)."
    },
    "ImageURL":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9iKMpedwgBIdUBaW-9GppzoQsFmQhLlsnW-34AM1tCl8PPqqa",
    "Year":"2013"
  },
  {
    "Title":"Zoolander",
    "Description":"At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.",
    "Genre": {
      "Name":"Action/Comedy",
      "Description":"A film or television programme which blends comedy with a lively plot and fast-paced action."
    },
    "Director": {
      "Name":"Ben Stiller",
      "Bio":"Benjamin Edward Meara Stiller (born November 30, 1965) is an American actor, comedian, producer, director, and screenwriter. He is the son of the comedians and actors Jerry Stiller and Anne Meara."
    },
    "ImageURL":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ28jpUvklqVl9xk9sHzTn2WnYQN026nMZLYpeZsHGKxDCrQDRi",
    "Year":"2001"
  },
]

// CREATE
app.post('/users', (req, res) => {
  const newUser = req.body;

  if (newUser.name) {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser)
  } else {
    res.status(400).send('users need names')
  }
})

//CREATE

app.post('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find( user => user.id == id ); //search user by id

  if (user) {
    user.favoriteMovies.push(movieTitle);
    res.status(200).send(`${movieTitle} has been added to ${user.name}'s array`);
  } else {
    res.status(400).send('No such user found!');
  }
});

//UPDATE

app.put('/users/:id', (req, res) => {
  const {id} = req.params;
  const updatedUser = req.body;

  let user = users.find(user => user.id == id);

  if (user) {
    user.name = updatedUser.name;
    res.status(200).json(user);
  } else {
    res.status(400).send('User not found')
  }
})

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});


//Read

app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

//Read

app.get('/movies/:title', (req, res) => {
  const {title} = req.params;
  const movie = movies.find( movie => movie.Title === title );

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400).send('Movie not found');
  }
});

//Read

app.get('/movies/genre/:genreName', (req, res) => {
  const {genreName} = req.params;
  const genre = movies.find( movie => movie.Genre.Name === genreName ).Genre;

  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(400).send('Genre not found');
  }
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something went wrong!');
});

//Read

app.get('/movies/director/:directorName', (req, res) => {
  const {directorName} = req.params;
  const director = movies.find( movie => movie.Director.Name === directorName ).Director;

  if (director) {
    res.status(200).json(director);
  } else {
    res.status(400).send('Director not found');
  }
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something went wrong!');
});

//DELETE

app.delete('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;

  let user = users.find( user => user.id == id );

  if (user) {
    user.favoriteMovies = user.favoriteMovies.filter(title => title !== movieTitle);
    res.status(200).send(`${movieTitle} has been removed from ${user.name}'s array`);
  } else {
    res.status(400).send('No such user found!');
  }
});

//DELETE

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  let user = users.find( user => user.id == id );

  if (user) {
    users = users.filter(user => user.id != id);
    res.status(200).send(`user ${id} has been deleted`);
  } else {
    res.status(400).send('No such user found!');
  }
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
