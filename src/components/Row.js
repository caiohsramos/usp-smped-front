import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Edit, FormatAlignJustify, InsertLink, Visibility, Delete } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { Chips } from '../atoms';

const Row = props => {
	const { data } = props;
	return (
    <Card className='row'>
			<CardContent className='content'>
				<Typography gutterBottom variant="headline" component="h2">
				{data.name}
				</Typography>
				<div className = 'header'>
					<Chips version='2'/>
				</div>
			</CardContent>
      <CardActions className='actions'>
				<IconButton aria-label="Editar Criação do Formulário">
					<Edit/>
				</IconButton>
				<IconButton aria-label="Visualizar Respostas do Formulário">
					<FormatAlignJustify/>
				</IconButton>
				<IconButton aria-label="Compartilhar Formulário">
					<InsertLink/>
				</IconButton>
				<IconButton aria-label="Visualizar Criação do Formulário">
					<Visibility/>
				</IconButton>
				<IconButton aria-label="Excluir Formulário">
					<Delete/>
				</IconButton>
      </CardActions>
    </Card>
	);
};

export { Row };
