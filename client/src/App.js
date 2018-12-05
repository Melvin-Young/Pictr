import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import ImageComponent from './components/ImageComponent';

import { flickr, formatSpaceDelimitedString, formatCommaDelimitedString } from './utils/utils';

import './App.css';

class App extends Component {
	state = {
		photos: [],
		tags: '',
		pending: false,
	};

	handleSearch = (event) => {
		const searchString = event.target.value;
		const hasCommas = searchString.includes(',');
		const tags = hasCommas ? formatCommaDelimitedString(searchString) : formatSpaceDelimitedString(searchString);
		this.setState({ tags });
	};

	reloadImages = () => {
		flickr(this.state.tags).then((photos) => this.setState({ photos }));
	};

	componentDidMount() {
		this.reloadImages();
	}

	render() {
		return (
			<div className="App">
				<Header
					handleSearch={this.handleSearch}
					handleTimer={this.reloadImages}
				/>
				<section className="container">
					<Scroll>
						<ErrorBoundary>
							<Gallery photos={this.state.photos} ImageComponent={ImageComponent} columns={2} />
							{/*Left in to show solution I Worked on before finding an npm package that did it better 
                  <CardList photos={this.state.photos}/>
                */}
						</ErrorBoundary>
					</Scroll>
				</section>
				<Footer />
			</div>
		);
	}
}

export default App;
