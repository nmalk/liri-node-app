

var dotenv = require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);


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
  spotify
  .request('https://api.spotify.com' + value)
  .then(function(data) {
    console.log("Artist(s):" + data.name);
    console.log("The song's name:" + data.song);
    console.log("A preview link of the song from:" + data.url);
    console.log("Album:" + data.album);
    // console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}
console.log(action, value);







function movieThis() {
  var axios = require("axios");
  axios
  .get("https://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=9a68ce23")
  .then(function(response) {
    // If the axios was successful then log the body from the site
    console.log("Title of the movie:" + response.data.Title);
    console.log("Release Year:" + response.data.Year);
    console.log("The movie's rating:" + response.data.imdbRating);

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




