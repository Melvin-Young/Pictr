'use strict';

const express = require('express');
const Flickr = require('flickr-sdk');

const router = express.Router();
const feeds = new Flickr.Feeds();

router.get('/', (req, res, next) => {
	let queryOptions = { format: 'json' };

	if(req.query.tags) {
		queryOptions.tags = req.query.tags;
		queryOptions.tagmode = 'all';
	}

	feeds.publicPhotos(queryOptions)
		.then((response) => {
			const photoUrls = response.body.items.map((photo) => {
				let src = photo.media && photo.media.m;
				let width = parseInt(photo.description.match(/width="(\d+)"/)[1], 10);
				let height = parseInt(photo.description.match(/height="(\d+)"/)[1], 10);
				return { src, width, height }
			});
			res.json({ photos: photoUrls });
		})
		.catch((error) => {
			error.status = 400;
			next(error.message)
		});
});

module.exports = router;