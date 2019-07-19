var req = require("dotenv").config();

var axios = require("axios");


axios
  .get("https://www.spotify.com/us/")
  .then(function(response) {
    // If the axios was successful then log the body from the site
    console.log(response.data);
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

