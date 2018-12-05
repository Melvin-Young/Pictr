## Project title
Pictr

## Motivation
This Project shows a visualization of the Flickr public feed found here (https://www.flickr.com/services/feeds/docs/photos_public)

## Code style
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Tech/framework used
<b>Built with</b>
- [Create-React-App](https://github.com/facebook/create-react-app)

## Features
* Shows photos from the public feed in a masonry-like grid 
* Search bar at the top right allows you to search for pictures with certain tags

## Installation
There are two sub folders: client and server
The Client folder contains the ReactApp while the server folder contains a small Express server
In this order:
*	cd into server and run npm install && npm start in the command line
*	cd into client and run npm install && npm start in the command line
*	The client will trigger your browser to open when it is ready to run

## Tests
- Unit tests currently support the utility functions controlling search behavior
- Snapshot testing is used to check the rendering of the react components

##Improvements

If developing this further I would like to create an overlay for each image that displays data on hover
I would use a different endpoint, these seem to be random user uploads and it doesn't have high res photos or the ability
	to do safe search


## How to use?
When the page is displayed type tags into the upper righthand search box
Tag list can be seperated by commas or spaces, however if spaces are used multi-word tags will not work
(e.g. Grand Canyon Donkey needs to be Grand Canyon, Donkey or Grand Canyon,Donkey)

## License
MIT © [Melvin-Young]()