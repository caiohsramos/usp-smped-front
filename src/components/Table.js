import React from 'react';
import { Row } from './Row';

const row = props => {
	var arr = [];
	for (let i = 0; i < props.length; i++) {
		arr.push(<div className="table-row"><Row data={props[i]}/></div>);
	}
	return arr;
};


const Table = props => {
	const { data } = props;
	return (
		<div className='table'>
			{row(data)}
		</div>
	);
};

export { Table };
