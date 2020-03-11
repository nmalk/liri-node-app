# liri-node-app

## What it is 
* LIRI is a command line node app that takes in parameters and gives you back data using API requests.
* Users will be able to search Spotify for songs and OMDB for movies.


## Instaling 
To run liri-node-app, first clone the repository to your local machine.

HTTPS: 
`$ git clone https://github.com/nmalk/liri-node-app.git`

You would need to add an .env file at the root of the app with your Spotify API keys.
For help getting your API keys visit https://developer.spotify.com/documentation/web-api/ 

Once you have the keys, add the following lines of code to your .env file:

`SPOTIFY_ID=your-spotify-id`
`SPOTIFY_SECRET=your-spotify-secret`

## How it works

You will be able to run the following commands:

* node liri.js spotify-this-song '<song name here>'

* node liri.js movie-this '<movie name here>'







