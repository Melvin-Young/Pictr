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
				const { title, author, link, tags } = photo;
				const dateTaken = photo.date_taken;
				const src = photo.media && photo.media.m;
				const width = parseInt(photo.description.match(/width="(\d+)"/)[1], 10);
				const height = parseInt(photo.description.match(/height="(\d+)"/)[1], 10);
				return { src, width, height, title, author, dateTaken, link, tags }
			});
			res.json({ photos: photoUrls });
		})
		.catch((error) => {
			error.status = 400;
			next(error.message)
		});
});

module.exports = router;