import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const Chips = props => {
	const { publish , version } = props;

	let text;
	if (publish) text = 'Publicado';
	else text = 'Não publicado';
	return (
		<div className='publish-chips'>
			<Chip
				label={`Version: ${version}`}
				onClick={e => console.log(e)}
				onDelete={e => console.log(e)}
				className='version'
				deleteIcon={<DoneIcon />}
			/>
			<Chip
					color={'primary'}
	        label={text}
	        onClick={e => console.log(e)}
	        onDelete={e => console.log(e)}
	        className='publish'
	        deleteIcon={<DoneIcon />}
	      />

			</div>
	);
};


export { Chips };
