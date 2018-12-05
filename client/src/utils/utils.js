const flickr = (tags = 'happy') => {
	return fetch(`http://localhost:8081/Flickr?tags=${tags}`)
	.then(response => response.json())
	.then((data) => data.photos)
	.then(console.log('finished'))
	.catch(error => console.log(`Error ${error}`))
}

const delay = (function() {
	// Uses currying to add a timer to any function passed in
	let timer = 0;
	return (callback, ms) => {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
})();

const formatSpaceDelimitedString = (str) => {
	//If no commas assume user used spaces to seperate tags
	return str.trim().replace(/ /g, ',');
}

const formatCommaDelimitedString = (str) => {
	// Only trim spaces after a comma to so that tags like 'fire truck' are possible
	return str.trim().replace(/, +/g, ',');
}

module.exports = {
	flickr,
	delay,
	formatSpaceDelimitedString,
	formatCommaDelimitedString
}