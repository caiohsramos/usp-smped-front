import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Warning from '@material-ui/icons/Warning';

const Chips = props => {
	const { publish , version, author } = props;

	let text, maker;

	if (publish) text = 'Publicado';
	else text = 'Não publicado';
	if (author) maker = author;
	else maker = 'Desconhecido';

	return (
        <div className='publish-chips flex -sb'>
            <div className='default-chips'>
                <Chip
                    avatar={
                        <Avatar>
                        <FaceIcon />
                        </Avatar>
                    }
                    color={'primary'}
                    label={maker}
                    onClick={e => console.log(e)}
                    className='chip avatar'
                />
                <Chip
                    color={'primary'}
                    label={text}
                    onClick={e => console.log(e)}
                    onDelete={e => console.log(e)}
                    className={`chip ${ publish ? 'publish': 'unpublish' }`}
                    deleteIcon={publish ? <DoneIcon /> : undefined}
                />
            </div>
            <Chip
                label={`Version: ${version}`}
                onClick={e => console.log(e)}
                className='version'
                onDelete={e => console.log(e)}
                deleteIcon={<KeyboardArrowDown />}
            />
        </div>
	);
};


export { Chips };
