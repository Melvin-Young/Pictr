import React from 'react';
import Card from './Card';

const CardList = ({ photos }) => (
	<div className="content">
		{photos.map((photoUrl) => {
			return <Card key={photoUrl} src={photoUrl} />;
		})}
	</div>
);

export default CardList;
