import React, {Component} from 'react';

const contentStyle = {
	backgroundColor: '#eee',
	cursor: 'pointer',
	overflow: 'hidden',
	position: 'relative',
};

const overlayStyle = {
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
	position: 'absolute',
	textAlign: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}

class ImageComponent extends Component {
	state = {
		showOverlay: false,
		overlayOpacity: 0,
		imageOpacity: 1
	}

	showOverlay = () => {
		this.setState({ overlayOpacity: 1, imageOpacity: 0.3});
	}

	hideOverlay = () => {
		this.setState({ overlayOpacity: 0, imageOpacity: 1});
	}

	render() {
		const { margin, photo } = this.props;
		const { height, width } = photo;
		return (
			<div
				onMouseOver={this.showOverlay}
				onMouseOut={this.hideOverlay}
				style={{ margin, height, width, ...contentStyle }}
				className='card'>

				<img {...photo} alt="flickr" style={{ opacity: this.state.imageOpacity }} />

				<div style={{ opacity: this.state.overlayOpacity, ...overlayStyle }}>
					<div style={{textAlign: 'left'}}>
						<span style={{display: 'block', padding: '5px'}}>Title: {photo.title}</span>
						<span style={{display: 'block', padding: '5px'}}>Author: {photo.author}</span>
						<span style={{display: 'block', padding: '5px'}}>Date: {photo.dateTaken}</span>
						<span style={{display: 'block', padding: '5px'}}>Tags: {photo.tags}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default ImageComponent;
