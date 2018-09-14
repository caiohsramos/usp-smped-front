import React from 'react';
import { Edit, FormatAlignJustify, InsertLink, Visibility, Delete } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { Row } from './Row';

const row = props => {
	var arr = [];
	for (let i = 0; i < props.length; i++) {
		arr.push(<tr><Row data={props[i]}/></tr>);
	}
	return arr;
};


const Table = props => {
	const { data } = props;
	return (
		<div className='table'>
		<table>
			{row(data)}
		</table>
		</div>
	);
};

export { Table };
