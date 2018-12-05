import React from 'react';
import SearchBox from './SearchBox';

const Header = (props) => (
	<header className="header">
		<div className="header-container">
			<div className="branding">
				<h1>Pictr</h1>
				<img src={require('../images/camera.png')} alt="cheese" />
			</div>
			<div>
				<SearchBox
					handleSearch={props.handleSearch}
					handleTimer={props.handleTimer}
				/>
			</div>
		</div>
	</header>
);

export default Header;
