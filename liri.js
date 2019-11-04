
require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");

console.log(process.env.SPOTIFY_ID)
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});


var action = process.argv[2];
var value = process.argv[3];

switch(action) {
  case"concert-this":
  concertThis();
  break;

  case"spotify-this-song":
  spotifySong();
  break;

  case"movie-this":
  movieThis();
  break;

  case"do-what-it-says":
  whatSays();
  break;
}


function spotifySong() {
  console.log(value)
  spotify
  .request('https://api.spotify.com/v1/search?q=' + value +'&type=album,track')
  .then(function(data) {
    console.log(data)
    console.log("Artist(s):" + data.artists);
    console.log("The song's name:" + data.value);
    console.log("A preview link of the song from:" + data.uri);
    console.log("Album:" + data.name);
    // console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}
// console.log(action, value);

function movieThis() {
  axios
  .get("https://www.omdbapi.com/?t=" + value + "&y=&plot=short&tomatoes=true&apikey=9a68ce23")
  .then(function(response) {
    // If the axios was successful then log the body from the site
    console.log("Title of the movie:" + response.data.Title);
    console.log("Release Year:" + response.data.Year);
    console.log("The movie's rating:" + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating of the movie:" + response.data.tomatoRotten);
    console.log("Country:" + response.data.Country);
    console.log("Language:" + response.data.Language);
    console.log("Plot:" + response.data.Plot);
    console.log("Actors:" + response.data.Actors);

    // console.log(response.data);
  })
  .catch(function(error) {
    if (error.response) {

      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
  // console.log(action, value);
}


function whatSays() {
  fs.readFile("random.txt", "utf8", function(error,data) {
    if(error) {
      return console.log(error);
    }
    console.log(data);
  })

  fs.appendFile("random.txt", ", " + value, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Content Added!");
    }
  })
}

