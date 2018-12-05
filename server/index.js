'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const flickrRoutes = require('./routes/flickr');
const cors = require('cors');

require('dotenv').load();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Flickr', flickrRoutes);

app.get('/ping', (req, res) => res.send('Pong'));
app.get('/', (req, res) => res.send(`Api endpoint localhost:${PORT}/Flickr?[tags][tagmode]`));


// Waterfalls down to next fxn
app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Collects all errors
app.use(function (err, req, res) {
	res.status(err.status || 500);
	console.log(req.app.get('env'))
	res.json({
		error: req.app.get('env') === 'development' ? err.message : {}
	});
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;