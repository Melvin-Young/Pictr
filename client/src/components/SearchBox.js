import React from 'react';
import { delay } from '../utils/utils';

const SearchBox = (props) => {
	return (
		<div className="">
			<input
				className="searchTerm"
				type="search"
				placeholder="search: (e.g. red, fire truck)"
				onChange={props.handleSearch}
				onKeyUp={() => delay(function() {
					props.handleTimer();
				}, 1000)}
			/>
		</div>
	);
};

export default SearchBox;
